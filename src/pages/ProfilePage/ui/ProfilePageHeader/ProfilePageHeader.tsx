import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ProfilePageHeader.module.scss';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useCallback } from 'react';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile');
	const {
		className,
	} = props;

	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]
	);
	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(true));
	}, [dispatch]
	);

	return (
		<div className={
			classNames(
				cls.ProfilePageHeader,
				{},
				[className]
			)}
		>
			<Text title={t('Профиль')}/>
			{readonly ? (
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}
					onClick={onEdit}
				>
					{t('Редактировать')}
				</Button>
			) : (
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.editBtn}
					onClick={onCancelEdit}
				>
					{t('Отменить')}
				</Button>
			)
			}
		</div>
	);
};
