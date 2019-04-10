const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
}

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('selected-country', (event) => {
    
    const countryInfo = event.detail;
    this.make(countryInfo);
  });

  const countryDataBox = document.querySelector('#country');
};


InfoView.prototype.make = function (country) {
  this.container.innerHTML = '';

  const countryName = this.crappElement('h3', country.name);

  const countryRegion = this.crappElement('h4', country.region);

  const countryFlag = this.crappElement('img', country.flag)

};

InfoView.prototype.crappElement = function (elementType, content) {
  const element = document.createElement(elementType);
  element.textContent = content;
  this.container.appendChild(element);
};


InfoView.prototype.createList = function (countries) {
  const countryDataList = document.createElement('ul');

  countries.forEach( (country) => {
    const listItem = document.createElement('li');
    listItem.textContent = country;
    countryDataList.appendChild(country);
  });

console.log("this is a data list", countryDataList);
  return countryDataList
};


module.exports = InfoView;
