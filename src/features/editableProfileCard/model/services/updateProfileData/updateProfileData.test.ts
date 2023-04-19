import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { updateProfileData } from './updateProfileData';

import { ValidateProfileErrors } from '../../consts/consts';


const data = {
	username: 'admin',
	age: 31,
	country: Country.Russia,
	lastname: 'Asd',
	first: 'Qwe',
	currency: Currency.EUR,
	id: '1'
};

describe('updateProfileData.test', () => {
	test('success', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));

		const result = await thunk.callThunk();

		expect(thunk.api.put).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe('fulfilled');
		expect(result.payload).toEqual(data);
	});

	test('error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: data
			}
		});

		thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileErrors.SERVER_ERROR
		]);
	});

	test('validate error', async () => {
		const thunk = new TestAsyncThunk(updateProfileData, {
			profile: {
				form: { ...data, lastname: '' }
			}
		});
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		const result = await thunk.callThunk();
		expect(result.meta.requestStatus).toBe('rejected');
		expect(result.payload).toEqual([
			ValidateProfileErrors.INCORRECT_USER_DATA
		]);
	});
});
