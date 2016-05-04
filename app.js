	  var app = angular.module('teamWork', []);
	  
	  app.controller( 'pracControl', function($scope, $http){
	    $http.get('contributors.json').success(function(data){
		
	data.sort(function(a, b){
    return b.contributions - a.contributions;
});

	   $scope.pracownicy = data; });
	  });
	  
	  
	  app.controller( 'repoControl', function($scope, $http){
	    $http.get('repositories.json').success(function(data){
		
	data.sort(function(a, b){
    return b.forks - a.forks;
});

	   $scope.repos = data; });
	  });