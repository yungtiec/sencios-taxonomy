import React, { Component, Fragment } from "react";
import {
  widgets as bootstrapWidgets,
  templates as bootstrapTemplates
} from "@react-schema-form/bootstrap";
import { withTheme, Form } from "@react-schema-form/core";
import templates from "../components/templates";
import fields from "../components/fields";
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

class SenciosRjsf extends Component {
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
          noHtml5Validate={true}
          fields={
            fields
          } /*
            weird that fields are not specified in withTheme func
          */
        />
        <Print data={this.state.formData} />
      </Fragment>
    );
  }
}

export default SenciosRjsf;
