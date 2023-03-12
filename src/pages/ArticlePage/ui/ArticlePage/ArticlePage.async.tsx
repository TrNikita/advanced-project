import { lazy } from 'react';

export const ArticlePageAsync = lazy(() => new Promise(resolve => {
	// @ts-ignore: в реальных проектах так делать нельзя
	setTimeout(() => resolve(import('./ArticlePage')), 1500);
}));
