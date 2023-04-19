import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/providers/StoreProvider/config/store';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { ReactNode } from 'react';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
	children?: ReactNode;
	initialState?: DeepPartial<StateSchema>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = (props: StoreProviderProps) => {
	const {
		children,
		initialState,
		asyncReducers
	} = props;

	const store = createReduxStore(
		initialState as StateSchema,
		asyncReducers as ReducersMapObject<StateSchema>,
	);

	console.log('RENDER');

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
