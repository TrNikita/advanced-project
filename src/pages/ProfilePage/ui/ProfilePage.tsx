import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
	fetchProfileData,
	getProfileData,
	getProfileError,
	getProfileIsLoading,
	ProfileCard,
	profileReducer
} from 'entities/Profile';

const reducers: ReducersList = {
	profile: profileReducer
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = (props: ProfilePageProps) => {
	const {
		className,
	} = props;

	const dispatch = useAppDispatch();
	const data = useSelector(getProfileData);
	const isLoading = useSelector(getProfileIsLoading);
	const error = useSelector(getProfileError);

	useEffect(()=>{
		dispatch(fetchProfileData());
	},[dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<div className={
				classNames(
					'',
					{},
					[className]
				)}
			>
				<ProfileCard
					data={data	}
					isLoading={isLoading}
					error={error}
				/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
