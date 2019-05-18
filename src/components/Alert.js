import React from 'react';

export default function Alert (props) {
  if (props.showAlert){
    return(
      <div className="alert alert-primary" role="alert">
        All inputs needed!
      </div>
    );
  }
  return null;
}