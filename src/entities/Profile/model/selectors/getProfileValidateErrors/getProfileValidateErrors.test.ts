import { StateSchema } from 'app/providers/StoreProvider';
import { ValidateProfileErrors } from '../../types/profile';
import { getProfileValidateErrors } from './getProfileValidateErrors';

describe('getProfileValidateErrors.test', () => {
	test('should work with filled state', () => {

		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [
					ValidateProfileErrors.SERVER_ERROR,
					ValidateProfileErrors.NO_DATA
				]
			}
		};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual([
			ValidateProfileErrors.SERVER_ERROR,
			ValidateProfileErrors.NO_DATA
		]);
	});
	test('should work with empty state', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
	});
});


