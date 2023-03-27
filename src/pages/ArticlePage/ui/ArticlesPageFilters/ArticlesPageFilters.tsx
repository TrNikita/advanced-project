import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleSortSelector, ArticleView, ArticleViewSelector } from 'entities/Article';
import { articlePageActions } from '../../model/slices/articlePageSlice';
import { useSelector } from 'react-redux';
import {
	getArticlesPageOrder,
	getArticlesPageSort,
	getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { SortOrder } from 'shared/types';

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

	const onChangeView = useCallback((view: ArticleView) => {
		dispatch(articlePageActions.setView(view));
	}, [dispatch]);

	const onChangeSort = useCallback((newSort: ArticleSortField) => {
		dispatch(articlePageActions.setSort(newSort));
	}, [dispatch]);

	const onChangeOrder = useCallback((newOrder: SortOrder) => {
		dispatch(articlePageActions.setOrder(newOrder));
	}, [dispatch]);

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
				<Input placeholder={t('Поиск')}/>
			</Card>
		</div>
	);
});
