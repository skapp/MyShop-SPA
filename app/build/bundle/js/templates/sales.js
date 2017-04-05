angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('bills.add.html',
    "<form name=\"billForm\" role=\"form\" novalidate ng-submit=\"billForm.$valid && vm.saveBill()\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-inr\"></i> Add Bill</h3></div><div class=\"panel-body\"><!--<pre> {{vm.billDetails | json}}</pre>--><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-8\"><div class=\"form-group\" ng-class=\"{'has-error':(billForm.customerName.$dirty || billForm.$submitted) && billForm.customerName.$invalid}\"><label>Customer Name</label><input type=\"text\" name=\"customerName\" ng-required=\"true\" ng-model=\"vm.billDetails.customer\" placeholder=\"Type Customer name\" uib-typeahead=\"customer as customer.name for customer in vm.getCustomers($viewValue)\" typeahead-loading=\"vm.loading\" typeahead-no-results=\"vm.noResults\" class=\"form-control\"> <i ng-show=\"vm.loading\" class=\"fa fa-refresh\"></i><div ng-show=\"vm.noResults\"><i class=\"fa fa-remove\"></i> No Customers Found</div><div ng-messages=\"(billForm.customerName.$dirty || billForm.$submitted)&& billForm.customerName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-4\"><div class=\"form-group\" ng-class=\"{'has-error':(billForm.billDate.$dirty || billForm.$submitted) && billForm.billDate.$invalid}\"><label>Bill Date</label><p class=\"input-group\"><input type=\"text\" name=\"billDate\" class=\"form-control\" uib-datepicker-popup=\"{{'dd-MMMM-yyyy'}}\" ng-model=\"vm.billDetails.billDate\" is-open=\"vm.isBillDateOpen\" mix-date=\"vm.today\" ng-required=\"true\" ng-readonly=\"true\" close-text=\"Close\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.isBillDateOpen = !vm.isBillDateOpen\"><i class=\"fa fa-calendar\"></i></button></span></p><div ng-messages=\"(billForm.billDate.$dirty || billForm.$submitted)&& billForm.billDate.$error\"><div ng-messages-include=\"error-messages.html\"></div></div><p></p></div></div></div><!--<div class=\"row\" ng-repeat=\"item in vm.billDetails.billItems\">\r" +
    "\n" +
    "                <div class=\"col-lg-4\">\r" +
    "\n" +
    "                    <div ng-class=\"{'has-error':(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$invalid}\">\r" +
    "\n" +
    "                                            <input type=\"text\" name=\"{{'product'+$index}}\" ng-model=\"item.product\" placeholder=\"Type product name\" uib-typeahead=\"product as product.name for product in vm.getProducts($viewValue)\"\r" +
    "\n" +
    "                                                class=\"form-control\" ng-required=\"true\">\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-2\">\r" +
    "\n" +
    "                    <div ng-class=\"{'has-error':(billForm['quantity'+$index].$dirty || billForm.$submitted)&& billForm['quantity'+$index].$invalid}\">\r" +
    "\n" +
    "                                           <input type=\"number\" name=\"{{'quantity'+$index}}\" class=\"form-control\" ng-model=\"item.quantity\" ng-change=\"item.quantity !== undefined && vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"1000\"/> \r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['quantity'+$index].$dirty || billForm.$submitted)&& billForm['quantity'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-2\">\r" +
    "\n" +
    "                    <div ng-class=\"{'has-error':(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$invalid}\">\r" +
    "\n" +
    "                                            <input type=\"number\" class=\"form-control\" name=\"{{'rate'+$index}}\" ng-model=\"item.rate\" ng-change=\"item.rate !== undefined && vm.calculate();\"\r" +
    "\n" +
    "                                                ng-required=\"true\" min=\"1\" max=\"999999\"/>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                                        <div ng-messages=\"(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$error\">\r" +
    "\n" +
    "                                            <div ng-messages-include=\"error-messages.html\"></div>\r" +
    "\n" +
    "                                        </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-2\">\r" +
    "\n" +
    "                    <i class=\"fa fa-inr\"></i>&nbsp;\r" +
    "\n" +
    "                                        <label ng-bind=\"item.total\"></label>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"col-lg-2\">\r" +
    "\n" +
    "                    <button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Add Row\" ng-click=\"vm.addNewRow()\" ng-if=\"$last\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                                        <button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Remove Row\" ng-click=\"vm.removeRow($index)\" ng-if=\"vm.billDetails.billItems.length >1\">\r" +
    "\n" +
    "                                            <i class=\"fa fa-minus\" aria-hidden=\"true\"></i>\r" +
    "\n" +
    "                                        </button>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>--><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-hover table-striped\"><thead><tr><th>Product</th><th style=\"width: 100px\">Units</th><th style=\"width: 150px\">Rate (per kg.)</th><th style=\"width: 150px\">Weight (in kgs.)</th><th style=\"width: 150px\">Total</th><th style=\"width: 80px\"></th></tr></thead><tbody><tr ng-repeat=\"item in vm.billDetails.billItems\"><td><div ng-class=\"{'has-error':(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$invalid}\"><input type=\"text\" name=\"{{'product'+$index}}\" ng-model=\"item.product\" placeholder=\"Type product name\" uib-typeahead=\"product as product.name for product in vm.getProducts($viewValue)\" class=\"form-control\" ng-required=\"true\"></div><div ng-messages=\"(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$invalid}\"><input type=\"number\" class=\"form-control\" name=\"{{'unit'+$index}}\" ng-model=\"item.units\" ng-change=\"item.units !== undefined && vm.calibrateWeights(item);vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"10\"></div><div ng-messages=\"(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$invalid}\"><input type=\"number\" class=\"form-control\" name=\"{{'rate'+$index}}\" ng-model=\"item.rate\" ng-change=\"vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"999999\"></div><div ng-messages=\"(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-repeat=\"weight in item.weights track by $index\" class=\"margin-bottom-10\"><div ng-class=\"{'has-error':(billForm['weights'+$parent.$index+''+$index].$dirty || billForm.$submitted)&& billForm['weights'+$parent.$index+''+$index].$invalid}\"><input type=\"number\" name=\"{{'weights'+$parent.$index+''+$index}}\" class=\"form-control\" ng-model=\"item.weights[$index]\" ng-change=\"vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"1000\"></div><div ng-messages=\"(billForm['weights'+$parent.$index+''+$index].$dirty || billForm.$submitted)&& billForm['weights'+$parent.$index+''+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"item.total\"></label></td><td><button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Add Row\" ng-click=\"vm.addNewRow();vm.calculate();\" ng-if=\"$last\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> <button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Remove Row\" ng-click=\"vm.removeRow($index);vm.calculate();\" ng-if=\"vm.billDetails.billItems.length >1\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button></td></tr><tr><td colspan=\"4\" class=\"text-right\"><label>Lavy</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.lavy\"></label></td><td></td></tr><tr><td colspan=\"4\" class=\"text-right\"><label>Labour Charge</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.labourCharge\"></label></td><td></td></tr><tr><td colspan=\"4\" class=\"text-right\"><label>Grant total</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.grandTotal\"></label></td><td></td></tr></tbody></table></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-danger\"><i class=\"fa fa-floppy-o\"></i>&nbsp; Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetBill();\"><i class=\"fa fa-refresh\"></i>&nbsp; Reset</button></span></div></div></form>"
  );


  $templateCache.put('bills.edit.html',
    "<form name=\"billForm\" role=\"form\" novalidate ng-submit=\"billForm.$valid && vm.updateBill()\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square\"></i> Update Bill</h3></div><div class=\"panel-body\"><!--<pre> {{vm.billDetails | json}}</pre>--><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-8\"><div class=\"form-group\" ng-class=\"{'has-error':(billForm.customerName.$dirty || billForm.$submitted) && billForm.customerName.$invalid}\"><label>Customer Name</label><input type=\"text\" name=\"customerName\" ng-required=\"true\" ng-model=\"vm.billDetails.customer\" placeholder=\"Type Customer name\" uib-typeahead=\"customer as customer.name for customer in vm.getCustomers($viewValue)\" typeahead-loading=\"vm.loading\" typeahead-no-results=\"vm.noResults\" class=\"form-control\"> <i ng-show=\"vm.loading\" class=\"fa fa-refresh\"></i><div ng-show=\"vm.noResults\"><i class=\"fa fa-remove\"></i> No Customers Found</div><div ng-messages=\"(billForm.customerName.$dirty || billForm.$submitted)&& billForm.customerName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-4\"><div class=\"form-group\" ng-class=\"{'has-error':(billForm.billDate.$dirty || billForm.$submitted) && billForm.billDate.$invalid}\"><label>Bill Date</label><p class=\"input-group\"><input type=\"text\" name=\"billDate\" class=\"form-control\" uib-datepicker-popup=\"{{'dd-MMMM-yyyy'}}\" ng-model=\"vm.billDetails.billDate\" is-open=\"vm.isBillDateOpen\" mix-date=\"vm.today\" ng-required=\"true\" ng-readonly=\"true\" close-text=\"Close\"> <span class=\"input-group-btn\"><button type=\"button\" class=\"btn btn-danger\" ng-click=\"vm.isBillDateOpen = !vm.isBillDateOpen\"><i class=\"fa fa-calendar\"></i></button></span></p><div ng-messages=\"(billForm.billDate.$dirty || billForm.$submitted)&& billForm.billDate.$error\"><div ng-messages-include=\"error-messages.html\"></div></div><p></p></div></div></div><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-hover table-striped\"><thead><tr><th>Product</th><th style=\"width: 100px\">Units</th><th style=\"width: 150px\">Rate (per kg.)</th><th style=\"width: 150px\">Weight (in kgs.)</th><th style=\"width: 150px\">Total</th><th style=\"width: 80px\"></th></tr></thead><tbody><tr ng-repeat=\"item in vm.billDetails.billItems\"><td><div ng-class=\"{'has-error':(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$invalid}\"><input type=\"text\" name=\"{{'product'+$index}}\" ng-model=\"item.product\" placeholder=\"Type product name\" uib-typeahead=\"product as product.name for product in vm.getProducts($viewValue)\" class=\"form-control\" ng-required=\"true\"></div><div ng-messages=\"(billForm['product'+$index].$dirty || billForm.$submitted)&& billForm['product'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$invalid}\"><input type=\"number\" class=\"form-control\" name=\"{{'unit'+$index}}\" ng-model=\"item.units\" ng-change=\"item.units !== undefined && vm.calibrateWeights(item);vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"10\"></div><div ng-messages=\"(billForm['unit'+$index].$dirty || billForm.$submitted)&& billForm['unit'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-class=\"{'has-error':(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$invalid}\"><input type=\"number\" class=\"form-control\" name=\"{{'rate'+$index}}\" ng-model=\"item.rate\" ng-change=\"vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"999999\"></div><div ng-messages=\"(billForm['rate'+$index].$dirty || billForm.$submitted)&& billForm['rate'+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></td><td><div ng-repeat=\"weight in item.weights track by $index\" class=\"margin-bottom-10\"><div ng-class=\"{'has-error':(billForm['weights'+$parent.$index+''+$index].$dirty || billForm.$submitted)&& billForm['weights'+$parent.$index+''+$index].$invalid}\"><input type=\"number\" name=\"{{'weights'+$parent.$index+''+$index}}\" class=\"form-control\" ng-model=\"item.weights[$index]\" ng-change=\"vm.calculate();\" ng-required=\"true\" min=\"1\" max=\"1000\"></div><div ng-messages=\"(billForm['weights'+$parent.$index+''+$index].$dirty || billForm.$submitted)&& billForm['weights'+$parent.$index+''+$index].$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"item.total\"></label></td><td><button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Add Row\" ng-click=\"vm.addNewRow();vm.calculate();\" ng-if=\"$last\"><i class=\"fa fa-plus\" aria-hidden=\"true\"></i></button> <button type=\"button\" class=\"btn btn-circle btn-danger\" uib-tooltip=\"Remove Row\" ng-click=\"vm.removeRow($index);vm.calculate();\" ng-if=\"vm.billDetails.billItems.length >1\"><i class=\"fa fa-minus\" aria-hidden=\"true\"></i></button></td></tr><tr><td colspan=\"4\" class=\"text-right\"><label>Lavy</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.lavy\"></label></td><td></td></tr><tr><td colspan=\"4\" class=\"text-right\"><label>Labour Charge</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.labourCharge\"></label></td><td></td></tr><tr><td colspan=\"4\" class=\"text-right\"><label>Grant total</label></td><td><i class=\"fa fa-inr\"></i>&nbsp;<label ng-bind=\"vm.billDetails.grandTotal\"></label></td><td></td></tr></tbody></table></div></div></div></div><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-danger\">Update</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelUpdate();\">Cancel</button></span></div></div></form>"
  );


  $templateCache.put('bills.list.html',
    "<div class=\"panel panel-red\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Bills</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Customer</th><th>Amount</th><th>Bill Date</th><th>Created On</th><th>Modified On</th><th></th></tr></thead><tbody><tr ng-repeat=\"bill in vm.bills track by bill._id\"><td ng-bind=\"bill.customer.name\"></td><td ng-bind=\"bill.grandTotal\"></td><td ng-bind=\"bill.billDate | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"bill.createdOn | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"bill.modifiedOn | date:'dd-MM-yyyy hh:mm a'\"></td><td><button type=\"button\" uib-tooltip=\"Edit\" class=\"btn btn-danger btn-circle\" ng-click=\"vm.editBill(bill._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button> <button type=\"button\" uib-tooltip=\"View\" class=\"btn btn-danger btn-circle\" ng-click=\"vm.viewBill(bill._id)\"><i class=\"fa fa-eye\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );


  $templateCache.put('bills.view.html',
    "<div class=\"panel panel-yellow\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Bills</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Mobile</th><th>Address</th><th></th></tr></thead><tbody><tr ng-repeat=\"bill in vm.bills track by bill._id\"><td ng-bind=\"bill.name\"></td><td ng-bind=\"bill.mobileNumber\"></td><td ng-bind=\"bill.address\"></td><td><button type=\"button\" class=\"btn btn-warning btn-circle\" ng-click=\"vm.editBill(bill._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );


  $templateCache.put('sales.html',
    "<header-breadcrum header-big=\"Sales\" header-small=\"Dashboard\" icon-class=\"fa-inr\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-inr fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\" ng-bind=\"vm.billCount\"></div><div>Total Bills</div></div></div></div><div class=\"panel-footer\"><div class=\"row red-color\"><a ui-sref=\"main.sales.addBill\"><div class=\"col-md-6 red-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-plus-square\"></i></span></div></a><a ui-sref=\"main.sales.listBill\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div><!--<div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-green\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-tasks fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">12</div>\r" +
    "\n" +
    "                        <div>New Tasks!</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "                <div class=\"panel-footer\">\r" +
    "\n" +
    "                    <span class=\"pull-left\">View Details</span>\r" +
    "\n" +
    "                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-yellow\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-shopping-cart fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">124</div>\r" +
    "\n" +
    "                        <div>New Orders!</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "                <div class=\"panel-footer\">\r" +
    "\n" +
    "                    <span class=\"pull-left\">View Details</span>\r" +
    "\n" +
    "                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"col-lg-3 col-md-6\">\r" +
    "\n" +
    "        <div class=\"panel panel-red\">\r" +
    "\n" +
    "            <div class=\"panel-heading\">\r" +
    "\n" +
    "                <div class=\"row\">\r" +
    "\n" +
    "                    <div class=\"col-xs-3\">\r" +
    "\n" +
    "                        <i class=\"fa fa-support fa-5x\"></i>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"col-xs-9 text-right\">\r" +
    "\n" +
    "                        <div class=\"huge\">13</div>\r" +
    "\n" +
    "                        <div>Support Tickets!</div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "            <a href=\"#\">\r" +
    "\n" +
    "                <div class=\"panel-footer\">\r" +
    "\n" +
    "                    <span class=\"pull-left\">View Details</span>\r" +
    "\n" +
    "                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r" +
    "\n" +
    "                    <div class=\"clearfix\"></div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </a>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>--></div><div class=\"row\"><div class=\"col-lg-12\" ui-view></div></div>"
  );

}]);
