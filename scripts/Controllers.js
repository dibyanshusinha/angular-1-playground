app.controller("page1Controller", function ($scope) {
        $scope.title = "Page 1 title";
    })
    .controller("page2Controller", function ($scope) {
        $scope.title = "Page 2 title ";
    })
    .controller("myController", function ($scope) {
        $scope.message = "Hello World";
        var learner = [{
            id: 1,
            name: "Dibyanshu",
            gender: "Male"
        }, {
            id: 2,
            name: "Manisha",
            gender: "Female"
        }, {
            id: 3,
            name: "Anuradha",
            gender: "Female"
        }, {
            id: 4,
            name: "Sunny",
            gender: "Male"
        }, {
            id: 5,
            name: "Shanu",
            gender: "Male"
        }, {
            id: 6,
            name: "Gautam",
            gender: "Male"
        }, {
            id: 7,
            name: "Shefali",
            gender: "Female"
        }, {
            id: 8,
            name: "Deepti",
            gender: "Female"
        }];
        $scope.showDetails = false;
        $scope.learner = learner;
        $scope.mani = function (item) {
            $scope.showDetails = true;
            $scope.student = item;
        };

    })
    .controller("DetailsController", function ($scope, $routeParams) {
        var learner = [{
            id: 1,
            name: "Dibyanshu",
            gender: "Male"
        }, {
            id: 2,
            name: "Manisha",
            gender: "Female"
        }, {
            id: 3,
            name: "Anuradha",
            gender: "Female"
        }, {
            id: 4,
            name: "Sunny",
            gender: "Male"
        }, {
            id: 5,
            name: "Shanu",
            gender: "Male"
        }, {
            id: 6,
            name: "Gautam",
            gender: "Male"
        }, {
            id: 7,
            name: "Shefali",
            gender: "Female"
        }, {
            id: 8,
            name: "Deepti",
            gender: "Female"
        }];

        var l_id = $routeParams.id - 1;


        $scope.details = {
            id: learner[l_id].id,
            name: learner[l_id].name,
            gender: learner[l_id].gender
        }

    })
    .controller("ApiDataController", function ($scope, Restangular, epoApi) {

        //        $scope.responseData = Restangular.one("epodoc", 'EP1000000.A1').customGET("biblio").then(function () {
        //            console.log("Object recieved");
        //        }, function (error) {
        //            console.log("There was an error saving");
        //        });
        epoApi.getData().then(function (response) {
            console.log(response.data);
            $scope.responseData = response.data;
        })
    })
    .service('epoApi', function ($http) {
        this.getData = function () {
            var authorized = false;
            var myCookieArray = {};
            if (!authorized) {
                return $http({
                    url: "http://slowwly.robertomurray.co.uk/delay/10000/url/https://jsonplaceholder.typicode.com/posts/1",
                    method: "GET"
                });
            } else {
                return $http({
                    url: data_url + endpoint,
                    method: "GET",
                    headers: {
                        'Authorization': 'Bearer ' + myCookieArray.acc_Token
                    }
                })
            };
        }
    });
