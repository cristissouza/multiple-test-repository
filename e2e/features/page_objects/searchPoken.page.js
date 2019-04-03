const { $, $$ }  = require('protractor');
const helper = require('../utils/helper.js');


class SearchForPokemon{
    constructor(){
      this.pokemonNumberInput = element(by.id('searchInput'));
      this.elementSearched =  element(by.css('a[href*="venusaur"]'));
      this.cookieButton = element(by.id('cookie-dismisser'));
    }

     choosePokemonByNumber(number){
       this.pokemonNumberInput.click();
       this.pokemonNumberInput.sendKeys(number);
       return this.pokemonNumberInput.sendKeys(protractor.Key.ENTER);
    }

    acceptTheCookies(){
     return this.cookieButton.click();
    }
}
module.exports = new SearchForPokemon();