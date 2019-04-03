import { Given, When, Then, Before } from 'cucumber';
import { $, $$, browser } from 'protractor';

const { expect } = require('chai'); //eslint-disable-line
const helper = require('../utils/helper');

Before({ tags: '@ResearchManager', timeout: 15000 }, async () => {

  });