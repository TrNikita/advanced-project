import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile');

	const authData = useSelector(getUserAuthData);
	const profileData = useSelector(getProfileData);
	const canEdit = authData?.id === profileData?.id;
	const readonly = useSelector(getProfileReadonly);
	const dispatch = useAppDispatch();

	const onEdit = useCallback(() => {
		dispatch(profileActions.setReadonly(false));
	}, [dispatch]
	);
	const onCancelEdit = useCallback(() => {
		dispatch(profileActions.cancelEdit());
	}, [dispatch]
	);
	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]
	);

	return (
		<HStack justify='between'>
			<Text title={t('Профиль')}/>
			{canEdit && (
				<>
					{readonly
						? (
							<Button
								theme={ButtonTheme.OUTLINE}
								onClick={onEdit}
							>
								{t('Редактировать')}
							</Button>
						) : (
							<HStack gap={'8'}>
								<Button
									theme={ButtonTheme.OUTLINE_RED}
									onClick={onCancelEdit}
								>
									{t('Отменить')}
								</Button>
								<Button
									theme={ButtonTheme.OUTLINE}
									onClick={onSave}
								>
									{t('Сохранить')}
								</Button>
							</HStack>
						)
					}
				</>
			)}
		</HStack>
	);
};
