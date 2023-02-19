import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal>
	= (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi commodi, dolore doloremque dolorum ducimus eveniet fugit harum hic laborum libero natus nobis optio recusandae sapiente similique sit ut? Consequatur culpa cum, debitis deserunt doloremque doloribus est et fugit hic ipsam molestiae nemo nesciunt odit praesentium ratione rerum sed tempora totam. Accusamus, corporis doloremque dolores ea hic ipsam laborum magni minima neque nesciunt numquam officiis optio provident repellat sint ullam unde vel voluptates? Distinctio earum eius eveniet fugit illo labore laborum libero nemo, nostrum pariatur ut, velit vitae voluptatibus. Debitis esse fugit iure libero neque quis recusandae rerum veniam.'
};

export const Dark = Template.bind({});
Dark.args = {
	isOpen: true,
	children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam animi commodi, dolore doloremque dolorum ducimus eveniet fugit harum hic laborum libero natus nobis optio recusandae sapiente similique sit ut? Consequatur culpa cum, debitis deserunt doloremque doloribus est et fugit hic ipsam molestiae nemo nesciunt odit praesentium ratione rerum sed tempora totam. Accusamus, corporis doloremque dolores ea hic ipsam laborum magni minima neque nesciunt numquam officiis optio provident repellat sint ullam unde vel voluptates? Distinctio earum eius eveniet fugit illo labore laborum libero nemo, nostrum pariatur ut, velit vitae voluptatibus. Debitis esse fugit iure libero neque quis recusandae rerum veniam.'
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];


