var app = angular.module("Demo", ["ngRoute", "restangular"])
    .config(function ($routeProvider, $locationProvider, RestangularProvider, $sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
          // Allow same origin resource loads.
          'self',
          // Allow loading from our assets domain.  Notice the difference between * and **.
          'http://ops.epo.org/**'
        ]);

        RestangularProvider.setBaseUrl('https://ops.epo.org/3.1/rest-services/published-data/publication/');

        // set default header "token"
        RestangularProvider.setDefaultHeaders({
            Accept: "application/json"
        });
        //        RestangularProvider.setDefaultRequestParams('jsonp', {
        //            callback: 'JSON_CALLBACK'
        //        });
        //
        //
        //        RestangularProvider.setRequestSuffix('.json');

        $routeProvider.
        when("/", {
            templateUrl: "Views/page1.html",
            controller: "page1Controller"
        }).
        when("/page1", {
            templateUrl: "Views/page1.html",
            controller: "page1Controller"
        }).
        when("/page2", {
            templateUrl: "Views/page2.html",
            controller: "page2Controller"
        }).
        when("/ApiData", {
            templateUrl: "Views/ApiData.html",
            controller: "ApiDataController"
        }).
        when("/Template", {
            templateUrl: "Views/Template.html",
            controller: "myController"
        }).
        when("/learner/:id", {
            templateUrl: "Views/Learnerdetails.html",
            controller: "DetailsController"
        }).
        otherwise({
            redirectTo: "/"
        });
    });
