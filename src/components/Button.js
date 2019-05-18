import React from 'react';

export default function Button(props) {
  const onClick = props.onClick;
  return(
    <button onClick={onClick}
    		className={`btn btn-outline-primary ${props.text}`}>
      { props.text }
    </button>
  )
}
