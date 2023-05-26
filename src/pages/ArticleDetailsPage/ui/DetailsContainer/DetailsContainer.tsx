import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
	className?: string;
}

export const DetailsContainer = memo((props: DetailsContainerProps) => {
	const { t } = useTranslation();
	const { className } = props;
	const { id } = useParams<{ id: string }>();

	return (
		<Card
			className={className}
			fullHeight
			border={'round'}
			max
			padding={'24'}
		>
			<ArticleDetails id={id} />
		</Card>
	);
});
