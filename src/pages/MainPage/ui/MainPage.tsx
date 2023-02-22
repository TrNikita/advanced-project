import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
	const { t } = useTranslation('main');
	const [value, setValue] = useState('');

	const onChange = (val: string) => {
		setValue(val);
	};

	return (
		<div>
			{t('Главная страница')}
			<Input
				placeholder={t('Введите текст')}
				onChange={onChange}
				value={value}
			/>
		</div>
	);
};

export default MainPage;
