angular.module('mainApp').service('mainService', function($http){

this.showInfo = function(shipNum){
    return $http({
        url: 'http://swapi.co/api/starships/' + shipNum,
        method: 'GET'
    });
    
}


})