import './style.css';
import javascriptLogo from './javascript.svg';
import { setupCounter } from './counter.js';

let javaScriptLogoImg = document.querySelector('.vanilla');
javaScriptLogoImg.src = javascriptLogo;

setupCounter(document.querySelector('#counter'));
