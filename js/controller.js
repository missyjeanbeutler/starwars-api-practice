angular.module('mainApp').controller('MainCtrl', function($scope, mainService){



$scope.showInfo = function(shipNum) {
    mainService.showInfo(shipNum).then(function(result) {
        $scope.ships = result.data;
        $scope.imageSRC = 'img/'+ shipNum + '.png';
    })
}



})