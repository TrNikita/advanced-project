import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import { memo, useCallback } from 'react';
import { ArticleList, ArticleView, ArticleViewSelector } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useSelector } from 'react-redux';
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';

interface ArticlePageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlePage: articlePageReducer
};

const ArticlePage = (props: ArticlePageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlePageActions.setView(view));
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(fetchArticlesList());
		dispatch(articlePageActions.initState());
	});

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames(cls.ArticlePage, {}, [className])}>
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
				<ArticleList
					isLoading={isLoading}
					view={view}
					articles={articles}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlePage);
