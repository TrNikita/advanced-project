import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import '@/app/styles/index.scss';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme } from './Text';


export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;
export const TextAndTitle = Template.bind({});
TextAndTitle.args = {
	title: 'Title asd asd',
	text: 'Description Description Description'
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
	title: 'Title asd asd',
};

export const onlyText = Template.bind({});
onlyText.args = {
	text: 'Description Description Description'
};

export const TextAndTitleDark = Template.bind({});
TextAndTitleDark.args = {
	title: 'Title asd asd',
	text: 'Description Description Description'
};
TextAndTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
	title: 'Title asd asd',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
	text: 'Description Description Description'
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
	title: 'Title asd asd',
	text: 'Description Description Description',
	theme: TextTheme.ERROR
};

export const SizeS = Template.bind({});
SizeS.args = {
	title: 'Title asd asd',
	text: 'Description Description Description',
	size: TextSize.S
};

export const SizeM = Template.bind({});
SizeM.args = {
	title: 'Title asd asd',
	text: 'Description Description Description',
	size: TextSize.M
};

export const SizeL = Template.bind({});
SizeL.args = {
	title: 'Title asd asd',
	text: 'Description Description Description',
	size: TextSize.L
};
