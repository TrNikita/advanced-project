import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise(resolve => {
	// @ts-ignore: в реальных проектах так делать нельзя
	setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
