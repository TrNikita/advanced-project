import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo((props: ArticleTextBlockComponentProps) => {
	const { t } = useTranslation();
	const {
		className,
		block
	} = props;

	return (
		<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
			ArticleTextBlockComponent
		</div>
	);
});
