import { HomePage } from "./pages/pageHome";
import {MoviePage} from "./pages/moviePage"

describe('suite', () => {
  let constantData;

  beforeEach(() => {
    cy.fixture('constants').then(($data)=>{
      constantData = $data
      cy.once('uncaught:exception', () => false);
      cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
      cy.visit(constantData.url)
    })
    
  })

  it('first', () => {
    const homePage = new HomePage()
    cy.visit(constantData.url)
    // check presence of logo
    homePage.getLogo()
    //check presence of searchbar
    homePage.getSearchBar()
    //check number of navbar items
    homePage.getNumberOfMenuItems()
    //check sections visibility, number and text assertion
    homePage.getFirstSection()
    homePage.getSecondSection()
    homePage.getThirdSection()
    //check social media links are live
    homePage.getSocialMediaLinks()
    //check if search result is present
    homePage.getSearchResults()
    //check clear icon is functional
    homePage.typeAndClearSearchBar()
  })

  it.only('second', ()=>{
    const moviePage = new MoviePage()
    // cy.visit(constantData.url)
    moviePage.getNumberOfMoviesAfterButtonClick()
  })
})