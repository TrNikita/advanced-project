import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
	const { t } = useTranslation();
	const {
		className,
	} = props;

	return (
		<div className={
			classNames(
				'',
				{},
				[className]
			)}
		>
			{t('Profile Page')}
		</div>
	);
};

export default ProfilePage;
