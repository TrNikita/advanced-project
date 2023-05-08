import { Article } from '../../../src/entities/Article';

const defaultArticle = {
	title: 'TESTING ARTICLE',
	subtitle: 'Что нового в JS за 2022 год?',
	img: 'https://e3.365dm.com/22/06/2048x1152/skynews-florida-python_5812490.jpg',
	views: 5204,
	createdAt: '26.02.2022',
	userId: '1',
	type: ['IT'],
	blocks: [],
};

export const createArticle = (article?: Article) => {
	cy.request({
		method: 'POST',
		url: 'http://localhost:8000/articles',
		headers: { Authorization: 'asdsad' },
		body: article ?? defaultArticle,
	}).then((response) => response.body);
};

export const removeArticle = (articleId: string) => {
	cy.request({
		method: 'DELETE',
		url: `http://localhost:8000/articles/${articleId}`,
		headers: { Authorization: 'asdsad' },
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			createArticle(article?: Article): Chainable<Article>;
			removeArticle(articleId: string): Chainable<void>;
		}
	}
}
