describe('Пользователь заходит на страницу профиля', () => {
	beforeEach(()=>{
		cy.visit('');
		cy.login().then(data=> {
			cy.visit(`profile/${data.id}`);
		});
	});

	it('И профиль успешно загружается', () => {
		cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
	});

	it('И редактирует его', () => {

	});

	it('И редактирует его', () => {

	});

	it('И редактирует его', () => {

	});
});
