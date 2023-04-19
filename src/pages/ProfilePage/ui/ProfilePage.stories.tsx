import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import { Theme } from '@/app/providers/ThemeProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import ProfilePage from './ProfilePage';


export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
	profile: {
		form: {
			username: 'admin',
			age: 31,
			country: Country.Russia,
			lastname: 'Asd',
			first: 'Qwe',
			currency: Currency.EUR,
		}
	}
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	profile: {
		form: {
			username: 'admin',
			age: 31,
			country: Country.Russia,
			lastname: 'Asd',
			first: 'Qwe',
			currency: Currency.EUR,
		}
	}
})];
