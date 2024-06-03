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

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Click Me",
  style: { backgroundColor: "lightblue", color: "darkblue" },
};

export const WithAction = Template.bind({});
WithAction.args = {
  text: "Click Me",
  onClick: () => alert("Button clicked!"),
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  text: "Styled Button",
  style: { padding: "10px 20px", backgroundColor: "purple", color: "white" },
};
