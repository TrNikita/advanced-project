import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getUserAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack/HStack/HStack';
import { getProfileData } from 'features/editableProfileCard/model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from 'features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from 'features/editableProfileCard/model/slice/profileSlice';
import { updateProfileData } from 'features/editableProfileCard/model/services/updateProfileData/updateProfileData';

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
		<HStack
			justify='between'
			max
		>
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
							<HStack
								gap={'8'}
							>
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
