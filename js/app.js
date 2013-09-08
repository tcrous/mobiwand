"use strict";

//Initialise the angular application and set up the routes
var mobiwand = angular.module("mobiwand", ["ngRoute"]);

mobiwand.config(function($routeProvider) {
    $routeProvider.
        when("/", {controller:HomeCtrl, templateUrl:"part/home.html"}).
        when("/form", {controller:FormCtrl, templateUrl:"part/form.html"}).
        when("/list", {controller:ListCtrl, templateUrl:"part/list.html"}).
        otherwise({redirectTo:"/"});
    //$locationProvider.html5Mode(true);
});


function HomeCtrl($scope) {
}

function FormCtrl($scope) {
}

function ListCtrl($scope) {
}