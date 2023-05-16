import { memo, ReactNode } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export type AppLinkVariant = 'primary' | 'red';

interface AppLinkProps extends LinkProps {
	className?: string;
	variant?: AppLinkVariant;
	children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
	const {
		to,
		className,
		children,
		variant = 'primary',
		...OtherProps
	} = props;

	return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[variant]])}
			{...OtherProps}
		>
			{children}
		</Link>
	);
});
