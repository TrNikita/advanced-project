import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = memo(
	(props: EditableProfileCardHeaderProps) => {
		const { className } = props;

		const { t } = useTranslation('profile');
		const authData = useSelector(getUserAuthData);
		const profileData = useSelector(getProfileData);
		const canEdit = authData?.id === profileData?.id;
		const readonly = useSelector(getProfileReadonly);
		const dispatch = useAppDispatch();

		const onEdit = useCallback(() => {
			dispatch(profileActions.setReadonly(false));
		}, [dispatch]);

		const onCancelEdit = useCallback(() => {
			dispatch(profileActions.cancelEdit());
		}, [dispatch]);

		const onSave = useCallback(() => {
			dispatch(updateProfileData());
		}, [dispatch]);

		return (
			<Card padding="24" fullWidth border="partial">
				<HStack
					max
					justify="between"
					className={classNames('', {}, [className])}
				>
					<Text title={t('Профиль')} />
					{canEdit && (
						<div>
							{readonly ? (
								<Button
									onClick={onEdit}
									data-testid="EditableProfileCardHeader.EditButton"
								>
									{t('Редактировать')}
								</Button>
							) : (
								<HStack gap="8">
									<Button
										onClick={onCancelEdit}
										data-testid="EditableProfileCardHeader.CancelButton"
										color="error"
									>
										{t('Отменить')}
									</Button>
									<Button
										onClick={onSave}
										data-testid="EditableProfileCardHeader.SaveButton"
										color="success"
									>
										{t('Сохранить')}
									</Button>
								</HStack>
							)}
						</div>
					)}
				</HStack>
			</Card>
		);
	},
);
