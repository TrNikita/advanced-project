import { screen } from '@testing-library/react';

import { getRouteAbout } from '@/shared/const/router';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';

import AppRouter from './AppRouter';


describe('app/router/AppRouter', function () {
	test('Страница должна отрендериться', async () => {
		componentRender(<AppRouter/>, {
			route: getRouteAbout()
		});

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});
});
