import React from 'react';

function Input({onInputChange, placeholder}) {
  return <input onChange={(e) => { onInputChange(e.target.value) }} placeholder={placeholder} type="text" />
}

export default Input;
