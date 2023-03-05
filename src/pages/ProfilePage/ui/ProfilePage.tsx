import { classNames } from 'shared/lib/classNames/classNames';
import {
	DynamicModuleLoader,
	ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile/model/slice/profileSlice';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { fetchProfileData, ProfileCard } from 'entities/Profile';

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
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
