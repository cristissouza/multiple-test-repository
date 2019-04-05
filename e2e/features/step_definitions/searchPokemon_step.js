const { Given, When, Then } = require('cucumber');
const  { $, $$, browser } = require('protractor');
const helper = require('../utils/helper');
const env = require('../../enviroment');
const seachPokedex = require('../page_objects/searchPoken.page');
const { expect } = require('chai');

// Begin of GIVEN statements
Given('I am on the pokedex page', function () {
    helper.openPage(`${env.baseUrl}/pokedex/`);
});


// Begin of When statements
When('I search for a pokemon using a number {string}', {timeout: 7000},  async function (string) {
  await helper.waitElement(seachPokedex.pokemonImgButton); 
  await seachPokedex.choosePokemonByNumber(string);
});


When('I decide to see the pokemon information details', {timeout: 7000}, async function () {
    await helper.waitElement(seachPokedex.sortNameAscCards);
    await helper.waitElement(seachPokedex.elementSearched);
    await seachPokedex.viewPokemInformation();
});

When('I choose to view the pokemon list randomly', {timeout: 7000}, async function () {
   await helper.waitElement(seachPokedex.pokemonImgButton);
   await seachPokedex.viewListRamdomly();
});

When('I choose to view the pokemon list by highest number', {timeout: 7000}, async function () {
   await helper.waitElement(seachPokedex.pokemonImgButton);
   await seachPokedex.sortByHighestNumber();
});

// Begin of THEN statements
Then('I see the pokemon searched as first element listed', {timeout: 5000}, function (callback) {
  helper.waitElement(seachPokedex.elementSearched);
  seachPokedex.firstListedPokemon().then((firstPokemon) => {
    expect(firstPokemon).to.equal('#003')
  }).then(callback)
});

Then('I should see the pokemon page', {timeout: 5000}, async function (callback) {
  const pokemonSpecificPage = await helper.checkURLContains('/us/pokedex/venusaur');
    expect(pokemonSpecificPage).to.equal(true);
});

Then('a set of {int} pokemon cards should show up to me', {timeout: 7000}, async function (int) {
    await helper.waitForElementNotPresent(seachPokedex.modal);
    await helper.waitElement(seachPokedex.pokemonImgButton);
    browser.sleep(2000);
   const lengthList=  await seachPokedex.pokemonListLength();
   expect(lengthList).to.equal(int);

});


Then('the pokemon list should be present from highest to lowest number', {timeout: 7000}, async function () {
  const listsort = await seachPokedex.verifySortByHighestNumber();
  const hightNumberPokemonSort =  listsort.slice().sort((a, b) => a.localeCompare(b));
  const numberSortReverse =  hightNumberPokemonSort.reverse();
  await expect(listsort).to.eql(numberSortReverse);
});