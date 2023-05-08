import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import UserIcon from '../../assets/icons/user-32-32.svg';
import { AppImage } from '../AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
	fallbackInverted?: boolean;
}

export const Avatar = (props: AvatarProps) => {
	const { className, src, size = 100, alt, fallbackInverted } = props;

	const styles = useMemo<CSSProperties>(() => {
		return {
			width: size || 100,
			height: size || 100,
		};
	}, [size]);

	const fallback = <Skeleton width={size} height={size} border="50%" />;
	const errorFallback = (
		<Icon
			inverted={fallbackInverted}
			Svg={UserIcon}
			width={size}
			height={size}
		/>
	);

	return (
		<AppImage
			fallback={fallback}
			errorFallback={errorFallback}
			src={src}
			className={classNames(cls.Avatar, {}, [className])}
			style={styles}
			alt={alt}
		/>
	);
};
