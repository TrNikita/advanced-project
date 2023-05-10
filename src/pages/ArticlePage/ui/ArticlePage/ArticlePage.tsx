import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import cls from './ArticlePage.module.scss';
import { useArticleItemById } from '../../model/selectors/articlesPageSelectors';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

interface ArticlePageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlePage: articlePageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const articleItem = useArticleItemById('3');

	console.log('articleItem', articleItem);

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<Page
				data-testid={'ArticlePage'}
				onScrollEnd={onLoadNextPart}
				className={classNames(cls.ArticlePage, {}, [className])}
			>
				<ArticlesPageFilters />
				<ArticleInfiniteList className={cls.list} />
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticlePage);
