import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ArticleDetails, ArticleList, ArticleView } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import {
	articleDetailsPageRecommendationsReducer,
	getArticleRecommendations
} from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import {
	fetchArticleRecommendations
} from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsComments: articleDetailsCommentsReducer,
	articleDetailsRecommendations: articleDetailsPageRecommendationsReducer
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { t } = useTranslation('article-details');
	const { className } = props;
	const { id } = useParams<{ id: string }>();
	const dispatch = useAppDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
	const recommendations = useSelector(getArticleRecommendations.selectAll);
	const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

	const navigate = useNavigate();

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]
	);
	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
		dispatch(fetchArticleRecommendations());
	});

	if (!id) {
		return (
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				{t('Статья не найдена')}
			</Page>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
				<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
					{t('Назад к списку')}
				</Button>
				<ArticleDetails id={id} />
				<Text
					size={TextSize.L}
					className={cls.commentTitle}
					title={t('Рекомендуем')}
				/>
				<ArticleList
					articles={recommendations}
					isLoading={recommendationsIsLoading}
					className={cls.recommendations}
				/>
				<Text
					size={TextSize.L}
					className={cls.commentTitle}
					title={t('Комментарии')}
				/>
				<AddCommentForm onSendComment={onSendComment} />
				<CommentList
					isLoading={commentsIsLoading}
					comments={comments}
				/>
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
