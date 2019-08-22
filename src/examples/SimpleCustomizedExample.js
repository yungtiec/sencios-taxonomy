import React, { Component, Fragment } from "react";
import {
  widgets as bootstrapWidgets,
  templates as bootstrapTemplates
} from "@react-schema-form/bootstrap";
import { withTheme, Form } from "@react-schema-form/core";
import templates from "../components/templates";
import Print from "../utils/Print";

const SenciosForm = withTheme("SenciosTheme", {
  templates: {
    ...bootstrapTemplates,
    ...templates
  },
  widgets: {
    ...bootstrapWidgets
  }
})(Form);

class Example extends Component {
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
        <SenciosForm
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

export default Example;
