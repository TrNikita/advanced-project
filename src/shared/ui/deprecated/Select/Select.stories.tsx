import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Select } from './Select';

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	label: 'Add something',
	options: [
		{ value: '123', content: 'First' },
		{ value: '1234', content: 'Second' },
		{ value: '12356', content: 'Third' },
	],
};
