/*eslint no-unused-vars: off*/
import React, { Fragment }from "react";
import PropTypes from "prop-types";
import BooleanInputField from "./../inputs/BooleanInput"

function BooleanInput(props) {
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

  inputProps.type = "boolean";
  const _onChange = selectedBoolean => props.onChange(selectedBoolean.value);

  const { rawErrors, ...cleanProps } = inputProps;

  return (
    <Fragment>
        <BooleanInputField
          isDisabled={disabled}
          autofocus={autofocus}
          handleChange={_onChange}
          value={value}
        />
        {/* <Print data={props} /> */}
      </Fragment>
  );
}

BooleanInput.defaultProps = {
  type: "boolean",
  value: false,
  required: false,
  disabled: false,
  readonly: false,
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  BooleanInput.propTypes = {
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

export default BooleanInput;
