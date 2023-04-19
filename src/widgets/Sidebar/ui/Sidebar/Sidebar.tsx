import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';
import { LangSwitcher } from '@/shared/ui/LangSwitcher/ui/LangSwitcher';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

import cls from './Sidebar.module.scss';


import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';


interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSelector(getSidebarItems);

	const onToggle = () => {
		setCollapsed(prevState => !prevState);
	};

	const itemsList = useMemo(() =>
		sidebarItemsList.map((item) => (
			<SidebarItem
				item={item}
				collapsed={collapsed}
				key={item.path}
			/>
		)), [collapsed, sidebarItemsList]);

	return (
		<aside
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
			<VStack
				role='navigation'
				gap='8'
				className={cls.items}>
				{itemsList}
			</VStack>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher
					className={cls.lang}
					short={collapsed}/>
			</div>
		</aside>
	);
});
