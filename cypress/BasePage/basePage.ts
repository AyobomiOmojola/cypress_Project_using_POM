import Chainable = Cypress.Chainable;

class BasePage {
    getElement(locators:string){
        cy.get(locators)
    }
    typeToELement(locator:string, value:string){
        cy.get(locator).type(value)
    }
    clickOnElement(locator:string){
        cy.get(locator).click()
    }
    checkForVisibility(locators:string){
        cy.get(locators).should('be.visible')
    }
    checkNumberOfItems(locators:string, num:number){
        cy.get(locators).should('have.length', num)
    }
    checkText(locators:string, num:number, text:string){
        cy.get(locators).eq(num).should('have.text', text)
    }
    checkIfEmpty(locators:string){
        cy.get(locators).should('have.value','')
    }
    checkIfNotEmpty(locators:string){
        cy.get(locators).should('not.have.value','')
    }
}

export {BasePage}

