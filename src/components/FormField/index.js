import React from 'react';

const FormField = ({label, type, ...rest}) => {
  if (type === "textarea"){
    return(
      <div>
      <label>
        {label}

        <textarea
          type = {type}
          {...rest}
        />
      </label>
    </div>
    );
  }
  
  return(
    <div>
      <label>
        {label}

        <input 
          type = {type}
          {...rest}
        />
      </label>
    </div>
  );
}

export default FormField;