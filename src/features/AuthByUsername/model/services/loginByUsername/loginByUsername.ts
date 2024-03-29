import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User, userActions } from '@/entities/User';

interface LoginByUsernameProps {
	username: string;
	password: string;
}

export const loginByUsername = createAsyncThunk<
	User,
	LoginByUsernameProps,
	ThunkConfig<string>
>('common/loginByUsername', async (authData, thunkApi) => {
	const { extra, dispatch, rejectWithValue } = thunkApi;

	try {
		const response = await extra.api.post<User>('/login', authData);

		if (!response.data) {
			throw new Error();
		}

		dispatch(userActions.setAuthData(response.data));

		// extra.navigate?.('/about');

		return response.data;
	} catch (e) {
		console.log('e', e);
		return rejectWithValue('Вы ввели неверный логин или пароль');
	}
});
