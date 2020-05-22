import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Peliculas from './Components/Peliculas'
import {IntlProvider} from 'react-intl';
import localeEnMessages from './Lenguages/en.json'
import localeEsMessages from './Lenguages/es.json'

ReactDOM.render(
  <IntlProvider locale={language()} messages= {messages()}>
    <Peliculas />
  </IntlProvider>,
  document.getElementById('root'),
  serviceWorker.register(),
);

function language() {
  if((navigator.language || navigator.userLanguage).includes("es")){
      return "es";
  } else if((navigator.language || navigator.userLanguage).includes("en")){
      return "en";
  }
  
};

function messages() {
  if(language()=="es"){
      return localeEsMessages;
  } else if(language()=="en"){
      return localeEnMessages;
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
