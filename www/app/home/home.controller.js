// (function () {
//   'use strict';

  angular.module('topthat.home', ['ionic'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$ionicModal', '$timeout'];

  /* @ngInject */
  function HomeController($scope, $ionicModal, $timeout) {
    var vm = this;

    vm.videos = [
      [
        {
          "_id": "57ea39ef8ad3fcfff243c55c",
          "video_url": "www.cdn.video.com/9d0c60af-a069-484e-987f-fad9935dc9a7",
          "upload_time": "2015-07-31T02:10:37 -03:00",
          "rank": 16,
          "user_id": "57ea39efbc77e6a41c160fe6",
          "social": [
            {
              "facebook": 17,
              "comments": 36,
              "like": 44
            }
          ]
        },
        {
          "_id": "57ea39ef31eda0e59fc8a845",
          "video_url": "www.cdn.video.com/0186d8aa-6744-40a9-a8b9-c9fedac93c05",
          "upload_time": "2016-03-01T01:00:35 -02:00",
          "rank": 37,
          "user_id": "57ea39efa252619f7d4a0f72",
          "social": [
            {
              "facebook": 9,
              "comments": 26,
              "like": 7
            }
          ]
        },
        {
          "_id": "57ea39efb78a33c77301cbd5",
          "video_url": "www.cdn.video.com/21005cec-ae7c-4f90-b9c0-2cdfc84e5cfc",
          "upload_time": "2015-06-23T06:47:05 -03:00",
          "rank": 6,
          "user_id": "57ea39efd0639d3912bb3529",
          "social": [
            {
              "facebook": 24,
              "comments": 32,
              "like": 27
            }
          ]
        },
        {
          "_id": "57ea39ef0b18bd4dc4a7bb22",
          "video_url": "www.cdn.video.com/8e5a08f0-f246-4d67-aa97-547b3fc81e42",
          "upload_time": "2015-08-08T12:59:27 -03:00",
          "rank": 24,
          "user_id": "57ea39ef77a559d2f74bec3b",
          "social": [
            {
              "facebook": 17,
              "comments": 30,
              "like": 28
            }
          ]
        },
        {
          "_id": "57ea39ef900363dfb4f1136e",
          "video_url": "www.cdn.video.com/3f0ce094-9148-4aee-84b1-00f65cef3bf4",
          "upload_time": "2015-03-08T08:11:21 -02:00",
          "rank": 1,
          "user_id": "57ea39efa9bca305aa2ada50",
          "social": [
            {
              "facebook": 41,
              "comments": 18,
              "like": 6
            }
          ]
        },
        {
          "_id": "57ea39ef17a513e5d322dd76",
          "video_url": "www.cdn.video.com/052519eb-b0e0-4dc0-8d7c-8232e3722cbb",
          "upload_time": "2016-07-28T09:01:43 -03:00",
          "rank": 26,
          "user_id": "57ea39ef8b5536e01456ff99",
          "social": [
            {
              "facebook": 9,
              "comments": 6,
              "like": 49
            }
          ]
        },
        {
          "_id": "57ea39efce76fe3c5b1f27e2",
          "video_url": "www.cdn.video.com/503a110d-8b9f-44f1-a8c0-47cf4a90c01c",
          "upload_time": "2014-11-21T03:19:23 -02:00",
          "rank": 14,
          "user_id": "57ea39ef9a63646433a8db14",
          "social": [
            {
              "facebook": 25,
              "comments": 1,
              "like": 30
            }
          ]
        }
      ]
    ];
    vm.users = [
      {
        "_id": "57ea3d7d4553791805d4481c",
        "image_url": "www.cdn.video.com/dda2984e-4048-45f8-9182-1ee3ae1028a0",
        "created_time": "2015-12-01T08:53:49 -02:00",
        "rank": 8,
        "video_ids": [
          36,
          50,
          7
        ],
        "details": [
          {
            "p_name": "Jerry",
            "l_name": "Hewitt",
            "user_name": 29,
            "email": "jerryhewitt@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7dd0d2411e1504503c",
        "image_url": "www.cdn.video.com/13093032-74d3-4bf0-a6df-b98423334b7b",
        "created_time": "2014-12-10T07:31:00 -02:00",
        "rank": 33,
        "video_ids": [
          44,
          28,
          1
        ],
        "details": [
          {
            "p_name": "Farmer",
            "l_name": "Duran",
            "user_name": 1,
            "email": "farmerduran@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7d5b4803067e384cce",
        "image_url": "www.cdn.video.com/bc26722c-50fd-402b-8a12-c53c63dbd65e",
        "created_time": "2016-04-14T02:14:32 -03:00",
        "rank": 43,
        "video_ids": [
          20,
          15,
          50
        ],
        "details": [
          {
            "p_name": "Rosie",
            "l_name": "Whitfield",
            "user_name": 2,
            "email": "rosiewhitfield@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7d93db8d1db4fb2147",
        "image_url": "www.cdn.video.com/7389fb0d-0dc5-42a6-94d6-8be687ef0ddb",
        "created_time": "2016-09-02T07:17:45 -03:00",
        "rank": 47,
        "video_ids": [
          20,
          23,
          48
        ],
        "details": [
          {
            "p_name": "Nadia",
            "l_name": "Whitehead",
            "user_name": 44,
            "email": "nadiawhitehead@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7da9f17093f67d6b3f",
        "image_url": "www.cdn.video.com/46b5cbcd-4d17-4833-accc-7bcded1b665b",
        "created_time": "2015-06-11T05:04:50 -03:00",
        "rank": 29,
        "video_ids": [
          40,
          18,
          25
        ],
        "details": [
          {
            "p_name": "Foster",
            "l_name": "Langley",
            "user_name": 36,
            "email": "fosterlangley@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7d1e3a0b4ff7760ccf",
        "image_url": "www.cdn.video.com/8548afe4-7ff6-4cbf-a537-31eb94a5ba44",
        "created_time": "2015-08-01T08:56:42 -03:00",
        "rank": 19,
        "video_ids": [
          1,
          34,
          33
        ],
        "details": [
          {
            "p_name": "Glenn",
            "l_name": "Wong",
            "user_name": 22,
            "email": "glennwong@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7da373c5300eb38802",
        "image_url": "www.cdn.video.com/0e20e179-762b-4079-82d9-49f50fa1f5ea",
        "created_time": "2014-10-06T04:19:11 -03:00",
        "rank": 26,
        "video_ids": [
          7,
          5,
          36
        ],
        "details": [
          {
            "p_name": "Kristin",
            "l_name": "Curry",
            "user_name": 9,
            "email": "kristincurry@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7d380f5efc7e18c5b4",
        "image_url": "www.cdn.video.com/f42cf84b-f7b5-4f6e-bf9f-d93a98dfdb15",
        "created_time": "2016-09-05T08:27:54 -03:00",
        "rank": 48,
        "video_ids": [
          20,
          37,
          14
        ],
        "details": [
          {
            "p_name": "Shannon",
            "l_name": "Guthrie",
            "user_name": 32,
            "email": "shannonguthrie@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7db08b095d31f2f687",
        "image_url": "www.cdn.video.com/8e8c0b9d-d6af-4996-8586-a8bf2567b47b",
        "created_time": "2016-05-16T04:51:16 -03:00",
        "rank": 39,
        "video_ids": [
          46,
          14,
          7
        ],
        "details": [
          {
            "p_name": "Curtis",
            "l_name": "Ray",
            "user_name": 31,
            "email": "curtisray@exiand.com"
          }
        ]
      },
      {
        "_id": "57ea3d7d7745456604549cd1",
        "image_url": "www.cdn.video.com/bc5fab9e-9a88-4843-8151-84be6c76a291",
        "created_time": "2016-05-20T12:49:22 -03:00",
        "rank": 49,
        "video_ids": [
          17,
          42,
          19
        ],
        "details": [
          {
            "p_name": "Aguirre",
            "l_name": "Daniel",
            "user_name": 44,
            "email": "aguirredaniel@exiand.com"
          }
        ]
      }
    ];
    activate();

    ////////////////

    function activate() {
      // With the new view caching in Ionic, Controllers are only called
      // when they are recreated or on app start, instead of every page change.
      // To listen for when this page is active (for example, to refresh data),
      // listen for the $ionicView.enter event:
      //$scope.$on('$ionicView.enter', function(e) {
      //});

      // Form data for the login modal
      $scope.loginData = {};

      // Create the login modal that we will use later
      $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        $scope.modal = modal;
      });

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        //console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function() {
          $scope.closeLogin();
        }, 1000);
      };
    }
  }

// })();

