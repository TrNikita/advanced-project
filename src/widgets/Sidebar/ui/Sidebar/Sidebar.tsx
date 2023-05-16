import { memo, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { AppLogo } from '@/shared/ui/redesigned/AppLogo';
import { Icon } from '@/shared/ui/redesigned/Icon';
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
		setCollapsed((prevState) => !prevState);
	};

	console.log('sidebarItemsList', sidebarItemsList);

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
		<ToggleFeatures
			feature={'isAppRedesigned'}
			on={
				<aside
					data-testid="sidebar"
					className={classNames(
						cls.SidebarRedesigned,
						{ [cls.collapsed]: collapsed },
						[className],
					)}
				>
					<AppLogo
						size={collapsed ? 30 : 50}
						className={cls.appLogo}
					/>
					<VStack role="navigation" gap="8" className={cls.items}>
						{itemsList}
					</VStack>
					<Icon
						data-testid="sidebar-toggle"
						onClick={onToggle}
						className={cls.collapsedBtn}
						Svg={ArrowIcon}
					>
					</Icon>
				</aside>
			}
			off={
				<aside
					data-testid="sidebar"
					className={classNames(
						cls.Sidebar,
						{ [cls.collapsed]: collapsed },
						[className],
					)}
				>
					<Button
						data-testid="sidebar-toggle"
						onClick={onToggle}
						className={cls.collapsedBtn}
						theme={ButtonTheme.BACKGROUND_INVERTED}
						size={ButtonSize.L}
						square
					>
						{collapsed ? '>' : '<'}
					</Button>
					<div className={cls.switchers}>
						<ThemeSwitcher />
						<LangSwitcher className={cls.lang} short={collapsed} />
					</div>
				</aside>
			}
		/>
	);
});
