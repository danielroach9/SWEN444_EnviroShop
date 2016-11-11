angular.module('EnviroShop')
// .service('DataService', function () {})
.controller('BusinessPageCtlr', ['$scope', 'DataService', '$location', function ($scope, DataService, $location) {

    console.log('BusinessPageCtlr initialized');

    $scope.info = null;
    $scope.pic = null;

    $scope.fiveReviews = [];
    $scope.reviews = [];

    $scope.threeProducts = [];
    $scope.products = [];
    $scope.unseenProducts = [];

    $scope.lowerBound = 0;
    $scope.higherBound = 3;

    $scope.selectedReview = null;
    $scope.selectedProduct = null;


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
            ltrs = ltrs.concat(chars[i].charAt(0));
        }

        return '/assets/' + bis + '_' + ltrs.toLowerCase() + '.jpg';
    };

    $scope.selectProduct = function (product) {
        $scope.selectedProduct = product;
        $('#productDetailModal').modal('show');
    };

    $scope.deleteProduct = function (p) {

        var index = $(p, $scope.threeProducts);

        $scope.threeProducts.splice(index,1);

        if($scope.unseenProducts.length > 0) {
            $scope.threeProducts.push($scope.unseenProducts.shift());
        }
    };

    $scope.selectReview = function (review) {
        $scope.selectedReview = review;
        $('#reviewReplyModal').modal('show');
    };

    if(path.includes('products')) {

        DataService.getBusinessProducts('bis')
            .then(function successCallback(response) {

                $scope.products = response.data;
                $scope.unseenProducts = $scope.products.slice($scope.lowerBound);

                for(var i = 0; i < $scope.unseenProducts.length; i++) {
                    console.log($scope.determineImageUrl('wegmans', $scope.products[i].name));
                    $scope.unseenProducts[i].imgLink = $scope.determineImageUrl('wegmans', $scope.unseenProducts[i].name);
                }

                $scope.threeProducts = $scope.unseenProducts.splice($scope.lowerBound, $scope.higherBound);
                console.log($scope.threeProducts[2]);

            }, function errorCallback(response) {
                console.log(response);
                console.log('REST call for products not set up');
            });
    }

    else if(path.includes('reviews')) {

    }


}]);