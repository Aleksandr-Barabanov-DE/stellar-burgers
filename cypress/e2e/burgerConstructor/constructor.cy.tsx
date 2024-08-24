// Определяем базовый URL как константу
const testUrl = '/'; // Используем путь относительный к baseUrl, который задан в конфигурации Cypress

describe('Тест добавления ингредиентов в конструктор', () => {
    beforeEach(() => {
        cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
        cy.viewport(1300, 800);
        cy.visit(testUrl);
    });

    it('Добавить bun', () => {
        // Проверяем, что ингредиент не добавлен в конструктор
        cy.get('[data-cy=constructor-bun-1]').should('not.exist');
        cy.get('[data-cy=constructor-bun-2]').should('not.exist');

        // Добавляем ингредиент
        cy.get('[data-cy=bun-ingredients]').contains('Добавить').click();

        // Проверяем, что ингредиент появился в конструкторе
        cy.get('[data-cy=constructor-bun-1]')
            .contains('Ингредиент 1')
            .should('exist');
        cy.get('[data-cy=constructor-bun-2]')
            .contains('Ингредиент 1')
            .should('exist');
    });

    it('Добавить main/sauce', () => {
        // Проверяем, что ингредиенты не добавлены в конструктор
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 2')
            .should('not.exist');
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 4')
            .should('not.exist');

        // Добавляем ингредиенты
        cy.get('[data-cy=mains-ingredients]').contains('Добавить').click();
        cy.get('[data-cy=sauces-ingredients]').contains('Добавить').click();

        // Проверяем, что ингредиенты появились в конструкторе
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 2')
            .should('exist');
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 4')
            .should('exist');
    });
});

describe('Тест работы модального окна', () => {
    beforeEach(() => {
        cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
        cy.viewport(1300, 800);
        cy.visit(testUrl);
    });

    it('открыть модалку', () => {
        cy.contains('Ингредиент 1').click();
        cy.contains('Детали ингредиента').should('exist');
        cy.get('#modals')
            .contains('Ингредиент 1')
            .should('exist');
    });

    it('Закрыть модалку по клику на крестик', () => {
        // Открываем модальное окно
        cy.contains('Ингредиент 1').click();
        cy.contains('Детали ингредиента').should('exist');

        // Закрываем модальное окно
        cy.get('[data-cy=close-modal-button]').click();

        // Проверяем, что модальное окно закрыто
        cy.get('#modals').should('not.exist');
    });
});

describe('Тест создания заказа', () => {
    beforeEach(() => {
        cy.intercept('GET', 'api/ingredients', { fixture: 'ingredients.json' });
        cy.intercept('GET', 'api/auth/user', { fixture: 'user.json' });
        cy.intercept('POST', 'api/orders', { fixture: 'post_order.json' }).as('postOrder');

        window.localStorage.setItem('refreshToken', JSON.stringify('testRefreshToken'));
        cy.setCookie('accessToken', 'testAccessToken');
        cy.viewport(1300, 800);
        cy.visit(testUrl);
    });

    afterEach(() => {
        cy.clearLocalStorage();
        cy.clearCookies();
    });

    it('Добавить ингредиенты и создать заказ', () => {
        // Проверяем, что ингредиенты не добавлены в конструктор
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 1')
            .should('not.exist');
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 2')
            .should('not.exist');
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 4')
            .should('not.exist');

        // Добавляем ингредиенты
        cy.get('[data-cy=bun-ingredients]').contains('Добавить').click();
        cy.get('[data-cy=mains-ingredients]').contains('Добавить').click();
        cy.get('[data-cy=sauces-ingredients]').contains('Добавить').click();

        // Создаем заказ
        cy.get('[data-cy=order-button]').click();

        // Проверяем тело запроса
        cy.wait('@postOrder')
            .its('request.body')
            .should('deep.equal', {
                ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa0941", "643d69a5c3f7b9001cfa0942", "643d69a5c3f7b9001cfa093c"]
            });

        // Проверяем номер заказа
        cy.get('[data-cy=order-number]')
            .contains('123')
            .should('exist');
        cy.get('[data-cy=close-modal-button]').click();
        cy.get('[data-cy=order-number]').should('not.exist');

        // Проверяем, что ингредиенты удалены из конструктора
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 1')
            .should('not.exist');
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 2')
            .should('not.exist');
        cy.get('[data-cy=constructor-ingredients]')
            .contains('Ингредиент 4')
            .should('not.exist');
    });
});