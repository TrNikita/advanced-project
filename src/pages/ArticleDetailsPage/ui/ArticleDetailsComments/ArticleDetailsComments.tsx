import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsComments.module.scss';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import {
	addCommentForArticle
} from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
	fetchCommentsByArticleId
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface ArticleDetailsCommentsProps {
	className?: string;
	id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
	const { t } = useTranslation();
	const { className, id } = props;
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const dispatch = useAppDispatch();

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<div className={classNames(cls.ArticleDetailsComments, {}, [className])}>
			<Text
				size={TextSize.L}
				className={cls.commentTitle}
				title={t('Комментарии')}
			/>
			<AddCommentForm onSendComment={onSendComment}/>
			<CommentList
				isLoading={commentsIsLoading}
				comments={comments}
			/>
		</div>
	);
});
