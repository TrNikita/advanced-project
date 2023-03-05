import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData =
	createAsyncThunk<
		Profile,
		void,
		ThunkConfig<string>
		>(
			'login/loginByUsername',
			async (_, thunkApi) => {
				const { extra, rejectWithValue } = thunkApi;

				try {
					const response = await extra.api.get<Profile>('/profile');
					throw new Error();
					return response.data;
				} catch (e) {
					console.log('e', e);
					return rejectWithValue(
						'Error'
					);
				}
			}
		);
