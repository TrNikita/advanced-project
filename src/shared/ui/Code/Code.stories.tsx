import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Code } from './Code';

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
	text: 'export default {\n' +
		'\ttitle: \'shared/Code\',\n' +
		'\tcomponent: Code,\n' +
		'\targTypes: {\n' +
		'\t\tbackgroundColor: { control: \'color\' },\n' +
		'\t},\n' +
		'} as ComponentMeta<typeof Code>;\n' +
		'\n' +
		'const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n' +
		'\n' +
		'export const Normal = Template.bind({});'
};

