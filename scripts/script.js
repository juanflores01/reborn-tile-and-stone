(function () {
    
    var app = angular.module('rebornApp', []);
    
        app.controller('RebornController', function () {
            //
        });

        // app.controller('CarouselController', function () {
        //     this.items = carousel;
        // });

        angular.module('app', ['ui.bootstrap']);
        function CarouselDemoCtrl($scope){
          $scope.myInterval = 3000;
          $scope.slides = [
            {
                image: 'images\temp-pic-kitchen-2.png'
            },
            {
                image: 'images\temp-pic-kitchen.jpg'
            },
            {
                image: 'images\temp-pic-tile-setter.jpg'
            }
          ];
        }

        //

        var carousel = [
            {
                image: 'images\temp-pic-kitchen-2.png'
            },
            {
                image: 'images\temp-pic-kitchen.jpg'
            },
            {
                image: 'images\temp-pic-tile-setter.jpg'
            }
        ]
})();