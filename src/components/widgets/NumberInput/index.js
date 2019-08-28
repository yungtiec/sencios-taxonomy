/*eslint no-unused-vars: off*/
import React from "react";
import PropTypes from "prop-types";
import InputNumber from "rc-input-number";
import styles from "./NumberInput.scss";

function NumnberInput(props) {
  // Note: since React 15.2.0 we can't forward unknown element attributes, so we
  // exclude the "options" and "schema" ones here.
  if (!props.id) {
    /*eslint-disable-next-line*/
    console.log("No id for", props);
    throw new Error(`no id for props ${JSON.stringify(props)}`);
  }
  const {
    value,
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
  const _onChange = value => {
    return props.onChange(value === "" ? options.emptyValue : value);
  };

  const { rawErrors, ...cleanProps } = inputProps;

  return (
    <InputNumber
      readOnly={readonly}
      disabled={disabled}
      autoFocus={autofocus}
      step={schema.step || 1}
      value={value == null ? "" : value}
      max={schema.max || Infinity}
      min={schema.min || -Infinity}
      {...cleanProps}
      onChange={_onChange}
      onBlur={onBlur && (event => onBlur(inputProps.id, event.target.value))}
      onFocus={onFocus && (event => onFocus(inputProps.id, event.target.value))}
    />
  );
}

NumnberInput.defaultProps = {
  type: "text",
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  NumnberInput.propTypes = {
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

export default NumnberInput;
