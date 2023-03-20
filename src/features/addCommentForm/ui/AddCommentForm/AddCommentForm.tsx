import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
	getAddCommentFormText, getAddCommentFormError
} from '../../model/selectors/addCommentFormSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	addCommentFormActions,
	addCommentFormReducer
} from '../../model/slices/addCommentFormSlice';
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface AddCommentFormProps {
	className?: string;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const text = useSelector(getAddCommentFormText);
	const error = useSelector(getAddCommentFormError);
	const dispatch = useAppDispatch();

	const onCommentChange = useCallback((value) => {
		dispatch(addCommentFormActions.setText(value));
	}, [dispatch]);

	// const onSendComment = useCallback((value) => {
	// 	dispatch();
	// }, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.AddCommentForm, {}, [className])}>
				<Input
					placeholder={t('Введите текст комментария')}
					value={text}
					onChange={onCommentChange}
					className={cls.input}
				/>
				<Button
					theme={ButtonTheme.OUTLINE}
					// onClick={onSendComment}
				>
					{t('Отправить')}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});

export default AddCommentForm;
