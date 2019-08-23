/*eslint no-unused-vars: off*/
import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const getSelectOptionFromValue = (value, options) => {
  if (!value) return;
  return options.filter(option => option.value === value)[0];
};

function BaseInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!props.id) {
    /*eslint-disable-next-line*/
    console.log("No id for", props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    value,
    placeholder,
    readonly,
    disabled,
    autofocus,
    onBlur,
    onFocus,
    options,
    schema,
    formContext,
    registry,
    ...inputProps
  } = props;

  inputProps.type = options.inputType || inputProps.type || "text";
  const { enumOptions } = options;
  const _onChange = selectedOption => props.onChange(selectedOption.value);

  const { rawErrors, ...cleanProps } = inputProps;
  const selected = getSelectOptionFromValue(value, enumOptions);

  return (
    <Select
      value={selected}
      onChange={_onChange}
      options={enumOptions}
      placeholder={placeholder || "Select..."}
    />
  );
}

BaseInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  BaseInput.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
  };
}

export default BaseInput;
