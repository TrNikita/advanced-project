import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
import { HStack } from 'shared/ui/Stack';
import { ListBox } from 'shared/ui/ListBox/ListBox';

const MainPage = () => {
	const { t } = useTranslation('main');

	return (
		<Page>
			<div>asdasda</div>
			<HStack>
				<div>asdasd</div>
				<ListBox/>
			</HStack>
		</Page>
	);
};

export default MainPage;
