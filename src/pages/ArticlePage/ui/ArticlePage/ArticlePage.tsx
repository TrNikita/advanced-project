import { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import cls from './ArticlePage.module.scss';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { articlesPageReducer } from '../../model/slices/articlePageSlice';
import { ArticleInfiniteList } from '../ArticleInfiniteList/ArticleInfiniteList';
import { FiltersContainer } from '../FilterContainer/FilterContainer';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

interface ArticlePageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlePage: articlesPageReducer,
};

const ArticlePage = (props: ArticlePageProps) => {
	const { className } = props;
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	const content = (
		<StickyContentLayout
			left={<ViewSelectorContainer />}
			right={<FiltersContainer />}
			content={
				<Page
					data-testid={'ArticlePage'}
					onScrollEnd={onLoadNextPart}
					className={classNames(cls.ArticlePageRedesigned, {}, [
						className,
					])}
				>
					<ArticleInfiniteList className={cls.list} />
					<ArticlePageGreeting />
				</Page>
			}
		/>
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			{content}
		</DynamicModuleLoader>
	);
};

export default memo(ArticlePage);
