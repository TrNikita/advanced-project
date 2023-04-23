import { Menu } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';

import cls from './Dropdown.module.scss';

import { AppLink } from '../../../AppLink/AppLink';
import { Button } from '../../../Button/Button';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';


interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
	direction?: DropdownDirection;
}

export function Dropdown(props: DropdownProps) {
	const { className, items, trigger, direction = 'bottom right' } = props;

	const menuClasses = [mapDirectionClass[direction]];

	return (
		<Menu as='div' className={
			classNames(
				cls.Dropdown,
				{},
				[className, popupCls.popup]
			)}
		>
			<Menu.Button className={popupCls.trigger}>
				{trigger}
			</Menu.Button>
			<Menu.Items className={classNames(cls.menu, {}, menuClasses)}>
				{items?.map((item, index) => {
					const content = ({ active }: { active: boolean }) => (
						<Button
							onClick={item.onClick}
							disabled={item.disabled}
							className={
								classNames(
									cls.item,
									{ [popupCls.active]: active }
								)}
						>
							{item.content}
						</Button>
					);

					return item.href ?
						(<Menu.Item
							as={AppLink}
							to={item.href}
							disabled={item.disabled}
							key={`dropdown-key${index}`}
						>
							{content}
						</Menu.Item>)
						: (<Menu.Item
							as={Fragment}
							disabled={item.disabled}
							key={`dropdown-key${index}`}
						>
							{content}
						</Menu.Item>);

				})}
			</Menu.Items>
		</Menu>
	);
}
