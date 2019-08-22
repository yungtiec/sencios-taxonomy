import React, { Component, Fragment } from "react";
import Form from "@react-schema-form/bootstrap";
import Print from "../utils/Print";

class OriginalRjsf extends Component {
  state = { cached: this.props.formData, formData: this.props.formData };

  static getDerivedStateFromProps(props, state) {
    if (props.formData !== state.cached) {
      return { cached: props.formData, formData: props.formData };
    }
    return null;
  }

  handleChange = ({ formData }) => {
    this.setState({ formData });
  };

  render() {
    const { schema, uiSchema, ...example } = this.props;

    return (
      <Fragment>
        <Form
          {...example}
          schema={schema}
          uiSchema={uiSchema}
          formData={this.state.formData}
          onChange={this.handleChange}
        />
        <Print data={this.state.formData} />
      </Fragment>
    );
  }
}

export default OriginalRjsf;
