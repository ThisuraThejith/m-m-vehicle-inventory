/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module("PharmacyModule", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
            .when("/stock", {
                templateUrl: "views/MainStockTable.html",
                controller: "StockController"
            })
            .when("/intake_parts", {
                templateUrl: "views/IntakeParts.html",
                controller: "IntakePartsController"
            })
            .when("/all_content", {
                templateUrl: "views/AllContent.html",
                controller: "AllContentController"
            })
            .when("/sales", {
                templateUrl: "views/Sales.html",
                controller: "SalesController"
            })
            .when("/pending_users", {
                templateUrl: "views/PendingUsers.html",
                controller: "PendingUserController"
            })
            .when("/products", {
                templateUrl: "views/AddParts.html",
                controller: "AddPartsController"
            })
            .when("/responses", {
                templateUrl: "views/Responses.html",
                controller: "ResponsesController"
            });
});
