import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleListItemProps {
	className?: string;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticleListItem, {}, [className])}>

		</div>
	);
});
