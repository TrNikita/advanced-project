import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Card } from '@/shared/ui/deprecated/Card';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import { Input } from '@/shared/ui/deprecated/Input';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { Text } from '@/shared/ui/deprecated/Text';

interface RatingCardProps {
	className?: string;
	title?: string;
	feedbackTitle?: string;
	hasFeedback?: boolean;
	onCancel?: (starsCount: number) => void;
	onAccept?: (starsCount: number, feedback?: string) => void;
	rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
	const {
		className,
		onCancel,
		onAccept,
		title,
		hasFeedback,
		feedbackTitle,
		rate = 0,
	} = props;

	const { t } = useTranslation();

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [starsCount, setStarsCount] = useState(rate);
	const [feedback, setFeedback] = useState('');

	const onSelectStars = useCallback(
		(selectedStarsCount: number) => {
			setStarsCount(selectedStarsCount);
			if (hasFeedback) {
				setIsModalOpen(true);
			} else {
				onAccept?.(selectedStarsCount);
			}
		},
		[hasFeedback, onAccept],
	);

	const acceptHandle = useCallback(() => {
		setIsModalOpen(false);
		onAccept?.(starsCount, feedback);
	}, [feedback, onAccept, starsCount]);

	const cancelHandle = useCallback(() => {
		setIsModalOpen(false);
		onCancel?.(starsCount);
	}, [onCancel, starsCount]);

	const modalContent = (
		<>
			<Text title={feedbackTitle} />
			<Input
				data-testid={'RatingCard.Input'}
				value={feedback}
				onChange={setFeedback}
				placeholder={t('Ваш отзыв')}
			/>
		</>
	);

	return (
		<Card className={className} max data-testid={'RatingCard'}>
			<VStack align={'center'} gap={'8'} max>
				<Text title={starsCount ? t('Спасибо за оценку!') : title} />
				<StarRating
					selectedStars={starsCount}
					size={40}
					onSelect={onSelectStars}
				/>
			</VStack>
			<BrowserView>
				<Modal isOpen={isModalOpen} onClose={cancelHandle} lazy>
					{modalContent}
					<VStack gap={'32'} max>
						<HStack max gap={'16'} justify={'end'}>
							<Button
								data-testid="RatingCard.Close"
								onClick={cancelHandle}
								theme={ButtonTheme.OUTLINE_RED}
							>
								{t('Закрыть')}
							</Button>
							<Button
								data-testid="RatingCard.Send"
								onClick={acceptHandle}
								theme={ButtonTheme.OUTLINE}
							>
								{t('Отправить')}
							</Button>
						</HStack>
					</VStack>
				</Modal>
			</BrowserView>
			<MobileView>
				<Drawer isOpen={isModalOpen} onClose={cancelHandle} lazy>
					<VStack gap={'32'}>
						{modalContent}
						<Button
							onClick={cancelHandle}
							size={ButtonSize.L}
							fullWidth
						>
							{t('Отправить')}
						</Button>
					</VStack>
				</Drawer>
			</MobileView>
		</Card>
	);
});
