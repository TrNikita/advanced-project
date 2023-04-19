import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text/Text';
import { PAGE_ID } from '@/widgets/Page/Page';

import cls from './ArticleList.module.scss';

import { ArticleView } from '../../model/consts/articleConsts';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';


interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	virtualized?: boolean;
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
		target,
		virtualized = true
	} = props;

	const { t } = useTranslation();

	const isBig = view === ArticleView.BIG;

	const itemsPerRow = isBig ? 1 : 3;
	const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

	const rowRender = ({
		index, key, style
	}: ListRowProps) => {
		const items = [];
		const fromIndex = index * itemsPerRow;
		const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

		for (let i = fromIndex; i < toIndex; i++) {
			items.push(
				<ArticleListItem
					article={articles[index]}
					view={view}
					className={cls.card}
					target={target}
					key={`str${i}`}
				/>
			);
		}

		return (
			<div
				key={key}
				style={style}
				className={cls.row}
			>
				{items}
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
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		<WindowScroller
			scrollElement={document.getElementById(PAGE_ID) as Element}
		>
			{({
				height,
				width,
				registerChild,
				scrollTop,
				isScrolling,
				onChildScroll
			}) => (
				<div
					// eslint-disable-next-line @typescript-eslint/ban-ts-comment
					// @ts-ignore
					ref={registerChild}
					className={classNames(cls.ArticleList, {}, [className, cls[view]])}
				>
					{virtualized
						? (
							// eslint-disable-next-line @typescript-eslint/ban-ts-comment
							// @ts-ignore
							<List
								height={height ?? 700}
								rowCount={rowCount}
								rowHeight={isBig ? 700 : 330}
								rowRenderer={rowRender}
								width={width ? width - 80 : 700}
								autoHeight
								onScroll={onChildScroll}
								isScrolling={isScrolling}
								scrollTop={scrollTop}
							/>
						)
						: (
							articles.map(item => (
								<ArticleListItem
									article={item}
									view={view}
									target={target}
									key={item.id}
									className={cls.card}
								/>
							))
						)
					}
					{isLoading && getSkeletons(view)}
				</div>
			)}
		</WindowScroller>
	);
});
