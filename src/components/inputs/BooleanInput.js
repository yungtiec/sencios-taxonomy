import React from "react";

const divStyle = {
  display: 'flex',
  margin: '10px'
};

const btnContainer = {
  cursor: 'pointer',
  borderLeft: '.5px solid #E5E5E5',
  borderRight: '.5px solid #E5E5E5',
  borderBottom: '.5px solid #E5E5E5',
};

const trueBtnSelected = {
  width: '78.5px',
  height: '25px',
  fontSize: '12px',
  lineHeight: '14px',
  border: 'none',
  color: '#80C3AC',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '3px #80C3AC solid',
  borderBottom: '.5px solid #E5E5E5'
};

const FalseBtnSelected = {
  width: '78.5px',
  height: '25px',
  fontSize: '12px',
  lineHeight: '14px',
  border: 'none',
  color: '#AFAFAF',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTop: '3px #AFAFAF solid',
  borderBottom: '.5px solid #E5E5E5'
};

const defaultBtn = {
  width: '78.5px',
  height: '25px',
  fontSize: '12px',
  lineHeight: '14px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F7F7F7',
  border: '.5px solid #E5E5E5'
};


const BooleanInput = props => {
  const { handleChange, value } = props;

  return (
  <div style={divStyle}>
    <div style={btnContainer} onClick={() => handleChange({value: true})}>
      <div style={value ? trueBtnSelected : defaultBtn }>Yes</div>
    </div>
    <div style={btnContainer} onClick={() => handleChange({value: false})}>
      <div style={!value ? FalseBtnSelected: defaultBtn}>No</div>
    </div>
  </div>
  )
}
export default BooleanInput;
