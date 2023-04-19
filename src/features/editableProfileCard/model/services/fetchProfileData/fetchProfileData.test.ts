import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { loginByUsername } from '@/features/AuthByUsername/model/services/loginByUsername/loginByUsername';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchProfileData } from './fetchProfileData';


const data = {
	username: 'admin',
	age: 31,
	country: Country.Russia,
	lastname: 'Asd',
	first: 'Qwe',
	currency: Currency.EUR,
};

describe('fetchProfileData.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data: data }));
		const result = await thunk.callThunk('1');

		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error login', async () => {
		const thunk = new TestAsyncThunk(loginByUsername);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe('rejected');
	});
});
