


import './style.css';
import $ from 'jquery';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

$('.vanilla').attr('src', javascriptLogo);

setupCounter($('#counter'));
