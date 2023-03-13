import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleDetailsProps {
	className?: string;
}

export const ArticleDetails = (props: ArticleDetailsProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticleDetails, {}, [className])}>
			Article Details
		</div>
	);
};
