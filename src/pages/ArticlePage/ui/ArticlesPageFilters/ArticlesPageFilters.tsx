import { memo, useCallback, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { useSelector } from 'react-redux';
import {
	getArticlesPageOrder, getArticlesPageSearch,
	getArticlesPageSort, getArticlesPageType,
	getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';

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
	const type = useSelector(getArticlesPageType);

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

	const onChangeType = useCallback((tab: TabItem) => {
		dispatch(articlePageActions.setType(tab.value as ArticleType));
		dispatch(articlePageActions.setPage(1));
		debouncedFetchData();
	}, [dispatch, debouncedFetchData]);

	const typeTabs = useMemo<TabItem[]>(() => [
		{
			value: ArticleType.ALL,
			content: t('Все статьи')
		},
		{
			value: ArticleType.IT,
			content: t('Айти')
		},
		{
			value: ArticleType.ECONOMICS,
			content: t('Экономика')
		},
		{
			value: ArticleType.SCIENCE,
			content: t('Наука')
		},
	], [t]);


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
			<Tabs
				tabs={typeTabs}
				value={type}
				onTabClick={onChangeType}
				className={cls.tabs}
			/>
		</div>
	);
});
