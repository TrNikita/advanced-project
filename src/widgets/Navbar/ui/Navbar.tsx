import React, { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HStack } from 'shared/ui/Stack';
import { NotificationButton } from 'features/notificationButton';
import { AvatarDropdown } from 'features/avatarDropdown';

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation();
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);

	if (authData) {
		console.log('authData', authData);
		return (
			<header className={classNames(cls.Navbar, {}, [className])}>
				<Text
					className={cls.appName}
					title={t('Название сайта')}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={RoutePath.articles_create}
					theme={AppLinkTheme.SECONDARY}
					className={cls.createBtn}
				>
					{t('Создать статью')}
				</AppLink>
				<HStack
					gap={'16'}
					className={cls.actions}
				>
					<NotificationButton/>
					<AvatarDropdown/>
				</HStack>
			</header>
		);
	}

	return (
		<header className={classNames(cls.Navbar, {}, [className])}>
			<Button
				theme={ButtonTheme.CLEAR_INVERTED}
				className={cls.links}
				onClick={onShowModal}
			>
				{t('Войти')}
			</Button>
			{isAuthModal && <LoginModal
				isOpen={isAuthModal}
				onClose={onCloseModal}
			/>}
		</header>
	);
});

export default Navbar;
