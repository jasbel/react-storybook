import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../../components/Label";

export default {
  title: "UI/Label",
  component: Label,
  argTypes: {
    size: {control: 'select'},
    color: {control: 'select'},
    fontColor: {control: 'color'}
  }
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "normal",
  allCaps: false, // true: capitalizar toda la palabra
};
export const AllCaps = Template.bind({});
AllCaps.args = {
  size: "h3",
  allCaps: true, // true: capitalizar toda la palabra
};
export const Secondary = Template.bind({});
Secondary.args = {
  size: "normal",
  color: 'secondary'
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  size: "normal",
  color: 'tertiary'
};

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  fontColor: '#ff0000',
  size: "h1",
}