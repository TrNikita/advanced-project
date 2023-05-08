import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
// eslint-disable-next-line trn-plugin/layer-imports
import '@/app/styles/index.scss';
import { Input } from './Input';

export default {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Type text',
	value: '123123',
};
