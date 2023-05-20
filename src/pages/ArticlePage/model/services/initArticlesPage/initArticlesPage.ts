import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
	void,
	URLSearchParams,
	ThunkConfig<string>
>('articlePage/initArticlesPage', async (searchParams, thunkApi) => {
	const { getState, dispatch } = thunkApi;
	const inited = getArticlesPageInited(getState());

	if (!inited) {
		const orderFormUrl = searchParams.get('order') as SortOrder;
		const sortFormUrl = searchParams.get('sort') as ArticleSortField;
		const searchFormUrl = searchParams.get('search');
		const typeFormUrl = searchParams.get('type') as ArticleType;

		if (orderFormUrl) {
			dispatch(articlesPageActions.setOrder(orderFormUrl));
		}
		if (searchFormUrl) {
			dispatch(articlesPageActions.setSearch(searchFormUrl));
		}
		if (sortFormUrl) {
			dispatch(articlesPageActions.setSort(sortFormUrl));
		}
		if (typeFormUrl) {
			dispatch(articlesPageActions.setType(typeFormUrl));
		}

		dispatch(articlesPageActions.initState());
		dispatch(fetchArticlesList({ replace: true }));
	}
});
