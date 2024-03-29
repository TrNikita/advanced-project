import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginIsLoading.test', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				username: '123123',
			},
		};
		expect(getLoginUsername(state as StateSchema)).toEqual('123123');
	});
	test('should return false', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
