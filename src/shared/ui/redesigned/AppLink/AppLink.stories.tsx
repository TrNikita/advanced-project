import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { AppLink } from './AppLink';

export default {
	title: 'shared/AppLogo',
	component: AppLink,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
	<AppLink {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
