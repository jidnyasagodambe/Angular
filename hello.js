<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="utf 8">
     
</head>  
<body ng-app="app">
<h1 ng-controller="HelloWorldCtrl">{{message}}</h1>
<script src="https://code.angularjs.org/1.6.9/angular.js"></script>
<script>  
    angular.module("app", []).controller("HelloWorldCtrl", function($scope) {  
    $scope.message="Hello World" 
    } )
</script> 

</body>  
</html>
