export default {
  schema: {
    title: "Widgets",
    type: "object",
    properties: {
      selectWidgetOptions: {
        title: "select widget for string",
        type: "string",
        enum: ["foo", "bar"],
        enumNames: ["Foo", "Bar"]
      }
    }
  },
  uiSchema: {
    selectWidgetOptions: {
      "ui:widget": "StringSelect"
    }
  },
  formData: {}
};
