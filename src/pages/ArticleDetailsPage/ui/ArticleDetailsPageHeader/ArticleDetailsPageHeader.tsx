import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getArticleDetailsData } from '@/entities/Article';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';

import { getCanEditarticle } from '../../model/selectors/article';


interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
	const { t } = useTranslation('article-details');
	const { className } = props;
	const navigate = useNavigate();
	const canEdit = useSelector(getCanEditarticle);
	const article = useSelector(getArticleDetailsData);

	const onBackToList = useCallback(() => {
		navigate(RoutePath.articles);
	}, [navigate]);

	const onEditArticle = useCallback(() => {
		navigate(`${RoutePath.articles_details}${article?.id}/edit`);
	}, [article?.id, navigate]);

	return (
		<HStack
			max
			justify={'between'}
			className={classNames('', {}, [className])}>
			<Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
				{t('Назад к списку')}
			</Button>
			{canEdit && (
				<Button
					theme={ButtonTheme.OUTLINE}
					onClick={onEditArticle}
				>
					{t('Редактировать')}
				</Button>
			)}
		</HStack>
	);
});
