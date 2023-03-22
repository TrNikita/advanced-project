import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

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
				{itemsList}
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
