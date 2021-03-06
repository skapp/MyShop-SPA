angular.module('myShopApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('dashboard.html',
    "<header-breadcrum header-big=\"Main\" header-small=\"Dashboard\" icon-class=\"fa-dashboard\"></header-breadcrum><div class=\"row\"><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-primary\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-users fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">26</div><div>Customers</div></div></div></div><a ui-sref=\"main.customers\"><div class=\"panel-footer\"><span class=\"pull-left\">View Details</span> <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span><div class=\"clearfix\"></div></div></a></div></div><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-green\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-cubes fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">12</div><div>Products</div></div></div></div><a ui-sref=\"main.products\"><div class=\"panel-footer\"><span class=\"pull-left\">View Details</span> <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span><div class=\"clearfix\"></div></div></a></div></div><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-yellow\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-shopping-bag fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">124</div><div>Vendors</div></div></div></div><a ui-sref=\"main.vendors\"><div class=\"panel-footer\"><span class=\"pull-left\">View Details</span> <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span><div class=\"clearfix\"></div></div></a></div></div><div class=\"col-lg-3 col-md-6\"><div class=\"panel panel-red\"><div class=\"panel-heading\"><div class=\"row\"><div class=\"col-xs-3\"><i class=\"fa fa-inr fa-5x\"></i></div><div class=\"col-xs-9 text-right\"><div class=\"huge\">13</div><div>Sales!</div></div></div></div><a ui-sref=\"main.sales\"><div class=\"panel-footer\"><span class=\"pull-left\">View Details</span> <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span><div class=\"clearfix\"></div></div></a></div></div></div>"
  );


  $templateCache.put('main.html',
    "<div id=\"wrapper\"><!-- Navigation --><nav class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" ui-view=\"navigation\"></nav><div id=\"page-wrapper\"><div class=\"container-fluid\" ui-view=\"\"></div></div><!-- /#page-wrapper --></div>"
  );


  $templateCache.put('navigation.html',
    "<!-- Brand and toggle get grouped for better mobile display --><div><div class=\"navbar-header\"><button type=\"button\" class=\"navbar-toggle\" ng-init=\"vm.navCollapse=true;\" ng-click=\"vm.navCollapse=!vm.navCollapse\"><span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"/\">My Shop</a></div><!-- Top Menu Items --><!--<ul class=\"nav navbar-right top-nav\">\r" +
    "\n" +
    "        <li class=\"dropdown\">\r" +
    "\n" +
    "            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-envelope\"></i> <b class=\"caret\"></b></a>\r" +
    "\n" +
    "            <ul class=\"dropdown-menu message-dropdown\">\r" +
    "\n" +
    "                <li class=\"message-preview\">\r" +
    "\n" +
    "                    <a href=\"#\">\r" +
    "\n" +
    "                        <div class=\"media\">\r" +
    "\n" +
    "                            <span class=\"pull-left\">\r" +
    "\n" +
    "                                        <img class=\"media-object\" src=\"http://placehold.it/50x50\" alt=\"\">\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                            <div class=\"media-body\">\r" +
    "\n" +
    "                                <h5 class=\"media-heading\"><strong>John Smith</strong>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                                <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r" +
    "\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur...</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"message-preview\">\r" +
    "\n" +
    "                    <a href=\"#\">\r" +
    "\n" +
    "                        <div class=\"media\">\r" +
    "\n" +
    "                            <span class=\"pull-left\">\r" +
    "\n" +
    "                                        <img class=\"media-object\" src=\"http://placehold.it/50x50\" alt=\"\">\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                            <div class=\"media-body\">\r" +
    "\n" +
    "                                <h5 class=\"media-heading\"><strong>John Smith</strong>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                                <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r" +
    "\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur...</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"message-preview\">\r" +
    "\n" +
    "                    <a href=\"#\">\r" +
    "\n" +
    "                        <div class=\"media\">\r" +
    "\n" +
    "                            <span class=\"pull-left\">\r" +
    "\n" +
    "                                        <img class=\"media-object\" src=\"http://placehold.it/50x50\" alt=\"\">\r" +
    "\n" +
    "                                    </span>\r" +
    "\n" +
    "                            <div class=\"media-body\">\r" +
    "\n" +
    "                                <h5 class=\"media-heading\"><strong>John Smith</strong>\r" +
    "\n" +
    "                                </h5>\r" +
    "\n" +
    "                                <p class=\"small text-muted\"><i class=\"fa fa-clock-o\"></i> Yesterday at 4:32 PM</p>\r" +
    "\n" +
    "                                <p>Lorem ipsum dolor sit amet, consectetur...</p>\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"message-footer\">\r" +
    "\n" +
    "                    <a href=\"#\">Read All New Messages</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "        <li class=\"dropdown\">\r" +
    "\n" +
    "            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"><i class=\"fa fa-user\"></i> John Smith <b class=\"caret\"></b></a>\r" +
    "\n" +
    "            <ul class=\"dropdown-menu\">\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Profile</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#\"><i class=\"fa fa-fw fa-envelope\"></i> Inbox</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#\"><i class=\"fa fa-fw fa-gear\"></i> Settings</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "                <li class=\"divider\"></li>\r" +
    "\n" +
    "                <li>\r" +
    "\n" +
    "                    <a href=\"#\"><i class=\"fa fa-fw fa-power-off\"></i> Log Out</a>\r" +
    "\n" +
    "                </li>\r" +
    "\n" +
    "            </ul>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "    </ul>--><!-- Sidebar Menu Items - These collapse to the responsive navigation menu on small screens --><div class=\"navbar-collapse collapse in\" uib-collapse=\"vm.navCollapse\"><ul class=\"nav navbar-nav side-nav\"><li ng-class=\"{'active':vm.selectedSideMenu === 'dashboard'}\"><a ui-sref=\"main.dashboard\"><i class=\"fa fa-fw fa-dashboard\"></i> Dashboard</a></li><li ng-class=\"{'active':vm.selectedSideMenu === 'customers'}\"><a ui-sref=\"main.customers\"><i class=\"fa fa-fw fa-users\"></i> Customers</a></li><li ng-class=\"{'active':vm.selectedSideMenu === 'products'}\"><a ui-sref=\"main.products\"><i class=\"fa fa-fw fa-cubes\"></i> Products</a></li><li ng-class=\"{'active':vm.selectedSideMenu === 'vendor'}\"><a ui-sref=\"main.vendors\"><i class=\"fa fa-fw fa-shopping-bag\"></i> Vendors</a></li><li ng-class=\"{'active':vm.selectedSideMenu === 'sales'}\"><a ui-sref=\"main.sales\"><i class=\"fa fa-fw fa-inr\"></i> Sales</a></li><li ng-class=\"{'active':vm.selectedSideMenu === 'purchases'}\"><a ui-sref=\"main.purchases\"><i class=\"fa fa-fw fa-dashboard\"></i> Purchases</a></li></ul></div></div>"
  );

}]);
