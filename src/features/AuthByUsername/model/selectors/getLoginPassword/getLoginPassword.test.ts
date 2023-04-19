import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginIsLoading.test', () => {
	test('should return value', () => {
		const state: DeepPartial<StateSchema> = {
			loginForm: {
				password: '123123'
			}
		};
		expect(getLoginPassword(state as StateSchema)).toEqual('123123');
	});
	test('should return false', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getLoginPassword(state as StateSchema)).toEqual('');
	});
});

