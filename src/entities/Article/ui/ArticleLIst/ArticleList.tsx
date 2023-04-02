import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
	(new Array(view === ArticleView.SMALL ? 9 : 3)
		.fill(0)
		.map((item, index) => (
			<ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
		)));

export const ArticleList = memo((props: ArticleListProps) => {
	const {
		className,
		isLoading,
		view = ArticleView.SMALL,
		articles,
		target
	} = props;

	const { t } = useTranslation();

	const rowRender = ({ index, isScrolling, key, style }: ListRowProps) => {
		return (
			<div
				key={key}
				style={style}>
				<ArticleListItem
					article={articles[index]}
					view={view}
					className={cls.card}
					target={target}
				/>
			</div>
		);
	};

	if (!isLoading && !articles.length) {
		return (
			<div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
				<Text size={TextSize.L} title={t('Статьи не найдены')}/>
			</div>
		);
	}

	return (
		<WindowScroller
			scrollElement={document.getElementById(PAGE_ID) as Element}
		>
			{({ height, width }) => (
				<List
					height={height}
					rowCount={articles.length}
					rowHeight={500}
					rowRenderer={rowRender}
					width={width}
				/>
			)}
		</WindowScroller>

	// <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
	// 	{articles.length > 0
	// 		? articles.map(renderArticle)
	// 		: null}
	// 	{isLoading && getSkeletons(view)}
	// </div>
	);
});

