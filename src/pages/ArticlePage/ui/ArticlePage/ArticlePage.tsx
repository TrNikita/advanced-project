import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ArticlePageProps {
	className?: string;
}

const ArticlePage = (props: ArticlePageProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticlePage, {}, [className])}>
			ARTICLES PAGE
		</div>
	);
};

export default memo(ArticlePage);
