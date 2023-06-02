import React from 'react';
import { useTranslation } from 'react-i18next';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';
import { Page } from '@/widgets/Page';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<Page data-testid="MainPage">
			<div>{t('username: admin')}</div>
			<div>{t('password: 123')}</div>
		</Page>
	);
};

export default MainPage;
