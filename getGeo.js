/**
 * Looks up an address' probable ZIP code using the 
 * Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, city, and state).
 * @return The ZIP of first matched address.
 * @customfunction
 */
 function getZip(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  var location;
  Utilities.sleep(Math.random() * 4000);
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
    zip = extractFromAddress(location["results"][0].address_components, "postal_code");
 return zip;
  }
};

/**
 * Looks up an address' probable County using the 
 * Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, city, and state).
 * @return The County of first matched address.
 * @customfunction
 */
 function getCounty(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
      county = extractFromAddress(location["results"][0].address_components, "administrative_area_level_2");
 return county;
  }
};

/**
 * Looks up an address' probable City using the Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, state, and zip).
 * @return The City of first matched address.
 * @customfunction
 */
 function getCity(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  var city;
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
      city = extractFromAddress(location["results"][0].address_components, "locality");
 return city;
  }
};

function extractFromAddress(components, type){
    for (var i=0; i<components.length; i++)
        for (var j=0; j<components[i].types.length; j++)
            if (components[i].types[j]==type) return components[i].long_name;
    return "";
}

/**
 * Looks up an address' probable Latitude using the Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, state, and zip).
 * @return The Latitude of first matched address.
 * @customfunction
 */
 function getLat(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  var latitude;
  loc = geocoder.geocode(address);

  if (loc.status == 'OK') {
    latitude = loc["results"][0]['geometry']['location']['lat'];
 return latitude;
  }
};


/**
 * Looks up an address' probable Latitude using the Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, state, and zip).
 * @return The longitude of first matched address.
 * @customfunction
 */
 function getLng(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  var longitude;
  loc = geocoder.geocode(address);
  if (loc.status == 'OK') {
    longitude = loc["results"][0]['geometry']['location']['lng'];
 return longitude;
  }
};

/**
 * How many results (for instance, zip codes, counties, cities, etc.) could match the given address
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, city, and state).
 * @return The count of resulting matches.
 * @customfunction
 */
 function getGeoCount(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  var location;
  Utilities.sleep(Math.random() * 4000);
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
    count = location["results"].length;
 return count;
  }
};

/**
 * Looks up an address' probable Country using the Google Map API.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, state, and zip).
 * @return The Country of first matched address.
 * @customfunction
 */
 function getCountry(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  var city;
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
      city = extractFromAddress(location["results"][0].address_components, "country");
 return city;
  }
};

