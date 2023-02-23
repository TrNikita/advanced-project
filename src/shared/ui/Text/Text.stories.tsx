import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import 'app/styles/index.scss';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { OutlineDark } from 'shared/ui/Button/Button.stories';

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


