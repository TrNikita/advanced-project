import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import {
	useGetArticleRating,
	useRateArticle,
} from '../../api/articleRatingApi';

export interface ArticleRatingProps {
	className?: string;
	articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
	const { t } = useTranslation();
	const { className, articleId } = props;
	const userData = useSelector(getUserAuthData);

	const { data, isLoading } = useGetArticleRating({
		articleId,
		userId: userData?.id ?? '',
	});

	const [rateArticleMutation] = useRateArticle();

	const handleRateArticle = useCallback(
		(startsCount: number, feedback?: string) => {
			try {
				rateArticleMutation({
					userId: userData?.id ?? '',
					articleId,
					rate: startsCount,
					feedback,
				});
			} catch (e) {
				console.log('error', e);
			}
		},
		[articleId, rateArticleMutation, userData?.id],
	);

	const onAccept = useCallback(
		(startsCount: number, feedback?: string) => {
			handleRateArticle(startsCount, feedback);
		},
		[handleRateArticle],
	);

	const onCancel = useCallback(
		(startsCount: number) => {
			handleRateArticle(startsCount);
		},
		[handleRateArticle],
	);

	if (isLoading) {
		return <Skeleton width="100%" height={120} />;
	}

	const rating = data?.[0];

	return (
		<RatingCard
			onCancel={onCancel}
			onAccept={onAccept}
			rate={rating?.rate}
			className={className}
			title={t('Оцените статью')}
			feedbackTitle={t(
				'Оставьте свой отзыв о статье, это поможет улучшить качество',
			)}
			hasFeedback
		/>
	);
});

export default ArticleRating;
