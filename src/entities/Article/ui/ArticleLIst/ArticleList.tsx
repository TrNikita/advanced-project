import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import { useTranslation } from 'react-i18next';
import { Article, ArticleView } from '../../model/types/article';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading: boolean;
	view?: ArticleView;
}

export const ArticleList = memo((props: ArticleListProps) => {
	const { t } = useTranslation();
	const {
		className,
		isLoading,
		view = ArticleView.SMALL,
		articles
	} = props;

	return (
		<div className={classNames(cls.ArticleList, {}, [className])}>

		</div>
	);
});
