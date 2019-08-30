export default {
  schema: {
    title: "A registration form",
    description: "A simple form example.",
    type: "object",
    required: ["firstName", "lastName"],
    properties: {
      firstName: {
        type: "string",
        title: "First name"
      },
      lastName: {
        type: "string",
        title: "Last name"
      },
      age: {
        type: "integer",
        title: "Age"
      },
      bio: {
        type: "string",
        title: "Bio"
      },
      password: {
        type: "string",
        title: "Password",
        minLength: 3
      },
      telephone: {
        type: "string",
        title: "Telephone",
        minLength: 10
      }
    }
  },
  uiSchema: {
    firstName: {
      "ui:autofocus": true,
      "ui:emptyValue": "",
      "ui:options": {
        inline: true
      }
    },
    lastName: {
      "ui:options": {
        inline: true
      }
    },
    age: {
      "ui:widget": "NumberInput",
      "ui:title": "Age of person",
      "ui:description": "(earthian year)",
      "ui:options": {
        inline: true
      }
    },
    bio: {
      "ui:widget": "textarea",
      "ui:options": {
        inline: true
      }
    },
    password: {
      "ui:widget": "password",
      "ui:help": "Hint: Make it strong!",
      "ui:options": {
        inline: true
      }
    },
    date: {
      "ui:widget": "alt-datetime",
      "ui:options": {
        inline: true
      }
    },
    telephone: {
      "ui:options": {
        inputType: "tel",
        inline: true
      }
    }
  },
  formData: {
    firstName: "Chuck",
    lastName: "Norris",
    age: 75,
    bio: "Roundhouse kicking asses since 1940",
    password: "noneed"
  }
};
