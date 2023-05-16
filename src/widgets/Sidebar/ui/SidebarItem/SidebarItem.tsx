import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import {
	AppLink as AppLinkDeprecated,
	AppLinkTheme,
} from '@/shared/ui/deprecated/AppLink';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';
import cls from './SidebarItem.module.scss';
import { SidebarItemType } from '../../model/types/sidebar';

interface SideBarItemProps {
	item: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo((props: SideBarItemProps) => {
	const { t } = useTranslation();
	const { item, collapsed } = props;

	const isAuth = useSelector(getUserAuthData);

	if (item.authOnly && !isAuth) {
		return null;
	}

	return (
		<ToggleFeatures
			feature={'isAppRedesigned'}
			on={
				<AppLink
					to={item.path}
					className={classNames(cls.item, {
						[cls.collapsed]: collapsed,
					})}
				>
					<Icon Svg={item.Icon} />
					<span className={cls.link}>{t(item.text)}</span>
				</AppLink>
			}
			off={
				<AppLinkDeprecated
					theme={AppLinkTheme.SECONDARY}
					to={item.path}
					className={classNames(cls.item, {
						[cls.collapsed]: collapsed,
					})}
				>
					<item.Icon className={cls.icon} />
					<span className={cls.link}>{t(item.text)}</span>
				</AppLinkDeprecated>
			}
		/>
	);
});
