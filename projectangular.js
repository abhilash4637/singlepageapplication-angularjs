var app=angular.module("myApp",['ui.router']);
app.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state("login",{
            url:"/login",
            templateUrl:"defaultlogin.html",
            controller:"myCtrl"
        }).state("home",{
            url:"/home",
            templateUrl:"home.html",
            controller:"myCtrl"
        })
        .state("employee",{
            url:"/employee",
            templateUrl:"employee.html",
            controller:"myCtrl"
        })
        .state("employee.employee2",{
            url:"/employee2",
            templateUrl:"employee2.html",
            controller:"myCtrl"
        })
        .state("employee.employee3",{
            url:"/employee3",
            templateUrl:"employee3.html",
            controller:"myCtrl"
        })

        // $urlRouterProvider.otherwise("/home");

})
app.controller("myCtrl",function($scope,AnupService,$location) {
    $scope.login = function () {
        if ($scope.pass != undefined && $scope.user != undefined) {
            $location.url("/home");
        }
        else {
            alert("please entere valid details")
        }

    }
    $scope.data = AnupService.initializeData;
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    }
    $scope.deletethis = function (id) {
        var index;
        for (var i = 0; i < $scope.data.length; i++) {
            if ($scope.data[i].id == id) {
                index = i;
            }
        }
        $scope.data.splice(index, 1);
    }
    $scope.save = function () {
        var dummy = {id: $scope.eid, name: $scope.ename, dob: $scope.edob, age: $scope.eage};
        AnupService.addEmployee(dummy, $scope.data, function (result) {
            $scope.data = result;
            $location.url("/employee");
        })
    }
    $scope.editthis = function (b) {
        AnupService.editthis(b,$scope.data,function(res){
            $scope.a = res.id
            $scope.b = res.name
            $scope.c = res.dob
            $scope.d = res.age
            $scope.e = b;

        });
    }

    $scope.edit = function (y) {

        var obj = {
            id : $scope.a,
            name : $scope.b,
            dob : $scope.c,
            age : $scope.d
        }

        AnupService.edit(obj,y,$scope.data,function(res){
            $scope.data = res;
            $location.url("/employee");
        });

    }

})

