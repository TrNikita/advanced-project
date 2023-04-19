import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlePage from './ArticlePage';


export default {
	title: 'pages/ArticlePage/ArticlePage',
	component: ArticlePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticlePage>;

const Template: ComponentStory<typeof ArticlePage> = (args) => <ArticlePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
