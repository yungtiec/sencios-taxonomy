export default {
  schema: {
    title: "Widgets",
    type: "object",
    properties: {
      stringSelect: {
        title: "select widget for string",
        type: "string",
        enum: ["foo", "bar"],
        enumNames: ["Foo", "Bar"]
      },
      numberSelect: {
        title: "select widget for number",
        type: "number",
        enum: [1, 2],
        enumNames: ["one", "two"]
      }
    }
  },
  uiSchema: {
    stringSelect: {
      "ui:widget": "SelectWidget",
      "ui:options": {
        inline: true
      }
    },
    numberSelect: {
      "ui:widget": "SelectWidget",
      "ui:options": {
        inline: true
      }
    }
  },
  formData: {}
};
