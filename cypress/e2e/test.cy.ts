import { HomePage } from "./pages/pageHome";

describe('template spec', () => {
  let constantData;
  before(()=>{
    cy.fixture('constants').then(($data)=>{
      constantData = $data
    })
  })
  it('passes', () => {
    const homePage = new HomePage()
    cy.once('uncaught:exception', () => false);
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false })
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
})