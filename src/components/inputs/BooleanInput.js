import React from "react";
import "./BooleanInput.scss";


const BooleanInput = props => {
  const { handleChange, value } = props;

  return (
  <div className="boolean-input-container">
    <div className="button-container" onClick={() => handleChange({value: true})}>
      <div className={value ? "button-selected-true" : "default-button" }>Yes</div>
    </div>
    <div className="button-container" onClick={() => handleChange({value: false})}>
      <div className={!value ? "button-selected-true": "default-button"}>No</div>
    </div>
  </div>
  )
}
export default BooleanInput;
