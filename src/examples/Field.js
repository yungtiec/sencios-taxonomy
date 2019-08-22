import React, { Component, Fragment } from "react";
import BooleanInput from "../components/inputs/BooleanInput";
import Print from "../utils/Print";

console.log(BooleanInput);

class Field extends Component {
  state = { cached: this.props.value, value: this.props.value };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.cached) {
      return { cached: props.value, value: props.value };
    }
    return null;
  }

  handleChange = ({ value }) => {
    this.setState({ value });
  };

  render() {
    const {} = this.props;

    return (
      <Fragment>
        <BooleanInput 
          handleChange={this.handleChange}
          value={this.state.value}
        />
        <Print data={this.state} />
      </Fragment>
    );
  }
}

export default Field;
