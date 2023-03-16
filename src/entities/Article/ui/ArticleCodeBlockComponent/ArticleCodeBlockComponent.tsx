import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticleCodeBlockComponentProps {
	className?: string;
}

export const ArticleCodeBlockComponent = memo((props: ArticleCodeBlockComponentProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			ArticleCodeBlockComponent
		</div>
	);
});
