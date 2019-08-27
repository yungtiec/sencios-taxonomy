export default {
  schema: {
    title: "Widgets",
    type: "object",
    properties: {
      numberInput: {
        title: "number input",
        type: "number"
      }
    }
  },
  uiSchema: {
    numberInput: {
      "ui:widget": "NumberInput",
      "ui:options": {
        inline: true
      }
    }
  },
  formData: {}
};
