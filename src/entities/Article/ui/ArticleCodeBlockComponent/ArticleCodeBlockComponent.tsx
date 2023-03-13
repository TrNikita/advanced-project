import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleCodeBlockComponentProps {
	className?: string;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
			ArticleCodeBlockComponent
		</div>
	);
};
