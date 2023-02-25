import { Story } from '@storybook/react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterDecorator = (story: () => Story) => {
	return (
		<Suspense fallback=''>
			<BrowserRouter>
				{story()}
			</BrowserRouter>
		</Suspense>
	);
};

