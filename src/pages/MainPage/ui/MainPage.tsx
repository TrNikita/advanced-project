import React from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/Counter';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Button } from '@/shared/ui/deprecated/Button';
import { Page } from '@/widgets/Page';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<Page data-testid="MainPage">
			<ThemeSwitcher />
			<Counter />
			<Button>123</Button>
			{t('Главная страница')}
		</Page>
	);
};

export default MainPage;
