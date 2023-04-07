import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
	onChange: (value: string) => '',
	label: 'asd',
	defaultValue: 'qwe',
	value: 'zxc',
	items: [
		{
			value: '123',
			content: '456'
		},
		{
			value: '456',
			content: '789'
		},
		{
			value: '789',
			content: '123'
		},
	]
};
