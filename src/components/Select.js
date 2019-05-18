import React from 'react';

export default function Select(props) {
  	return(
	  	<select name={props.name} 
	  	        value={props.value}
	                onChange={props.onChange}
	                className="form-control">
	        
	        <option value="">Please, select</option>
	        {props.options.map(opt => 
	        	<option value={opt} key={opt}> {opt} </option>
	        )}
		</select>
         )
}
