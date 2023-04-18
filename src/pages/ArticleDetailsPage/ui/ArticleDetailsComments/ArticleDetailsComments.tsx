import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, Suspense, useCallback } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { AddCommentForm } from 'features/addCommentForm';
import { CommentList } from 'entities/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack';
import {
	fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Loader } from 'shared/ui/Loader/Loader';

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
	const { className, id } = props;
	console.log('id', id);
	const { t } = useTranslation();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const dispatch = useDispatch();

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<VStack gap='16' max className={classNames('', {}, [className])}>
			<Text
				size={TextSize.L}
				title={t('Комментарии')}
			/>
			<Suspense fallback={<Loader/>}>
				<AddCommentForm onSendComment={onSendComment}/>
			</Suspense>
			<CommentList
				isLoading={commentsIsLoading}
				comments={comments}
			/>
		</VStack>
	);
});