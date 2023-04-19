import { AnyAction, CombinedState, Dispatch, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailsSchema } from '@/entities/Article';
import { CounterSchema } from '@/entities/Counter';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/editableProfileCard';
import { UISchema } from '@/features/UI';
import { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { ArticlePageSchema } from '@/pages/ArticlePage';
import { rtkApi } from '@/shared/api/rtkApi';


export interface StateSchema {
	counter: CounterSchema;
	user: UserSchema;
	ui: UISchema;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	//Асинхронные редюсеры
	loginForm?: LoginSchema;
	profile?: ProfileSchema;
	articleDetails?: ArticleDetailsSchema;
	// articleDetailsComments?: ArticleDetailsCommentsSchema;
	// articleDetailsRecommendations?: ArticleDetailsRecommendationsSchema;
	addCommentForm?: AddCommentFormSchema;
	articlePage?: ArticlePageSchema;
	articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>

export interface ReducerManager {
	getReducerMap: () => ReducersMapObject<StateSchema>;
	reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
	add: (key: StateSchemaKey, reducer: Reducer) => void;
	remove: (key: StateSchemaKey) => void;
	// true - вмонтирован, false - демонтирован
	getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
	reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
	api: AxiosInstance;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	dispatch?: Dispatch;
	state: StateSchema;
}
