export const homePageLocators = {
    'RtLogo':'[data-qa="header-logo"]',
    'searchBar':'input[data-qa="search-input"]',
    'navbarItems':'rt-header-nav[slot="nav-dropdowns"] rt-header-nav-item',
    'movieOnNavbar':'[slot="movies"] > [slot="link"]',
    'firstSection':'#media-lists > div',
    'secondSection':'#trailers-and-videos > . [slot="link"]trailers-and-videos__body',
    'thirdSection':'#movie-and-tv-guides > .movie-and-tv-guides__body ',
    'firstTitleLocator':'#media-lists h2',
    'secondTitleLocator':'#trailers-and-videos > .trailers-and-videos__header > h2',
    'thirdTitleLocator':'#movie-and-tv-guides > .movie-and-tv-guides__header > h2',
    'socialMediaLinksContainer':'#trending-bar-start social-media-icons',
    'socialMediaLinksShadow':'a',
    'searchResultsContainer':'[data-searchresultsnavmanager="searchResults"]',
    'mediaSearchResult':'search-results-item[slot="mediaResults"] rt-text:nth-child(1)',
    'clearIcon':'[data-qa="search-clear"] > rt-icon[icon="close"]',
}

export const moviePageLocators = {
    'moviesContainer':'[class="discovery-tiles__wrap"] > div',
    'loadButton':'[data-qa="dlp-load-more-button"]'
}