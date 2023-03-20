import { lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise(resolve => {
	// @ts-ignore: в реальных проектах так делать нельзя
	setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
