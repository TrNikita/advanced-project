import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import cls from './ArticleDetails.module.scss';
import { renderArticleBlock } from './renderArticleBlock';
import {
	getArticleDetailsData,
	getArticleDetailsError,
	getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';

interface ArticleDetailsProps {
	className?: string;
	id?: string;
}

const reducers: ReducersList = {
	articleDetails: articleDetailsReducer,
};

const Redesigned = () => {
	const article = useSelector(getArticleDetailsData);

	return (
		<>
			<Text title={article?.title} size="l" bold />
			<Text title={article?.subtitle} />
			<AppImage
				fallback={
					<SkeletonRedesigned
						width="100%"
						height={420}
						border="16px"
					/>
				}
				src={article?.img}
				className={cls.img}
			/>
			{article?.blocks.map(renderArticleBlock)}
		</>
	);
};

export const ArticleDetailsSkeleton = () => {
	const Skeleton = SkeletonRedesigned;
	return (
		<VStack gap="16" max>
			<Skeleton
				className={cls.avatar}
				width={200}
				height={200}
				border="50%"
			/>
			<Skeleton className={cls.title} width={300} height={32} />
			<Skeleton className={cls.skeleton} width={600} height={24} />
			<Skeleton className={cls.skeleton} width="100%" height={200} />
			<Skeleton className={cls.skeleton} width="100%" height={200} />
		</VStack>
	);
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
	const { className, id } = props;
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const isLoading = useSelector(getArticleDetailsIsLoading);
	const error = useSelector(getArticleDetailsError);

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') {
			dispatch(fetchArticleById(id));
		}
	}, [dispatch, id]);

	let content;

	if (isLoading) {
		content = <ArticleDetailsSkeleton />;
	} else if (error) {
		content = (
			<TextDeprecated
				align={TextAlign.CENTER}
				title={t('Произошла ошибка при загрузке статьи')}
			/>
		);
	} else {
		content = <Redesigned />;
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<VStack
				gap="16"
				max
				className={classNames(cls.ArticleDetails, {}, [className])}
			>
				{content}
			</VStack>
		</DynamicModuleLoader>
	);
});
