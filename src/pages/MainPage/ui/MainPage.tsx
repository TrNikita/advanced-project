import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<Page>
			<ListBox
				defaultValue={t('Выберите значение')}
				value={undefined}
				onChange={(value: string) => {
				}}
				items={[
					{ value: '1', content: '123' },
					{ value: '2', content: '456', disabled: true },
					{ value: '3', content: '789' },
				]}
			/>
		</Page>
	);
};

export default MainPage;
