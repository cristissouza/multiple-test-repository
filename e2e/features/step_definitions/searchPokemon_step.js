const { Given, When, Then } = require('cucumber');
const  { $, $$, browser } = require('protractor');
const helper = require('../utils/helper');
const env = require('../../enviroment');
const seachPokedex = require('../page_objects/searchPoken.page');
const { expect } = require('chai');

// // Begin of GIVEN statements
Given('I am on the pokedex page', function () {
    helper.openPage(`${env.baseUrl}/pokedex/`);
  });


When('I search for a pokemon using a number {string}', {timeout: 10000},  function (callback, string) {
     helper.waitForElement(seachPokedex.cookieButton);
     helper.waitForElement(seachPokedex.pokemonNumberInput);
     seachPokedex.acceptTheCookies();
     helper.waitForElementNotPresent(seachPokedex.cookieButton);
     seachPokedex.choosePokemonByNumber(string)
     .then(callback);
  });


Then('I see the pokemon searched',{timeout: 3000}, function (callback) {
     helper.waitForElement(seachPokedex.elementSearched);
    const pokemonView =  seachPokedex.elementSearched.isDisplayed();
    console.log(pokemonView);
    expect(pokemonView).to.equal(true);
  });