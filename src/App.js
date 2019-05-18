import React, { useState } from 'react';
import { WelcomePage, Form1, Form2, ListView, Summary } from './Views';
import { Buttons } from './components/Button';
import Alert from './components/Alert';

function App (props) {
  // Hooks
  const [step, setStep] = useState(0);
  const [showAlert, setShowAlert] = useState(false);
  const [isUpdated, setisUpdated] = useState(false);
  const [task, setTask] = useState({
          title: '', notes: '', assigned: '',         // Form1
          priority: '', status: '', complete: ''      // Form2
        });
  const [toDoList, setToDoList] = useState([]);
  const [idTask, setIdTask] = useState(0);


  const prevStep = () => setStep(step - 1);

  const nextStep = () => {
    const isValid = validateForm();
    if (isValid){
      setStep(step + 1);
      setShowAlert(false);
    } else {
      setShowAlert(true);
    }
  }

  const validateForm = () => {
    const min = (step === 1 ? 0 : 3),
          max = (step === 1 ? 3 : 6);
    let isValid = true;
    Object.values(task).slice(min,max).forEach((el) => {
      if(el.trim() === ''){
        isValid = false; 
      }
    });
    return isValid;
  }

  const handleInputChange = event => {
    let obj = {[event.target.name] : event.target.value};
    const updatedTask = Object.assign(task, obj);
    setTask({...updatedTask});
    console.log(task);
  }

  const saveTask = () => {
    if (task.id != null){
      // Update
      toDoList[task.id] = task;
    } else {
      // Save
      setIdTask(idTask + 1);
      task.id = idTask;
      setToDoList( [...toDoList, task] );
    }
    goToViewPage();
  }

  // It initialises State to update an already created Task
  const updateTask = obj => {
    setTask({...obj});    
    setisUpdated(true);
    setStep(1);
  }

  const goToViewPage = () => {
    setStep(4);
    setTask({
      title: '', notes: '', assigned: '',
        priority: '', status: '', complete: ''
    });
    setisUpdated(false);
    setShowAlert(false);
  }

  return (
      <>
        {step === 0 &&
          <WelcomePage start={() => setStep(1)} />
        }
        {step === 1 &&
          <Form1 task={task}
                 handleChange={handleInputChange} />
        }
        {step === 2 &&
          <Form2 task={task}
                 handleChange={handleInputChange} />
        }
        {step === 3 &&
          <Summary task={task} />
        }
        {step === 4 &&
          <ListView list={toDoList}
                    onClick={updateTask}
                    newTask={() => setStep(1)} />
        }

        <Buttons step={step}
                 isUpdated={isUpdated}
                 events={[nextStep, goToViewPage, prevStep, saveTask]} />
        <Alert showAlert={showAlert} />
      </>
  );
}


export default App;
