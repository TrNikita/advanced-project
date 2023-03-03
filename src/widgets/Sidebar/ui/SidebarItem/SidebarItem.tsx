import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';

interface SideBarItemProps {
	item?: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = memo((props: SideBarItemProps) => {
	const { t } = useTranslation();
	const {
		item,
		collapsed
	} = props;

	return (
		<AppLink
			theme={AppLinkTheme.SECONDARY}
			to={item.path}
			className={classNames(cls.item, { [cls.collapsed]: collapsed })}
		>
			<item.Icon className={cls.icon}/>
			<span
				className={cls.link}
			>
				{t(item.text)}
			</span>
		</AppLink>
	);
});