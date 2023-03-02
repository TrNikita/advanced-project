import cls from './SidebarItem.module.scss';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import React from 'react';
import { SidebarItemType } from 'widgets/Sidebar/model/items';

interface SideBarItemProps {
	item?: SidebarItemType;
	collapsed: boolean;
}

export const SidebarItem = (props: SideBarItemProps) => {
	const { t } = useTranslation();
	const {
		item,
		collapsed
	} = props;

	return (
		<AppLink
			theme={AppLinkTheme.SECONDARY}
			to={item.path}
			className={cls.item}
		>
			<item.Icon className={cls.icon}/>
			<span
				className={cls.link}
			>
				{t(item.text)}
			</span>
		</AppLink>
	);
};
