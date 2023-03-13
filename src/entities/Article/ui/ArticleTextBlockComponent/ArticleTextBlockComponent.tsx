import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleTextBlockComponentProps {
	className?: string;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
			ArticleTextBlockComponent
		</div>
	);
};
