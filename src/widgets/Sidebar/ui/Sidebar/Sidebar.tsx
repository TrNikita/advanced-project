import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();

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
			>
				{t('ПЕРЕКЛЮЧИТЬ')}
			</Button>
			<div className={cls.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
	);
};
