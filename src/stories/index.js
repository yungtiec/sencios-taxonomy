import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Example, SimpleCustomizedExample, simple } from "../examples";

const styles = {
  padding: "25px"
};

const OuterPadding = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf("rjsf official example", module)
  .addDecorator(OuterPadding)
  .add("simple", () => <Example {...simple} />);

storiesOf("customized example", module)
  .addDecorator(OuterPadding)
  .add("with red label", () => <SimpleCustomizedExample {...simple} />);
