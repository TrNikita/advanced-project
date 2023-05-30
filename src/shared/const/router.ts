export enum AppRoutes {
	MAIN = 'main',
	SETTINGS = 'settings',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLES_DETAILS = 'articles_details',
	ARTICLES_CREATE = 'articles_create',
	ARTICLES_EDIT = 'articles_edit',
	ADMIN_PANEL = 'admin_panel',
	FORBIDDEN = 'forbidden',
	// last
	NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdmin = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPattern: Record<string, AppRoutes> = {
	[getRouteMain()]: AppRoutes.MAIN,
	[getRouteSettings()]: AppRoutes.SETTINGS,
	[getRouteAbout()]: AppRoutes.ABOUT,
	[getRouteProfile(':id')]: AppRoutes.PROFILE,
	[getRouteArticles()]: AppRoutes.ARTICLES,
	[getRouteArticleDetails(':id')]: AppRoutes.ARTICLES_DETAILS,
	[getRouteArticleCreate()]: AppRoutes.ARTICLES_CREATE,
	[getRouteArticleEdit(':id')]: AppRoutes.ARTICLES_EDIT,
	[getRouteAdmin()]: AppRoutes.ADMIN_PANEL,
	[getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
