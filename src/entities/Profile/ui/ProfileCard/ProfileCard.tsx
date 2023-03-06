import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfileCard.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Profile } from '../../model/types/profile';
import { Loader } from 'shared/ui/Loader/Loader';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstname: (value?: string) => void;
	onChangeLastname: (value?: string) => void;
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
		onChangeFirstname
	} = props;

	if (isLoading) {
		return (<div className={
			classNames(
				cls.ProfileCard,
				{ [cls.loading]: true },
				[className]
			)}
		>
			<Loader/>
		</div>);
	}

	if (error) {
		return (<div className={
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
		</div>);
	}

	return (
		<div className={
			classNames(
				cls.ProfileCard,
				{},
				[className]
			)}
		>
			<div className={cls.data}>
				<Input
					value={data?.first}
					placeholder={t('Ваше имя')}
					className={cls.input}
					onChange={onChangeFirstname}
					readonly={readonly}
				/>
				<Input
					value={data?.lastname}
					placeholder={t('Ваша фамилия')}
					className={cls.input}
					onChange={onChangeLastname}
					readonly={readonly}
				/>
			</div>
		</div>
	);
};
