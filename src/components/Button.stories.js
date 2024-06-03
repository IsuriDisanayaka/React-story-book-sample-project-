import React from "react";
import Button from "./Button";

export default {
  title: "Example/MyButton",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Hello World",
};
