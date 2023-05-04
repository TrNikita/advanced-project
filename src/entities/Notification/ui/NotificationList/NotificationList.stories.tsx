import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { NotificationList } from './NotificationList';

import { Notification } from '../../model/types/notification';


export default {
	title: 'entities/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [ StoreDecorator({})]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

const notification: Notification = {
	id: '1',
	title: 'Уведомление',
	description: 'Описание',
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
	mockData: [
		{
			url: `${__API__}/notifications`,
			method: 'GET',
			status: 200,
			response: [
				{ ...notification, id: '1' },
				{ ...notification, id: '2' },
				{ ...notification, id: '3' },
			],
		}]
};
