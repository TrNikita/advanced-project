import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { CommentCard } from './CommentCard';

export default {
	title: 'entities/Comment/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
	<CommentCard {...args} />
);

const normalArgs = {
	comment: {
		id: '1',
		text: 'hello world',
		user: { id: '1', username: 'Vasya' },
	},
};

export const Normal = Template.bind({});
Normal.args = normalArgs;

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = normalArgs;
NormalRedesigned.decorators = [FeaturesFlagsDecorator({ isAppRedesigned:true })];

export const Loading = Template.bind({});
Loading.args = {
	comment: {
		id: '1',
		text: 'hello world',
		user: { id: '1', username: 'Vasya' },
	},
	isLoading: true,
};
