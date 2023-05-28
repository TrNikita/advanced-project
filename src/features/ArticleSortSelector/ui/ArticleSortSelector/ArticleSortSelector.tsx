import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeatures } from '@/shared/lib/features';
import { SortOrder } from '@/shared/types/sort';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleSortSelector.module.scss';

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

	const orderOptions = useMemo<SelectOption<SortOrder>[]>(
		() => [
			{
				value: 'asc',
				content: t('возрастанию'),
			},
			{
				value: 'desc',
				content: t('убыванию'),
			},
		],
		[t],
	);

	const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
		() => [
			{
				value: ArticleSortField.CREATED,
				content: t('дате создания'),
			},
			{
				value: ArticleSortField.VIEW,
				content: t('просмотрам'),
			},
			{
				value: ArticleSortField.TITLE,
				content: t('названию'),
			},
		],
		[t],
	);

	return (
		<ToggleFeatures
			feature={'isAppRedesigned'}
			on={
				<div
					className={classNames(
						cls.ArticleSortSelectorRedesigned,
						{},
						[className],
					)}
				>
					<VStack gap={'8'}>
						<Text text={t('сортировать по')} />
						<ListBox
							items={sortFieldOptions}
							value={sort}
							onChange={onChangeSort}
						/>
						<ListBox
							items={orderOptions}
							value={order}
							onChange={onChangeOrder}
						/>
					</VStack>
				</div>
			}
			off={
				<div
					className={classNames(cls.ArticleSortSelector, {}, [
						className,
					])}
				>
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
			}
		/>
	);
});
