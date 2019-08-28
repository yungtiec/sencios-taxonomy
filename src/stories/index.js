import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { OriginalRjsf, SenciosRjsf, Field } from "../examples";
import { simple, inline, select, numberInput } from "../examples/schemas";

const styles = {
  padding: "25px"
};

const OuterPadding = storyFn => <div style={styles}>{storyFn()}</div>;

storiesOf("Original rjsf", module)
  .addDecorator(OuterPadding)
  .add("simple form", () => <OriginalRjsf {...simple} />);

storiesOf("Sencios rjsf", module)
  .addDecorator(OuterPadding)
  .add("simple form", () => <SenciosRjsf {...simple} />)
  .add("inline form", () => <SenciosRjsf {...inline} />)
  .add("string select", () => <SenciosRjsf {...select} />)
  .add("number input", () => <SenciosRjsf {...numberInput} />);

storiesOf("Field", module)
  .addDecorator(OuterPadding)
  .add("BooleanInput", () => <Field {...simple} />);
