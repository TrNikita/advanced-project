import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { NotificationItem } from './NotificationItem';

export default {
	title: 'entities/NotificationItem',
	component: NotificationItem,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	// decorators: [StoreDecorator({})]
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
	<NotificationItem {...args} />
);

const notification = {
	id: '1',
	title: 'Уведомление',
	description: 'Описание',
};

export const Normal = Template.bind({});
Normal.args = {
	item: notification,
};
