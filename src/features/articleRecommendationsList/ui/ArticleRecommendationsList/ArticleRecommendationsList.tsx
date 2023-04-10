import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { ArticleList } from 'entities/Article';
import { VStack } from 'shared/ui/Stack';
import { rtkApi } from 'shared/api/rtkApi';

interface ArticleRecommendationsListProps {
	className?: string;
}

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		getArticleRecommendationsList: build.query({
			query: (limit) => ({
				url: '/articles',
				params: {
					_limit: limit
				}
			}),
		}),
	}),
});

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
	const { className } = props;
	const { t } = useTranslation();
	const { isLoading, data: articles, error } = useArticleRecommendationsList(3);
	console.log('data', articles);

	if (isLoading || error) {
		return null;
	}

	return (
		<VStack gap={'8'} className={classNames('', {}, [className])}>
			<Text
				size={TextSize.L}
				title={t('Рекомендуем')}
			/>
			<ArticleList
				articles={articles}
				target={'_blank'}
			/>
		</VStack>
	);
});
