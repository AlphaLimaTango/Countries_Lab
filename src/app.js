const Country = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectedCountry = document.querySelector('select#countries');
  const selectView = new SelectView(selectedCountry)
  selectView.bindEvents();


  const infoView = document.querySelector('#country');
  const countryView = new InfoView(infoView)
  countryView.bindEvents();



  const country = new Country();
  country.getData();
  country.bindEvents();

  //
  // const countryDetail = new Country();
  // country.publishCountryDetail();
});
