import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import cls from './ArticleDetails.module.scss';
import { useTranslation } from 'react-i18next';
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import {
	getArticleDetailsData, getArticleDetailsError,
	getArticleDetailsIsLoading
} from '../../../../pages/ArticleDetailsPage/ui/ArticleDetailsPage/articleDetails';

interface ArticleDetailsProps {
	className?: string;
	id: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { t } = useTranslation();
	const { className, id } = props;
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const article = useSelector(getArticleDetailsData);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		dispatch(fetchArticleById(id));
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = (
			<div>Loading...</div>
		);
	} else if (error) {
		content = (
			<div>{error}</div>
		);
	} else content = (
		<div>Article Details</div>
	);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
			<div className={classNames(cls.ArticleDetails, {}, [className])}>
				{content}
			</div>
		</DynamicModuleLoader>
	);
});
