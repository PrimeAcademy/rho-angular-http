var app = angular.module('httpApp', []);

app.controller('MainController', MainController);

// by using $http as a parameter
// indicated that this controller depends on the
// $http service. Angular will then inject this
// service for us to use
function MainController($http) {
  console.log('MainController loaded!');

  var main = this;

  main.monsters = [];


  // makes a request to /spooky and puts the response in
  // the message property on the controller
  $http({
    url: '/spooky',
    method: 'GET'
  }).then(function(response){
    console.log(response);

    main.message = response.data;

  }, function(error){
    console.log('Error making http request:', error);
  });

  // makes a request to /monsters and puts the response in
  // the monsters property on the controller. This lets us ng-repeat
  // over that list and display the results on the page
  $http({
    url: '/monsters',
    method: 'GET'
  }).then(function(response){
    main.monsters = response.data;
  }, function(error){
    console.log('Error making http request', error);
  });

}
