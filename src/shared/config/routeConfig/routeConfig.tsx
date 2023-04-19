import { RouteProps } from 'react-router-dom';

import { UserRole } from '@/entities/User/model/consts/consts';
import { AboutPage } from '@/pages/AboutPage';
import { AdminPanelPage } from '@/pages/AdminPandelPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { ArticlePage } from '@/pages/ArticlePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';


export type AppRouteProps = RouteProps & {
	authOnly?: boolean;
	roles?: UserRole[];
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLES_DETAILS = 'articles_details',
	ARTICLES_CREATE = 'articles_create',
	ARTICLES_EDIT = 'articles_edit',
	ADMIN_PANEL = 'admin_panel',
	FORBIDDEN = 'forbidden',
	// last
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile/', // +id
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLES_DETAILS]: '/articles/', // + :id
	[AppRoutes.ARTICLES_CREATE]: '/articles/new',
	[AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
	[AppRoutes.ADMIN_PANEL]: '/admin',
	[AppRoutes.FORBIDDEN]: '/forbidden',

	// последний
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage/>
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage/>
	},
	[AppRoutes.PROFILE]: {
		path: `${RoutePath.profile}:id`,
		element: <ProfilePage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLES]: {
		path: RoutePath.articles,
		element: <ArticlePage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLES_DETAILS]: {
		path: `${RoutePath.articles_details}:id`,
		element: <ArticleDetailsPage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLES_CREATE]: {
		path: `${RoutePath.articles_create}`,
		element: <ArticleEditPage/>,
		authOnly: true
	},
	[AppRoutes.ARTICLES_EDIT]: {
		path: `${RoutePath.articles_edit}`,
		element: <ArticleEditPage/>,
		authOnly: true
	},
	[AppRoutes.ADMIN_PANEL]: {
		path: `${RoutePath.admin_panel}`,
		element: <AdminPanelPage/>,
		authOnly: true,
		roles: [UserRole.ADMIN, UserRole.MANAGER]
	},
	[AppRoutes.FORBIDDEN]: {
		path: `${RoutePath.forbidden}`,
		element: <ForbiddenPage/>,
	},
	// last
	[AppRoutes.NOT_FOUND]: {
		path: RoutePath.not_found,
		element: <NotFoundPage/>
	},
};
