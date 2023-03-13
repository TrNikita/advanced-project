import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer
};

export const ArticleDetails = (props: ArticleDetailsProps) => {
	const { t } = useTranslation();
	const { className } = props;

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={classNames(cls.ArticleDetails, {}, [className])}>
				Article Details
			</div>
		</DynamicModuleLoader>
	);
};
