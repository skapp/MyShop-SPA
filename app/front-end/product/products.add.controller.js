(function () {
    'use strict';

    angular
        .module('myShopApp')
        .controller('AddProductController', AddProductController);

    AddProductController.$inject = ["dataAccessService"];

    function AddProductController(dataAccessService) {
        var vm = this;
        vm.product = {
            brand: "",
            name: "",
            vendorName: ""
        };
        vm.saveProduct = saveProduct;  

        function saveProduct() {
            dataAccessService.feed("/api/post/add/product", vm.product)
                .then(function (response) {
                    console.info(response);
                }, function (error) {
                    console.error(error);
                })
        }
    }
}());