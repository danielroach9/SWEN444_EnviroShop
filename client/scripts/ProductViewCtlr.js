angular.module('EnviroShop')
    .controller('ProductViewCtlr', ['$scope', 'DataService', '$location', '$routeParams', function ($scope, DataService, $location, $routeParams) {

        console.log('ProductViewCtlr initialized');

        var path = $location.path();

        $scope.id = $routeParams.id;

        $scope.showSearchBar = function () {
            console.log('Would have opened the search bar');
        };

        $scope.products = [];
        $scope.productReviews = {};
        $scope.currentReviews = [];

        $scope.determineReviewArray = function (productName) {

            var ltrs = '';

            var chars = productName.split(' ');

            for(var i = 0; i < chars.length; i++) {
                ltrs = ltrs.concat(chars[i].charAt(0));
            }

            return ltrs.toLowerCase();
        };

        DataService.getProductReviews('blah')
            .then(function successCallback(response) {

                $scope.productReviews = response.data;

            }, function errorCallback(response) {

                console.log("REST call for product reviews not set up");
            });

        DataService.getBusinessProducts('stuff').then(function successCallback(response) {

            $scope.products = response.data;
            $scope.product = $scope.products[$scope.id - 1];

            $scope.currentReviews =
                $scope.productReviews[$scope.determineReviewArray($scope.product.name)];

            console.log('YO YO YO YO')
        }, function errorCallback(response) {
            console.log('REST call for info not set up');
        });

        $scope.addReview = function () {

            var nr = {};

            nr["id"] = 12;
            nr["user"] = "enviroShopUser";
            nr["content"] = $('#comentario').val();
            nr["rating"] = $('#ratings').val();

            $scope.currentReviews.push(nr);
        };

    }]);
