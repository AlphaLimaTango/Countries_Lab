const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function () {
  this.countries = null;
};


Country.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const selectedIndex = event.detail;
    this.publishCountryDetail(selectedIndex);
  });
};


Country.prototype.getData = function () {
  const requestHelper = new RequestHelper('https://restcountries.eu/rest/v2/all');

  const onComplete = (countriesData) => {
    // const countryNames = countriesData.map( (country) => {
    //   return country.name;
    // });
    this.countries = countriesData;
    PubSub.publish('Countries', countriesData)
  };

  requestHelper.get(onComplete);
};

Country.prototype.publishCountryDetail = function (selectedIndex) {
  const selectedCountry = this.data[selectedIndex];
  PubSub.publish('selected-country', selectedCountry);
};

module.exports = Country;
