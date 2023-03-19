import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AddCommentForm.module.scss';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import {
	getAddCommentFormText, getAddCommentFormError
} from '../../model/selectors/addCommentFormSelectors';

interface AddCommentFormProps {
	className?: string;
}

export const AddCommentForm = memo((props: AddCommentFormProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const text = useSelector(getAddCommentFormText);
	const error = useSelector(getAddCommentFormError);

	return (
		<div className={classNames(cls.AddCommentForm, {}, [className])}>
			<Input
				placeholder={t('Введите текст комментария')}
			/>
			<Button theme={ButtonTheme.OUTLINE}>
				{t('Отправить')}
			</Button>
		</div>
	);
});
