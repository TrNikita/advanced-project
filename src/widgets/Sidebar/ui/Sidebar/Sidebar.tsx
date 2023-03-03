import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import React, { memo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const onToggle = () => {
		setCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid='sidebar'
			className=
				{classNames(
					cls.Sidebar,
					{ [cls.collapsed]: collapsed },
					[className]
				)}
		>
			<Button
				data-testid='sidebar-toggle'
				onClick={onToggle}
				className={cls.collapsedBtn}
				theme={ButtonTheme.BACKGROUND_INVERTED}
				size={ButtonSize.L}
				square
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={cls.items}>
				{SidebarItemsList.map((item) => (
					<SidebarItem
						item={item}
						collapsed={collapsed}
						key={item.path}
					/>
				))}
			</div>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher
					className={cls.lang}
					short={collapsed}/>
			</div>
		</div>
	);
});
