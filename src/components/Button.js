import React from 'react';

function Button(props) {
    const onClick = props.onClick;
    return(
        <button onClick={onClick}
    		className={`btn btn-outline-primary ${props.text}`}>
            { props.text }
        </button>
    )
}

function Buttons (props) {
    const step = props.step,
          isUpdated = props.isUpdated;
    const [nextStep, goToViewPage, prevStep, saveTask] = props.events;
    let buttons = [];
    if (step === 1 || step === 2) {
      buttons.push([ 'Next', nextStep ]);
      if (isUpdated === true){
        buttons.push([ 'Cancel', goToViewPage ]);
      }
    }
    if (step === 2 || step === 3){
      buttons.push([ 'Prev', prevStep ]);
    }
    if (step === 3){
      buttons.push([ 'Save', saveTask ]);
    }
    
    return(
      <div className="div-buttons"> 
        { buttons.map(btn =>
          <Button text={btn[0]} onClick={btn[1]} key={btn[0]} />
        )}
      </div> 
    )
}


export { Button, Buttons }; 
