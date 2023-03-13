import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { useTranslation } from 'react-i18next';

interface ArticleImageBlockComponentProps {
	className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
			ArticleImageBlockComponent
		</div>
	);
};
