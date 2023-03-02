import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise(resolve => {
	// @ts-ignore: в реальных проектах так делать нельзя
	setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
