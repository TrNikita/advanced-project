import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { useSelector } from 'react-redux';
import {
	getArticlesPageOrder, getArticlesPageSearch,
	getArticlesPageSort,
	getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from 'pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';

interface ArticlesPageFiltersProps {
	className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const dispatch = useAppDispatch();
	const view = useSelector(getArticlesPageView);
	const sort = useSelector(getArticlesPageSort);
	const order = useSelector(getArticlesPageOrder);
	const search = useSelector(getArticlesPageSearch);

	const fetchData = useCallback(() => {
		dispatch(fetchArticlesList({ replace: true }));
	}, [dispatch]);

	const debouncedFetchData = useDebounce(fetchData, 500);

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlePageActions.setView(view));
		dispatch(articlePageActions.setPage(1));
	}, [dispatch]);

	const onChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlePageActions.setSort(newSort));
		dispatch(articlePageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeOrder = useCallback((newOrder: SortOrder) => {
		dispatch(articlePageActions.setOrder(newOrder));
		dispatch(articlePageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const onChangeSearch = useCallback((search: string) => {
		dispatch(articlePageActions.setSearch(search));
		dispatch(articlePageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	return (
		<div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
			<div className={cls.sortWrapper}>
				<ArticleSortSelector
					order={order}
					sort={sort}
					onChangeOrder={onChangeOrder}
					onChangeSort={onChangeSort}
				/>
				<ArticleViewSelector
					view={view}
					onViewClick={onChangeView}
				/>
			</div>
			<Card className={cls.search}>
				<Input
					onChange={onChangeSearch}
					value={search}
					placeholder={t('Поиск')}/>
			</Card>
		</div>
	);
});
