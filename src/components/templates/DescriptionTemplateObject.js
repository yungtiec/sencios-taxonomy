import React from "react";
import PropTypes from "prop-types";

function DescriptionTemplateObject(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  if (typeof description === "string") {
    return (
      <p id={id} className="field-description font-weight-light">
        {description}
      </p>
    );
  } else {
    return (
      <div id={id} className="field-description">
        {description}
      </div>
    );
  }
}

if (process.env.NODE_ENV !== "production") {
  DescriptionTemplateObject.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };
}

export default DescriptionTemplateObject;
