import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Icon.module.scss';
import { useTranslation } from 'react-i18next';

interface IconProps {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: IconProps) => {
	const { className, Svg } = props;

	return (
		<Svg className={classNames(cls.Icon, {}, [className])}/>
	);
});
