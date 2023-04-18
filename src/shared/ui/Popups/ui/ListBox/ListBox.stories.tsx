import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
	title: 'shared/ListBox',
	component: ListBox,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [
		(Story) => (
			<div style={{ padding: 100 }}>
				<Story/>
			</div>)
	]
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>;

export const Normal = Template.bind({});
Normal.args = {
	value: '123',
	items: [
		{ value: '1234', content: '4567' },
		{ value: '1235', content: '4568' },
		{ value: '1236', content: '4569' },
	]
};

export const topLeft = Template.bind({});
topLeft.args = {
	value: '123',
	direction: 'top left',
	items: [
		{ value: '1234', content: '45674567' },
		{ value: '1235', content: '45684567' },
		{ value: '1236', content: '45694567' },
	]
};

export const topRight = Template.bind({});
topRight.args = {
	value: '123',
	direction: 'top right',
	items: [
		{ value: '1234', content: '45674567' },
		{ value: '1235', content: '45684567' },
		{ value: '1236', content: '45694567' },
	]
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
	value: '123',
	direction: 'bottom left',
	items: [
		{ value: '1234', content: '45674567' },
		{ value: '1235', content: '45684567' },
		{ value: '1236', content: '45694567' },
	]
};

export const bottomRight = Template.bind({});
bottomRight.args = {
	value: '123',
	direction: 'bottom right',
	items: [
		{ value: '1234', content: '45674567' },
		{ value: '1235', content: '45684567' },
		{ value: '1236', content: '45694567' },
	]
};
