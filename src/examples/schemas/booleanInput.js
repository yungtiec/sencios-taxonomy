export default {
  schema: {
    title: "Widgets",
    type: "object",
    properties: {
      booleanWidgetOptions: {
        title: "boolean widget",
        type: "boolean",
      }
    }
  },
  uiSchema: {
    booleanWidgetOptions: {
      "ui:widget": "BooleanInput"
    }
  },
  formData: {}
};
