angular.module('EnviroShop').service('DataService', ['$http', function($http) {

    var urlBaseUtil = '/util';
    var urlBaseAssets = '/assets';

    this.getBusinessInfo = function (business) {
      return $http.get(urlBaseUtil + '/' + 'wegmans.json');
    };

    this.getBusinessReviews = function (business) {
      return $http.get(urlBaseUtil + '/' + 'wegmansreviews.json');
    };

    this.getBusinessLogo = function (business) {
        return $http.get(urlBaseAssets + '/' + 'wegmanslogo.jpg');
    };

    this.getBusinessProducts = function (business) {
      return $http.get(urlBaseUtil + '/' + 'wegmansproducts.json');
    };

    this.getUserFeed = function(business) {
        return $http.get(urlBaseUtil + '/' + 'userfeed.json');
    };

    this.getProductReviews = function (product) {
      return $http.get(urlBaseUtil + '/' + 'wegmansproductreviews.json');
    };

    this.getSearchItems = function (business) {
        return $http.get(urlBaseUtil + '/' + 'search.json');
    };
}]);