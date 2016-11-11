angular.module('EnviroShop')
// .service('DataService', function () {})
.controller('BusinessPageCtlr', ['$scope', 'DataService', '$location', function ($scope, DataService, $location) {

    console.log('BusinessPageCtlr initialized');

    $scope.info = null;
    $scope.pic = null;

    $scope.fiveReviews = [];
    $scope.reviews = [];

    $scope.fiveProducts = [];
    $scope.products = [];

    var path = $location.path();

    DataService.getBusinessInfo('bis')
        .then(function successCallback(response) {
            $scope.info = response.data;
        }, function errorCallback(response) {
            console.log('REST call for info not set up');
        });

    DataService.getBusinessReviews('bis')
        .then(function successCallback(response) {

            $scope.reviews = response.data;
            $scope.fiveReviews = $scope.reviews.slice(0,5);

        }, function errorCallback(response) {
            console.log('REST call for reviews not set up');
        });

    DataService.getBusinessLogo('bis')
        .then(function successCallback(response) {

            $scope.pic = response.data;
        }, function errorCallback(response) {
            console.log('REST call for logo not set up');
        });


    $scope.goToReviews = function () {
        $location.url('/business_reviews');
    };

    $scope.goToProducts = function () {
        $location.url('/business_products');
    };

    $scope.determineImageUrl = function (bis, productName) {

        var ltrs = '';

        var chars = productName.split(' ');

        for(var i = 0; i < chars.length; i++) {
            ltrs = ltrs.concat(chars[0].charAt(0));
        }

        return bis + '_' + ltrs.toLowerCase() + '.jpg';
    };

    if(path.includes('products')) {

        DataService.getBusinessProducts('bis')
            .then(function successCallback(response) {

                $scope.products = response.data;

                for(var i = 0; i < $scope.products; i++) {

                    $scope.products.imgLink = $scope.determineImageUrl('wegmans', $scope.products.name);
                }

                $scope.fiveProducts = $scope.products.splice(0,5);

                for(var a = 0; i < $scope.fiveProducts; i++) {
                    $('#productImg' + $scope.fiveProducts[i].id)
                        .setAttribute('src', $scope.fiveProducts[i].imgLink);
                }

            }, function errorCallback(response) {
                console.log(response);
                console.log('REST call for products not set up');
            });
    }

    else if(path.includes('reviews')) {

    }


}]);