angular.module('spaApp')
  .controller('HomeCtrl', function ($scope) {
      $scope.message = "Home.";
  });

angular.module('spaApp')
  .controller('PerfilCtrl', function ($scope) {
      $scope.message = "Profile.";
  });

angular.module('spaApp')
  .controller('MensajesCtrl', function ($scope) {
      $scope.message = "Messages.";
  });


/*TEST OF LOGIN*/

angular.module('spaApp')
  .controller('LoginCtrl', function ($scope, $http, $rootScope) {
      $scope.message = "Login.";
      $scope.master = { firstName: "John", lastName: "Doe" };
      $scope.reset = function () {
          $http.get("http://localhost:8080/login?username=" + $scope.user.firstName + "&password=" + $scope.user.lastName).
          success(function (data) {
              $scope.greeting = data;
              $rootScope.loginData = data;
              if (String($rootScope.loginData.loginSucceeded) == "true") {
                  $rootScope.userName = $scope.user.firstName;
                  window.location.href = "#/inicio";
              }
              else {
                  //alert("Login Failed");
                  $scope.loginError = "Wrong userName or Password";
              }
          });

      };
  });


///CHARTS CONTROLLERS/////


angular.module("spaApp").controller("LineCtrl", function ($scope, $http) {

    $scope.reset = function () {
        $scope.series = ['Series 444A', 'Series B444'];
    };
    $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
        console.log(points, evt);
    };
});

angular.module("spaApp").controller("PieCtrl", function ($scope, $rootScope, $http) {
    $http({
        method: 'GET',
        url: "http://localhost:8080/salesmandata?sessionid=" + $rootScope.loginData.sessionId
    }).then(function successCallback(response) {
        $rootScope.salesManData = response.data;
        //GENERATING THE CHART
        var labelsBuffer = [];
        var dataBuffer = [];
        for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
            labelsBuffer[i] = $rootScope.salesManData.data[i][0];
            dataBuffer[i] = $rootScope.salesManData.data[i][1];
        }
        $scope.labels = labelsBuffer;
        $scope.data = dataBuffer;

    }, function errorCallback(response) {
        alert('error');
    });

    $scope.refresh = function () {
        $http({
            method: 'GET',
            url: "http://localhost:8080/salesmandata?sessionid=" + $rootScope.loginData.sessionId
        }).then(function successCallback(response) {
            $rootScope.salesManData = response.data;
            //GENERATING THE CHART
            var labelsBuffer = [];
            var dataBuffer = [];
            for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
                labelsBuffer[i] = $rootScope.salesManData.data[i][0];
                dataBuffer[i] = $rootScope.salesManData.data[i][1];
            }
            $scope.labels = labelsBuffer;
            $scope.data = dataBuffer;

        }, function errorCallback(response) {
            alert('error');
        });
    };
});


angular.module("spaApp").controller("PieCtrl2", function ($scope, $rootScope, $http) {
    $http({
        method: 'GET',
        url: "http://localhost:8080/lastyeardata?sessionid=" + $rootScope.loginData.sessionId
    }).then(function successCallback(response) {
        $rootScope.salesManData = response.data;
        //GENERATING THE CHART
        var labelsBuffer = [];
        var dataBuffer = [];
        for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
            labelsBuffer[i] = $rootScope.salesManData.data[i][0];
            dataBuffer[i] = $rootScope.salesManData.data[i][1];
        }
        $scope.labels = labelsBuffer;
        $scope.data = dataBuffer;;
    }, function errorCallback(response) {
        alert('error');
    });

    $scope.refresh = function () {
        $http({
            method: 'GET',
            url: "http://localhost:8080/lastyeardata?sessionid=" + $rootScope.loginData.sessionId
        }).then(function successCallback(response) {
            $rootScope.salesManData = response.data;
            //GENERATING THE CHART
            var labelsBuffer = [];
            var dataBuffer = [];
            for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
                labelsBuffer[i] = $rootScope.salesManData.data[i][0];
                dataBuffer[i] = $rootScope.salesManData.data[i][1];
            }
            $scope.labels = labelsBuffer;
            $scope.data = dataBuffer;;
        }, function errorCallback(response) {
            alert('error');
        });
    };

});



