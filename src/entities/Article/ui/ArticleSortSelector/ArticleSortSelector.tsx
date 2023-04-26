import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types';
import { Select, SelectOption } from '@/shared/ui/Select';

import cls from './ArticleSortSelector.module.scss';


import { ArticleSortField } from '../../model/consts/articleConsts';


interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
	const { t } = useTranslation();
	const { className, order, sort, onChangeOrder, onChangeSort } = props;

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
		{
			value: 'asc',
			content: t('возрастанию')
		},
		{
			value: 'desc',
			content: t('убыванию')
		}
	], [t]);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
		{
			value: ArticleSortField.CREATED,
			content: t('дате создания')
		},
		{
			value: ArticleSortField.VIEW,
			content: t('просмотрам')
		},
		{
			value: ArticleSortField.TITLE,
			content: t('названию')
		},
	], [t]);

	return (
		<div className={classNames(cls.ArticleSortSelector, {}, [className])}>
			<Select<ArticleSortField>
				options={sortFieldOptions}
				label={t('сортировать по')}
				value={sort}
				onChange={onChangeSort}
			/>
			<Select
				options={orderOptions}
				label={t('по')}
				value={order}
				onChange={onChangeOrder}
				className={cls.order}
			/>
		</div>
	);
});
