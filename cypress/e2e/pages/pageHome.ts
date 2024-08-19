import Chainable = Cypress.Chainable;
import {homePageLocators} from '../../fixtures/locators'
import {Titles, searchText} from '../../fixtures/constantss'
import { BasePage } from '../../BasePage/basePage'

class HomePage extends BasePage {
    homePageLocators = homePageLocators
    titleTexts = Titles
    SearchTexts = searchText
    
    getLogo(){
        this.checkForVisibility(this.homePageLocators.RtLogo)
    }
    getSearchBar(){
        this.checkForVisibility(this.homePageLocators.searchBar)
    }
    getNumberOfMenuItems(){
        this.checkNumberOfItems(this.homePageLocators.navbarItems, 5)
    }
    getFirstSection(){
        this.checkForVisibility(this.homePageLocators.firstSection)
        this.checkNumberOfItems(this.homePageLocators.firstSection, 8)
        this.checkText(this.homePageLocators.firstTitleLocator, 0, this.titleTexts.firstTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 1, this.titleTexts.secondTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 2, this.titleTexts.thirdTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 3, this.titleTexts.fourthTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 4, this.titleTexts.fifthTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 5, this.titleTexts.sixthTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 6,  this.titleTexts.seventhTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 7, this.titleTexts.eightTitle)
        this.checkText(this.homePageLocators.firstTitleLocator, 8, this.titleTexts.ninthTitle)
    }

    getSecondSection(){
        this.checkForVisibility(this.homePageLocators.secondSection)
        this.checkNumberOfItems(this.homePageLocators.secondSection, 1)
        this.checkText(this.homePageLocators.secondTitleLocator, 0, this.titleTexts.tenthTitle)
    }

    getThirdSection(){
        this.checkForVisibility(this.homePageLocators.thirdSection)
        this.checkNumberOfItems(this.homePageLocators.thirdSection, 1)
        this.checkText(this.homePageLocators.thirdTitleLocator, 0, this.titleTexts.eleventhTitle)
    }

    getSocialMediaLinks(){
        let links = cy.get(this.homePageLocators.socialMediaLinksContainer)
        links.shadow().find(this.homePageLocators.socialMediaLinksShadow).each(($link)=>{
            let url = $link.prop('href')
            console.log(url);
            cy.request({
                url:url,
                method: 'GET'
            }).its('status').should('eq',200)
        })
    }

    getSearchResults(){
        this.typeToELement(this.homePageLocators.searchBar, this.SearchTexts.searchText)
        this.checkForVisibility(this.homePageLocators.searchResultsContainer)
        let searchResult:string = 'Iron Man'
        let results = cy.get(this.homePageLocators.mediaSearchResult)
        results.each(($result)=>{
            let text = $result.text()
            console.log(text);
            if(text == searchResult){
                console.log('The element is in the search result');
            }
        })
    }

    typeAndClearSearchBar(){
        this.checkIfEmpty(this.homePageLocators.searchBar)
        this.typeToELement(this.homePageLocators.searchBar, this.SearchTexts.searchText)
        this.checkIfNotEmpty(this.homePageLocators.searchBar)
        this.clickOnElement(this.homePageLocators.clearIcon)
        this.checkIfEmpty(this.homePageLocators.searchBar)
    }
}

export {HomePage}