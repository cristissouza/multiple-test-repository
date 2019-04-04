const { $, $$ }  = require('protractor');
const helper = require('../utils/helper.js');


class SearchForPokemon{
    constructor(){
      this.pokemonNumberInput = element(by.id('searchInput'));
      this.elementSearched = $$('.id');
      this.cookieButton = $('#cookie-dismisser.gus-close-button');
      this.pokemonImgButton = $$('.animating');
      this.pokemonProfile = $('.pokedex-pokemon-profile');
      this.randomBotton = $('.button-lightblue.no-arrow');
      this.loadMoreElemButton = $('#loadMore');
      this.modal = $('#pokedex-collectible-auth-error-modal');
      this.sortSelectMenu = $$('.custom-select-menu');
      this.sortNameAscCards = $$('li.animating');
      this.sortNumberCard = $$('p.id');
      this.pokemonSortOption= $('[data-option-value="numberDesc"]');
    }

     choosePokemonByNumber(number){
       this.pokemonNumberInput.click();
       this.pokemonNumberInput.sendKeys(number);
       return this.pokemonNumberInput.sendKeys(protractor.Key.ENTER);
    }

     acceptTheCookies(){
      return this.cookieButton.click();
    }

    firstListedPokemon(){
      const firstElementSearched = this.elementSearched.get(0);
      return firstElementSearched.getText();
    }

    viewPokemInformation(){
      const viewPokemonPage = this.pokemonImgButton.get(0);
      return viewPokemonPage.click();
    }

  viewListRamdomly(){
    return this.randomBotton.click();
  }

  async pokemonListLength(){
    const listTotal = await this.elementSearched.count();
    return listTotal;
  }

  async sortByHighestNumber(){
    const chooseSort = await this.sortSelectMenu.get(1);
    await chooseSort.click();
    const sortOption = await this.pokemonSortOption.click();
    return sortOption;
  }

  async verifySortByHighestNumber(){
    await helper.waitElement(this.sortNumberCard);
    const pokemonSortNumber = await this.sortNumberCard
    .map(element => element.getText());
    const namePokemon = await Promise.all(pokemonSortNumber);
    return pokemonSortNumber;
  }
   
}
module.exports = new SearchForPokemon();

