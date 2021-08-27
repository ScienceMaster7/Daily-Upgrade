import React from "react";
import Button from "./Button";

export default {
  title: "Another test",
  component: { Button },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
