function country($http) {

  var URL = 'http://api-nghyf.rhcloud.com/provinces';

  this.getCountries = function () {
    return $http.get(URL);
  };
}
