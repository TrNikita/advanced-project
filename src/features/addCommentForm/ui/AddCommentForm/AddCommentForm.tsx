import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Input } from '@/shared/ui/deprecated/Input';
import { HStack } from '@/shared/ui/deprecated/Stack';
import cls from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import {
	addCommentFormActions,
	addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { t } = useTranslation();
	const { className, onSendComment } = props;
	const text = useSelector(getAddCommentFormText);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback(
		(value: string) => {
			dispatch(addCommentFormActions.setText(value));
		},
		[dispatch],
	);

	const onSendHandler = useCallback(() => {
		onSendComment(text || '');
		onCommentTextChange('');
	}, [onCommentTextChange, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<HStack
				data-testid="AddCommentForm"
				max
				justify={'between'}
				className={classNames(cls.AddCommentForm, {}, [className])}
			>
				<Input
					placeholder={t('Введите текст комментария')}
					value={text}
					onChange={onCommentTextChange}
					className={cls.input}
					data-testid="AddCommentForm.Input"
				/>
				<Button
					theme={ButtonTheme.OUTLINE}
					onClick={onSendHandler}
					data-testid="AddCommentForm.Button"
				>
					{t('Отправить')}
				</Button>
			</HStack>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;
