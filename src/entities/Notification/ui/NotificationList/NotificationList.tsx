import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { VStack } from '@/shared/ui/deprecated/Stack';
import cls from './NotificationList.module.scss';
import { useNotifications } from '../../api/notificationApi';
import { NotificationItem } from '../NotificationItem/NotificationItem';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
	const { className } = props;
	const { data, isLoading } = useNotifications(null, {
		pollingInterval: 5000,
	});

	if (isLoading) {
		return (
			<VStack
				gap="16"
				max
				className={classNames(cls.NotificationList, {}, [className])}
			>
				<Skeleton width="150px" border="8px" height="80px" />
				<Skeleton width="150px" border="8px" height="80px" />
				<Skeleton width="150px" border="8px" height="80px" />
			</VStack>
		);
	}

	return (
		<VStack
			gap="16"
			max
			className={classNames(cls.NotificationList, {}, [className])}
		>
			{data?.map((item) => (
				<NotificationItem key={item.id} item={item} />
			))}
		</VStack>
	);
});
