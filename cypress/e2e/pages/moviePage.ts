import { BasePage } from "../../BasePage/basePage"
import { homePageLocators,moviePageLocators } from "../../fixtures/locators"

class MoviePage extends BasePage{
    moviepageLocators = moviePageLocators
    homePageLocators = homePageLocators

    getNumberOfMoviesAfterButtonClick(){
        this.clickOnElement(this.homePageLocators.movieOnNavbar)
        cy.get(this.moviepageLocators.moviesContainer).as('totalMovies')
        .its('length')
        .then(($length1)=>{
            cy.log(`${$length1}`)
            this.clickOnElement(this.moviepageLocators.loadButton)
            cy.wait(5000)
            cy.get('@totalMovies').its('length').then(($length2)=>{
                cy.log(`${$length2}`)
                expect($length1).to.not.eq($length2)
                $length2 > $length1 ? cy.log('more movies were loaded correctly') : cy.log('no movies were loaded')
            })
        })
    }
}

export {MoviePage}