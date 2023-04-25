import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

// eslint-disable-next-line trn-plugin/layer-imports
import '@/app/styles/index.scss';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/AvatarImg.jpeg';

import { ProfileCard } from './ProfileCard';


export default {
	title: 'entities/ProfileCard',
	component: ProfileCard,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	data: {
		username: 'admin',
		age: 31,
		country: Country.Russia,
		lastname: 'Asd',
		first: 'Qwe',
		currency: Currency.EUR,
		avatar
	},
};

export const WithError = Template.bind({});
WithError.args = {
	error: 'true',
};

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true
};
