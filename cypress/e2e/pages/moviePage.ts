import { BasePage } from "../../BasePage/basePage"
import { homePageLocators,moviePageLocators } from "../../fixtures/locators"

class MoviePage extends BasePage{
    moviepageLocators = moviePageLocators
    homePageLocators = homePageLocators

    getNumberOfMovies(){
        this.clickOnElement(this.homePageLocators.movieOnNavbar)
        cy.get(this.moviepageLocators.moviesContainer)
        .its('length')
        .then(($length)=>{
            cy.log(`${$length}`)
        })
    }
}

export {MoviePage}