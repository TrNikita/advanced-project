let currentArticleId = '';

describe('Пользователь заходит на станицу статьи', () => {
	beforeEach(() => {
		cy.login();
		cy.createArticle().then((article) => {
			currentArticleId = article.id;
			cy.visit(`articles/${article.id}`);
		});
	});
	afterEach(() => {
		cy.removeArticle(currentArticleId);
	});
	it.skip('и видит содержимое статьи', () => {
		cy.getByTestId('ArticleDetails.Info').should('exist');
	});

	it.skip('и видит список рекомендаций', () => {
		cy.getByTestId('ArticleRecommendationsList').should('exist');
	});

	it.skip('и оставляет комментарии', () => {
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('AddCommentForm').scrollIntoView();
		cy.addComment('text');
		cy.getByTestId('CommentCard.Content').should('have.length', 1);
	});

	it('и ставит оценку', () => {
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(5, 'text');
		cy.get('[data-selected=true]').should('have.length', 5);
	});

	it('и ставит оценку (пример со стабом на фикстурах)', () => {
		cy.intercept('GET', '**/articles/*', {
			fixture: 'article-details.json',
		});
		cy.getByTestId('ArticleDetails.Info');
		cy.getByTestId('RatingCard').scrollIntoView();
		cy.setRate(5, 'text');
		cy.get('[data-selected=true]').should('have.length', 5);
	});
});
