(function () {
    'use strict';

    angular.module('myShopApp')
        .config(['$stateProvider', CustomerRoutesConfiguration]);

    function CustomerRoutesConfiguration($stateProvider) {
        $stateProvider
            .state('main.customers.add', {
                url: "/Add",
                templateUrl: "customer/add-customer.html",
                controller: "AddCustomerController",
                controllerAs: "customer",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "customer/add-customer-controller.js"
                        ]);
                    }]
                }
            })
            .state('main.customers.list', {
                url: "/List",
                templateUrl: "customer/list-customer.html",
                controller: "ListCustomerController",
                controllerAs: "customerList",
                resolve: {
                    loadJS: ["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            "common/services/data-access-service.js",
                            "customer/list-customer-controller.js"
                        ]);
                    }]
                }
            })
    }
}());

