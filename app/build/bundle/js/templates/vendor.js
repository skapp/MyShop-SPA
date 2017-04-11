angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('vendors.add.html',
    "<form name=\"vendorForm\" role=\"form\" novalidate ng-submit=\"vendorForm.$valid && vm.saveVendor(vendorForm)\"><div class=\"panel panel-yellow\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-plus-square\"></i>&nbsp;Add Vendor</h3></div><vendor-form-body></vendor-form-body><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-warning\"><i class=\"fa fa-floppy-o\"></i>&nbsp; Save</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.resetVendor();\"><i class=\"fa fa-refresh\"></i>&nbsp; Reset</button></span></div></div></form>"
  );


  $templateCache.put('vendors.html',
    "<header-breadcrum header-big=\"Vendor\" header-small=\"Dashboard\" icon-class=\"fa-shopping-bag\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-yellow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-shopping-bag fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\" ng-bind=\"vm.vendorCount\"></div><div>Total Vendors</div></div></div></div><div class=\"panel-footer\"><div class=\"row yellow-color\"><a ui-sref=\"main.vendors.add\"><div class=\"col-md-6 yellow-right-border\"><span class=\"pull-left\">Add New</span> <span class=\"pull-right\"><i class=\"fa fa-user-plus\"></i></span></div></a><a ui-sref=\"main.vendors.list\"><div class=\"col-md-6\"><span class=\"pull-left\">View List</span> <span class=\"pull-right\"><i class=\"fa fa-list\"></i></span></div></a></div><div class=\"clearfix\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-12\" ui-view></div></div>"
  );


  $templateCache.put('vendor-form-body.html',
    "<div class=\"panel-body\"><div uib-alert ng-repeat=\"alert in vm.alertService.alerts\" ng-class=\"'alert-' + (alert.type || 'warning')\" close=\"vm.alertService.closeAlert($index)\" dismiss-on-timeout=\"2000\">{{alert.msg}}</div><div class=\"row\"><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':vendorForm.vendorName.$dirty && vendorForm.vendorName.$invalid}\"><label>Name</label><input type=\"text\" class=\"form-control\" name=\"vendorName\" ng-model=\"vm.vendor.name\" ng-required=\"true\" ng-pattern=\"/^[a-z A-Z]+$/\" capitalize><div ng-messages=\"vendorForm.vendorName.$dirty && vendorForm.vendorName.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div><div class=\"col-lg-6\"><div class=\"form-group\" ng-class=\"{'has-error':vendorForm.contactNo.$dirty && vendorForm.contactNo.$invalid}\"><label>Contact No.</label><input type=\"number\" class=\"form-control\" name=\"contactNo\" ng-maxlength=\"10\" ng-minlength=\"10\" ng-model=\"vm.vendor.mobileNumber\"><div ng-messages=\"vendorForm.contactNo.$dirty && vendorForm.contactNo.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div><div class=\"row\"><div class=\"col-lg-12\"><div class=\"form-group\" ng-class=\"{'has-error':vendorForm.address.$dirty && vendorForm.address.$invalid}\"><label>Address</label><textarea rows=\"3\" class=\"form-control\" name=\"address\" ng-model=\"vm.vendor.address\" capitalize></textarea><div ng-messages=\"vendorForm.address.$dirty && vendorForm.address.$error\"><div ng-messages-include=\"error-messages.html\"></div></div></div></div></div></div>"
  );


  $templateCache.put('vendors.edit.html',
    "<form name=\"vendorForm\" role=\"form\" novalidate ng-submit=\"vendorForm.$valid && vm.updateVendor()\"><div class=\"panel panel-yellow\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-pencil-square\"></i>&nbsp;Update Vendor</h3></div><vendor-form-body></vendor-form-body><div class=\"panel-footer\"><span class=\"\"><button type=\"submit\" class=\"btn btn-warning\">Update</button> <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.cancelUpdate();\">Cancel</button></span></div></div></form>"
  );


  $templateCache.put('vendors.list.html',
    "<div class=\"panel panel-yellow\"><div class=\"panel-heading\"><h3 class=\"panel-title\"><i class=\"fa fa-list\"></i>&nbsp; Vendors</h3></div><div class=\"panel-body\"><div class=\"row\"><div class=\"col-lg-12\"><div class=\"table-responsive\"><table class=\"table table-bordered table-hover table-striped\"><thead><tr><th>Name</th><th>Mobile</th><th>Address</th><th>Created On</th><th>modifiedOn</th><th></th></tr></thead><tbody><tr ng-repeat=\"vendor in vm.vendors track by vendor._id\"><td ng-bind=\"vendor.name\"></td><td ng-bind=\"vendor.mobileNumber\"></td><td ng-bind=\"vendor.address\"></td><td ng-bind=\"vendor.createdOn | date:'dd-MM-yyyy hh:mm a'\"></td><td ng-bind=\"vendor.modifiedOn | date:'dd-MM-yyyy hh:mm a'\"></td><td><button type=\"button\" class=\"btn btn-warning btn-circle\" ng-click=\"vm.editVendor(vendor._id)\"><i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i></button></td></tr></tbody></table></div></div></div></div></div>"
  );

}]);