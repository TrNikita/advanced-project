import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';


export default {
	title: 'pages/ArticleEditPage/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => <ArticleDetailsPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
