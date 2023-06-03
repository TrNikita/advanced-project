import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleRating } from '@/features/articleRating';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Page } from '@/widgets/Page';
import cls from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slices';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { DetailsContainer } from '../DetailsContainer/DetailsContainer';

interface ArticleDetailsPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const { id } = useParams<{ id: string }>();

	if (!id) {
		return null;
	}

	const articleRatingCard = <ArticleRating articleId={id} />;

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<StickyContentLayout
				content={
					<Page
						className={classNames(cls.ArticleDetailsPage, {}, [
							className,
						])}
					>
						<VStack gap="16" max>
							<DetailsContainer />
							<ArticleRating articleId={id} />
							<ArticleRecommendationsList />
							<ArticleDetailsComments id={id} />
						</VStack>
					</Page>
				}
				right={<AdditionalInfoContainer />}
			/>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
