angular.module('EnviroShop')
.controller('BusinessPageCtlr', ['$scope', 'DataService', '$location', function ($scope, DataService, $location) {

    console.log('BusinessPageCtlr initialized');

    $scope.info = null;
    $scope.pic = null;

    $scope.reviews = [];
    $scope.products = [];

    $scope.selectedReview = null;
    $scope.selectedProduct = null;

    $scope.productsPerPage = 3;
    $scope.productsBeginAt = 0;

    $scope.reviewsPerPage = 5;
    $scope.reviewsBeginAt = 0;

    var path = $location.path();

    DataService.getBusinessInfo('bis')
        .then(function successCallback(response) {

            $scope.info = response.data;

        }, function errorCallback(response) {
            console.log('REST call for info not set up');
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

    $scope.selectProduct = function (product, openModal) {
        $scope.selectedProduct = product;

        if(openModal) {
            $('#productDetailModal').modal('show');
        }
    };

    $scope.deleteProduct = function (p) {

        var index = $(p, $scope.products);
        $scope.products.splice(index,1);
    };

    $scope.selectReview = function (review) {
        $scope.selectedReview = review;
        $('#reviewReplyModal').modal('show');
    };

    $scope.previousPage = function (page) {
        console.log('previous ' + page);

        if(page == 'r') {

            $scope.reviewsBeginAt -= $scope.reviewsPerPage;

            if($scope.reviewsBeginAt == 0)
                $('#leftArrow').hide();

            $('#rightArrow').show();
        }

        else {

            $scope.productsBeginAt -= $scope.productsPerPage;

            if($scope.productsBeginAt == 0)
                $('#leftArrow').hide();

            $('#rightArrow').show();
        }
    };

    $scope.nextPage = function (page) {
        console.log('next ' + page);

        if(page == 'r') {

            $scope.reviewsBeginAt += $scope.reviewsPerPage;

            if($scope.reviewsBeginAt + ($scope.reviewsPerPage - 1) >= $scope.reviews.length)
                $('#rightArrow').hide();

            else if($scope.reviewsBeginAt + ($scope.reviewsPerPage - 1) == $scope.reviews.length - 1)
                $('#rightArrow').hide();

            $('#leftArrow').show();
        }

        else {

            $scope.productsBeginAt += $scope.productsPerPage;

            if($scope.productsBeginAt + ($scope.productsPerPage - 1) >= $scope.products.length)
                $('#rightArrow').hide();

            else if($scope.productsBeginAt + ($scope.productsPerPage - 1) == $scope.products.length - 1)
                $('#rightArrow').hide();

            $('#leftArrow').show();
        }
    };

    if(path.includes('products')) {

        DataService.getBusinessProducts('bis')
            .then(function successCallback(response) {

                $scope.products = response.data;

                if($scope.products.length == $scope.productsPerPage) {
                    $('#rightArrow').hide();
                }

            }, function errorCallback(response) {
                console.log(response);
                console.log('REST call for products not set up');
            });

    }

    else if(path.includes('reviews') || path.includes('Dashboard')) {

        DataService.getBusinessReviews('bis')
            .then(function successCallback(response) {

                $scope.reviews = response.data;

                if($scope.reviews.length == $scope.reviewsPerPage) {
                    $('#rightArrow').hide();
                }

            }, function errorCallback(response) {
                console.log(response);
                console.log('REST call for reviews not set up');
            });
    }

    $('#leftArrow').hide();
}]);