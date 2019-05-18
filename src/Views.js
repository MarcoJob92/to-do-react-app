import React from 'react';
import Button from './components/Button';
import Select from './components/Select';

function WelcomePage(props) {
  return (
    <div id="welcome-page">
      <h3>Welcome to <b>My ToDo</b> App.</h3>
      <p>Click on the button below to get started!</p>
      {props.children}
    </div>
  );
}

function Form1(props) {
  const task = props.task;
  return ( 
    <form id="form-1">
      <div className="form-group">
        <label>Task title</label>
        <input type="text"
               name="title"
               value={task.title}
               onChange={props.handleChange}
               className="form-control" />
      </div>
      <div className="form-group">
        <label>Notes</label>
        <textarea name="notes"
                  value={task.notes}
                  onChange={props.handleChange} 
                  className="form-control" />
      </div>
      <div className="form-group">
        <label>Assigned to</label>
        <Select name="assigned"
                value={task.assigned}
                onChange={props.handleChange}
                options={["Me", "An employee"]} />
      </div>
    </form>
  );
}

function Form2(props) {
  const task = props.task;
  return (
    <form id="form-2" className="row">
      <div className="col-4 form-group">
        <label>Priority</label>
        <Select name="priority"
                value={task.priority}
                onChange={props.handleChange}
                options={["High", "Medium", "Low"]} />
      </div>
      <div className="col-4 form-group">
        <label>Status</label>
        <Select name="status"
                value={task.status}
                onChange={props.handleChange}
                options={["To do", "Work in progress", "Completed", "Cancelled"]} />
      </div>
      <div className="col-4 form-group">
        <label>To Complete by</label>
        <input type="date"
               name="complete"
               value={task.complete}
               onChange={props.handleChange}
               className="form-control" />
      </div>
    </form>
  );
}

function Summary(props) {
  const task = props.task;
  const keys = Object.keys(task);
  return (
    <div id="summary">
      <ul>
        {keys.map(key => (key!=='id' &&
          <li key={key}>
            {key}: {task[key]}
          </li>
        ))}
      </ul>
      {props.children}
    </div>
  );
}

function ListView(props){
  const list = props.list.map(obj => 
    <div className="card" key={obj.id}>
      <h5 className="card-header">{obj.title}</h5>
      <div className="card-body">
        <p className="card-text">{obj.notes}</p>
        <hr/>
        <p className="card-title"> Assigned to: {obj.assigned} </p>
        <p className="card-title"> To Complete by: {obj.complete} </p>
        <p className="card-title"> Priority: {obj.priority} </p>
        <p className="card-title"> Status: {obj.status} </p>
        <Button text="Update" onClick={() => props.onClick(obj)} />
      </div>
    </div>
  );
  return list;
}


export { WelcomePage, Form1, Form2, Summary, ListView }; 
