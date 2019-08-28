import React from "react";
import PropTypes from "prop-types";
import "rc-tooltip/assets/bootstrap.css";
import Tooltip from "rc-tooltip";

function DescriptionTemplatePrimitive(props) {
  const { id, description } = props;
  if (!description) {
    // See #312: Ensure compatibility with old versions of React.
    return <div />;
  }
  if (typeof description === "string") {
    return (
      <Tooltip placement="right" trigger={["hover"]} overlay={<span id={id}>description</span>}>
        <a className="px-1">
          <img
            width="15px"
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bS41IDE3aC0xdi05aDF2OXptLS41LTEyYy40NjYgMCAuODQ1LjM3OC44NDUuODQ1IDAgLjQ2Ni0uMzc5Ljg0NC0uODQ1Ljg0NC0uNDY2IDAtLjg0NS0uMzc4LS44NDUtLjg0NCAwLS40NjcuMzc5LS44NDUuODQ1LS44NDV6Ii8+PC9zdmc+"
          />
        </a>
      </Tooltip>
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
  DescriptionTemplatePrimitive.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };
}

export default DescriptionTemplatePrimitive;
