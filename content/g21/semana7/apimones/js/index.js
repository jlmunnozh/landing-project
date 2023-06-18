'use strict';

import cards from './modules/cards.js';
import header from './modules/header.js';
import loader from './modules/loader.js';

const documentReady = () => {
  loader();
  header();
  cards();
};

document.addEventListener('DOMContentLoaded', documentReady);