import { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import ListIcon from '@/shared/assets/icons/burger.svg';
import TitledIcon from '@/shared/assets/icons/tile.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick?: (view: ArticleView) => void;
}

const viewTypes = [
	{
		view: ArticleView.SMALL,
		icon: TitledIcon,
	},
	{
		view: ArticleView.BIG,
		icon: ListIcon,
	},
];

export const ArticleViewSelector = memo((props: ArticleViewSelectorProps) => {
	const { className, onViewClick, view } = props;

	const onClick = (newView: ArticleView) => () => {
		onViewClick?.(newView);
	};

	return (
		<Card
			className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
				className,
			])}
			border="partial"
		>
			<HStack gap={'8'}>
				{viewTypes.map((viewType) => (
					<Icon
						Svg={viewType.icon}
						key={viewType.view}
						clickable
						onClick={onClick(viewType.view)}
						className={classNames('', {
							[cls.notSelected]: viewType.view !== view,
						})}
						width={24}
						height={24}
					/>
				))}
			</HStack>
		</Card>
	);
});
