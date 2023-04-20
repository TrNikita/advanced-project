import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import StarIcon from '@/shared/assets/icons/star.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Icon } from '@/shared/ui/Icon/Icon';

import cls from './StarRating.module.scss';


interface StarRatingProps {
	className?: string;
	onSelect?: (starsCount: number) => void;
	size?: number;
	selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
	const { t } = useTranslation();
	const { className, size = 30, selectedStars = 0, onSelect } = props;


	const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
	const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

	const onHover = (starsCount: number) => () => {
		if (!isSelected) {
			setCurrentStarsCount(starsCount);
		}
	};

	const onLeave = () => {
		if (!isSelected) {
			setCurrentStarsCount(0);
		}
	};

	const onClick = (starsCount: number) => () => {
		if (!isSelected) {
			onSelect?.(starsCount);
			setCurrentStarsCount(starsCount);
			setIsSelected(true);
		}
	};

	return (
		<div className={classNames(cls.StarRating, {}, [className])}>
			{stars.map(starsNumber => (
				<Icon
					className={classNames(
						cls.starIcon,
						{ [cls.selected]: isSelected },
						[currentStarsCount >= starsNumber ? cls.hovered : cls.normal]
					)}
					Svg={StarIcon}
					key={starsNumber}
					width={size}
					height={size}
					onMouseEnter={onHover(starsNumber)}
					onMouseLeave={onLeave}
					onClick={onClick(starsNumber)}
				/>
			))}
		</div>
	);
});
