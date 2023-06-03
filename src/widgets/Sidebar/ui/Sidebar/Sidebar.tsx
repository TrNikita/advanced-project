import { memo, useMemo, useState } from 'react';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { VStack } from '@/shared/ui/redesigned/Stack';
import cls from './Sidebar.module.scss';
import { useSidebarItems } from '../../model/selectors/getSidebarItems';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
	className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState(false);
	const sidebarItemsList = useSidebarItems();

	const onToggle = () => {
		console.log(collapsed);
		setCollapsed((prev) => !prev);
	};

	const itemsList = useMemo(
		() =>
			sidebarItemsList.map((item) => (
				<SidebarItem
					item={item}
					collapsed={collapsed}
					key={item.path}
				/>
			)),
		[collapsed, sidebarItemsList],
	);

	return (
		<aside
			data-testid="sidebar"
			className={classNames(
				cls.SidebarRedesigned,
				{ [cls.collapsedRedesigned]: collapsed },
				[className],
			)}
		>
			<AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
			<VStack role="navigation" gap="8" className={cls.items}>
				{itemsList}
			</VStack>
			<Icon
				data-testid="sidebar-toggle"
				onClick={onToggle}
				className={cls.collapseBtn}
				Svg={ArrowIcon}
				clickable
			/>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher short={collapsed} className={cls.lang} />
			</div>
		</aside>
	);
});
