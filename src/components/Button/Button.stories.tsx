import { text, withKnobs } from "@storybook/addon-knobs";
import React from "react";
import Button from "./Button";

export default { title: "Button", decorators: [withKnobs] };

export const basic = () => {
  const content = text("Label", "My Button");

  return <Button>{content}</Button>;
};
