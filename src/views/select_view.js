const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries', (event) => {
    const allCountryNames = event.detail;
    // console.log("these are events", event);
    this.populate(allCountryNames);
  });

  this.element.addEventListener('change', (event) => {
    const selectedCountry = event.target.value;
    PubSub.publish('SelectView:change', selectedCountry);
  });
};


SelectView.prototype.populate = function (countryData) {
  countryData.forEach( (country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  } );
};


module.exports = SelectView;
