import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Article } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';


export default {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
	decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

const article: Article = {
	id: '1',
	title: '',
	img: '',
	blocks: [],
	createdAt: '',
	user: { id: '1', username: '' },
	views: 123,
	type: [],
	subtitle: ''
};

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
	mockData: [
		{
			url: `${__API__}/articles?_limit=3`,
			method: 'GET',
			status: 200,
			response: [
				{ ...article, id: '1' },
				{ ...article, id: '2' },
				{ ...article, id: '3' },
			],
		}]
};
