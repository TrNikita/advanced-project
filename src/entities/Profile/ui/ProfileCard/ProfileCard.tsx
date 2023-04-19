import { useTranslation } from 'react-i18next';

import { Country, CountrySelect } from '@/entities/Country';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Input } from '@/shared/ui/Input/Input';
import { Loader } from '@/shared/ui/Loader/Loader';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text, TextAlign, TextTheme } from '@/shared/ui/Text/Text';

import cls from './ProfileCard.module.scss';


import { Profile } from '../../model/types/profile';


interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname?: (value?: string) => void;
	onChangeLastname?: (value?: string) => void;
	onChangeCity?: (value?: string) => void;
	onChangeAge?: (value?: string) => void;
	onChangeAvatar?: (value?: string) => void;
	onChangeUsername?: (value?: string) => void;
	onChangeCurrency?: (currency: Currency) => void;
	onChangeCounty?: (country: Country) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const { t } = useTranslation();
	const {
		className,
		data,
		isLoading,
		error,
		readonly,
		onChangeLastname,
		onChangeFirstname,
		onChangeAge,
		onChangeCity,
		onChangeUsername,
		onChangeAvatar,
		onChangeCurrency,
		onChangeCounty
	} = props;

	if (isLoading) {
		return (
			<HStack
				justify={'center'}
				max
				className={
					classNames(
						cls.ProfileCard,
						{ [cls.loading]: true },
						[className]
					)}
			>
				<Loader/>
			</HStack>);
	}

	if (error) {
		return (
			<HStack
				justify={'center'}
				max
				className={
					classNames(
						cls.ProfileCard,
						{},
						[className, cls.error]
					)}
			>
				<Text
					theme={TextTheme.ERROR}
					title={t('Ошибка')}
					text={t('Попробуйте обновить приложение')}
					align={TextAlign.CENTER}
				/>
			</HStack>);
	}

	const mods: Mods = {
		[cls.editing]: !readonly,
	};

	return (
		<VStack
			gap={'16'}
			max
			className={
				classNames(
					cls.ProfileCard,
					mods,
					[className]
				)}
		>

			{data?.avatar &&
					(<HStack
						justify='center'
						max
						className={cls.avatarWrapper}>
						<Avatar src={data?.avatar}/>
					</HStack>
					)}
			<Input
				value={data?.first}
				placeholder={t('Ваше имя')}
				className={cls.input}
				onChange={onChangeFirstname}
				readonly={readonly}
				data-testid={'ProfileCard.firstname'}
			/>
			<Input
				value={data?.lastname}
				placeholder={t('Ваша фамилия')}
				className={cls.input}
				onChange={onChangeLastname}
				readonly={readonly}
				data-testid={'ProfileCard.lastname'}
			/>
			<Input
				value={data?.age}
				placeholder={t('Ваш возраст')}
				className={cls.input}
				onChange={onChangeAge}
				readonly={readonly}
			/>
			<Input
				value={data?.city}
				placeholder={t('Город')}
				className={cls.input}
				onChange={onChangeCity}
				readonly={readonly}
			/>
			<Input
				value={data?.username}
				placeholder={t('Введите имя пользователя')}
				className={cls.input}
				onChange={onChangeUsername}
				readonly={readonly}
			/>
			<Input
				value={data?.avatar}
				placeholder={t('Введите ссылку на аватар')}
				className={cls.input}
				onChange={onChangeAvatar}
				readonly={readonly}
			/>
			<CurrencySelect
				className={cls.input}
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				className={cls.input}
				value={data?.country}
				onChange={onChangeCounty}
				readonly={readonly}
			/>
		</VStack>
	);
};
