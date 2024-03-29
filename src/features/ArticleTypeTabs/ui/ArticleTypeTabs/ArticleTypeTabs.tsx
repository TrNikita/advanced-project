import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem } from '@/shared/ui/deprecated/Tabs';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface ArticleTypeTabsProps {
	className?: string;
	value: ArticleType;
	onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
	const { t } = useTranslation();
	const { className, value, onChangeType } = props;

	const typeTabs = useMemo<TabItem[]>(
		() => [
			{
				value: ArticleType.ALL,
				content: t('Все статьи'),
			},
			{
				value: ArticleType.IT,
				content: t('Айти'),
			},
			{
				value: ArticleType.ECONOMICS,
				content: t('Экономика'),
			},
			{
				value: ArticleType.SCIENCE,
				content: t('Наука'),
			},
		],
		[t],
	);

	const onTabClick = useCallback(
		(tab: TabItem) => {
			onChangeType(tab.value as ArticleType);
		},
		[onChangeType],
	);

	return (
		<Tabs
			tabs={typeTabs}
			value={value}
			onTabClick={onTabClick}
			className={classNames('', {}, [className])}
			direction={'column'}
		/>
	);
});