angular.module("spaApp").controller("BarCtrl", function ($scope, $rootScope, $http) {
    $http({
        method: 'GET',
        url: "http://localhost:8080/lastyeardata?sessionid=" + $rootScope.loginData.sessionId
    }).then(function successCallback(response) {
        $rootScope.salesManData = response.data;
        //GENERATING THE CHART
        var labelsBuffer = [];
        var dataBuffer = [];
        for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
            labelsBuffer[i] = $rootScope.salesManData.data[i][0];
            dataBuffer[i] = $rootScope.salesManData.data[i][1];
        }
        $scope.labels = labelsBuffer;
        $scope.series = ['Sales'];
        $scope.data = [
          dataBuffer
        ];

    }, function errorCallback(response) {
        alert('error');
    });

    $scope.refresh = function () {
        $http({
            method: 'GET',
            url: "http://localhost:8080/lastyeardata?sessionid=" + $rootScope.loginData.sessionId
        }).then(function successCallback(response) {
            $rootScope.salesManData = response.data;
            //GENERATING THE CHART
            var labelsBuffer = [];
            var dataBuffer = [];
            for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
                labelsBuffer[i] = $rootScope.salesManData.data[i][0];
                dataBuffer[i] = $rootScope.salesManData.data[i][1];
            }
            $scope.labels = labelsBuffer;
            $scope.series = ['Sales'];
            $scope.data = [
              dataBuffer
            ];

        }, function errorCallback(response) {
            alert('error');
        });
    };
});


angular.module("spaApp").controller("BaseCtrl",
  function ($scope, $rootScope, $http) {

      $http({
          method: 'GET',
          url: "http://localhost:8080/topsalesmen?sessionid=" + $rootScope.loginData.sessionId
      }).then(function successCallback(response) {
          $rootScope.salesManData = response.data;
          //GENERATING THE CHART
          var labelsBuffer = [];
          var dataBuffer = [];
          for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
              labelsBuffer[i] = $rootScope.salesManData.data[i][0];
              dataBuffer[i] = $rootScope.salesManData.data[i][1];
          }
          $scope.labels = labelsBuffer;
          //$scope.series = ['Sales'];
          $scope.data = dataBuffer;
          $scope.type = 'PolarArea';

      }, function errorCallback(response) {
          alert('error');
      });

      $scope.refresh = function () {
          $http({
              method: 'GET',
              url: "http://localhost:8080/topsalesmen?sessionid=" + $rootScope.loginData.sessionId
          }).then(function successCallback(response) {
              $rootScope.salesManData = response.data;
              //GENERATING THE CHART
              var labelsBuffer = [];
              var dataBuffer = [];
              for (var i = 0; i < $rootScope.salesManData.data.length; i++) {
                  labelsBuffer[i] = $rootScope.salesManData.data[i][0];
                  dataBuffer[i] = $rootScope.salesManData.data[i][1];
              }
              $scope.labels = labelsBuffer;
              //$scope.series = ['Sales'];
              $scope.data = dataBuffer;
              $scope.type = 'PolarArea';

          }, function errorCallback(response) {
              alert('error');
          });
      };


      $scope.toggle = function () {
          $scope.type = $scope.type === 'PolarArea' ?
            'Pie' : 'PolarArea';
      };
  });


////TABLE OF DETAILS

angular.module("spaApp").controller("TableCtrl",
  function ($scope, $rootScope, $http) {

      $http({
          method: 'GET',
          url: "http://localhost:8080/topsalesorders?sessionid=" + $rootScope.loginData.sessionId
      }).then(function successCallback(response) {
          $rootScope.salesManData = response.data;
          //GENERATING THE TABLE       
          $scope.people = $rootScope.salesManData.data;
      }, function errorCallback(response) {
          alert('error');
      });

      $scope.refresh = function () {
          $http({
              method: 'GET',
              url: "http://localhost:8080/topsalesorders?sessionid=" + $rootScope.loginData.sessionId
          }).then(function successCallback(response) {
              $rootScope.salesManData = response.data;
              //GENERATING THE TABLE       
              $scope.people = $rootScope.salesManData.data;
          }, function errorCallback(response) {
              alert('error');
          });
      };
  });


/////////MODAL FORM CONTROLLER (SUPPORT)

angular.module("spaApp").controller("ModalFormCtrl",
  function ($scope, $rootScope, $http) {


      $scope.send = function () {
          $scope.sending = "Request was sent successfully...";
          window.setTimeout(function () {
              $('#myModalSupport').modal('hide');
              $scope.sending = "";
          }, 2000);
      };
  });

///////LOGOUT CONTROLLER

angular.module("spaApp").controller("LogOutCtrl",
  function ($scope, $rootScope, $http) {


      $scope.logOut = function () {
          $http({
              method: 'GET',
              url: " http://localhost:8080/logout?sessionid=" + $rootScope.loginData.sessionId
          }).then(function successCallback(response) {
              $rootScope.loginData.sessionId = "";
              window.location.href = "#/login";
              
          }, function errorCallback(response) {
              //alert('error');
              $rootScope.loginData.sessionId = "";
              window.location.href = "#/login";
          });
      };
  });

