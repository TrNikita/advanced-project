import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { articlePageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { SortOrder } from '@/shared/types';
import { ArticleSortField, ArticleType } from '@/entities/Article';

export const initArticlesPage =
	createAsyncThunk<void,
		URLSearchParams,
		ThunkConfig<string>>(
			'articlePage/initArticlesPage',
			async (searchParams, thunkApi) => {
				const { getState, dispatch } = thunkApi;
				const inited = getArticlesPageInited(getState());

				if (!inited) {
					const orderFormUrl = searchParams.get('order') as SortOrder;
					const sortFormUrl = searchParams.get('sort') as ArticleSortField;
					const searchFormUrl = searchParams.get('search');
					const typeFormUrl = searchParams.get('type') as ArticleType;

					if (orderFormUrl) {
						dispatch(articlePageActions.setOrder(orderFormUrl));
					}
					if (searchFormUrl) {
						dispatch(articlePageActions.setSearch(searchFormUrl));
					}
					if (sortFormUrl) {
						dispatch(articlePageActions.setSort(sortFormUrl));
					}
					if (typeFormUrl) {
						dispatch(articlePageActions.setType(typeFormUrl));
					}

					dispatch(articlePageActions.initState());
					dispatch(fetchArticlesList({ replace: true }));
				}
			}
		);
