  angular.module('topthat.home', ['ionic'])
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', '$ionicModal', '$timeout'];

  /* @ngInject */
  function HomeController($scope, $ionicModal, $timeout) {
    var vm = this;

    $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
      viewData.enableBack = false;
    });

    // var videos = [
    //   [
    //     {
    //       "id": "44",
    //       "video_url": "www.cdn.video.com/9d0c60af-a069-484e-987f-fad9935dc9a7",
    //       "upload_time": "2015-07-31T02:10:37 -03:00",
    //       "user_id": "57ea39efbc77e6a41c160fe6",
    //       "social": [
    //         {
    //           "facebook": 17,
    //           "comments": 36,
    //           "like": 44
    //         }
    //       ]
    //     },
    //     {
    //       "id": "15",
    //       "video_url": "www.cdn.video.com/0186d8aa-6744-40a9-a8b9-c9fedac93c05",
    //       "upload_time": "2016-03-01T01:00:35 -02:00",
    //       "user_id": "57ea39efa252619f7d4a0f72",
    //       "social": [
    //         {
    //           "facebook": 9,
    //           "comments": 26,
    //           "like": 7
    //         }
    //       ]
    //     },
    //     {
    //       "id": "38",
    //       "video_url": "www.cdn.video.com/21005cec-ae7c-4f90-b9c0-2cdfc84e5cfc",
    //       "upload_time": "2015-06-23T06:47:05 -03:00",
    //       "user_id": "57ea39efd0639d3912bb3529",
    //       "social": [
    //         {
    //           "facebook": 24,
    //           "comments": 32,
    //           "like": 27
    //         }
    //       ]
    //     },
    //     {
    //       "id": "33",
    //       "video_url": "www.cdn.video.com/8e5a08f0-f246-4d67-aa97-547b3fc81e42",
    //       "upload_time": "2015-08-08T12:59:27 -03:00",
    //       "user_id": "57ea39ef77a559d2f74bec3b",
    //       "social": [
    //         {
    //           "facebook": 17,
    //           "comments": 30,
    //           "like": 28
    //         }
    //       ]
    //     },
    //     {
    //       "id": "24",
    //       "video_url": "www.cdn.video.com/3f0ce094-9148-4aee-84b1-00f65cef3bf4",
    //       "upload_time": "2015-03-08T08:11:21 -02:00",
    //       "user_id": "57ea39efa9bca305aa2ada50",
    //       "social": [
    //         {
    //           "facebook": 41,
    //           "comments": 18,
    //           "like": 6
    //         }
    //       ]
    //     },
    //     {
    //       "id": "10",
    //       "video_url": "www.cdn.video.com/052519eb-b0e0-4dc0-8d7c-8232e3722cbb",
    //       "upload_time": "2016-07-28T09:01:43 -03:00",
    //       "user_id": "57ea39ef8b5536e01456ff99",
    //       "social": [
    //         {
    //           "facebook": 9,
    //           "comments": 6,
    //           "like": 49
    //         }
    //       ]
    //     }
    //   ]
    // ];
    // var users = [
    //   {
    //     "id": "user_id_58087b477fbe08966279b32d",
    //     "image_url": "https://randomuser.me/api/portraits/men/50.jpg/",
    //     "created_time": "2015-04-16T01:09:42 -03:00",
    //     "video_ids": [
    //       44
    //     ],
    //     "details": [
    //       {
    //         "p_name": "Flora",
    //         "l_name": "Parks",
    //         "user_name": fparks,
    //         "email": "floraparks@zaggle.com",
    //         "Followers_ids": [
    //           37,
    //           23,
    //           24
    //         ]
    //       }
    //     ],
    //     "location": "Nevada",
    //     "comments": [{
    //          "text": "YESSSS!",
    //          "creation_time": "2015-04-16T01:09:42 -03:00",
    //          "video_id": 22
    //        },{
    //          "text": "YESSSS2!",
    //          "creation_time": "2015-04-16T01:09:42 -03:00",
    //          "video_id": 11
    //        },{
    //          "text": "YESSSS3!",
    //          "creation_time": "2015-04-16T01:09:42 -03:00",
    //          "video_id": 223
    //        }]
    //   },
    //   {
    //     "id": "user_id_58087b47303a0e1feebcd1f4",
    //     "image_url": "https://randomuser.me/api/portraits/men/23.jpg/",
    //     "created_time": "2014-12-22T03:40:38 -02:00",
    //     "video_ids": [
    //       38
    //     ],
    //     "details": [
    //       {
    //         "p_name": "Lorie",
    //         "l_name": "Graves",
    //         "user_name": lgraves,
    //         "email": "loriegraves@zaggle.com",
    //         "Followers_ids": [
    //           19,
    //           50,
    //           21
    //         ]
    //       }
    //     ],
    //     "location": "Montana",
    //      "comments": [{
      //          "text": "YESSSS!",
      //          "creation_time": "2015-04-16T01:09:42 -03:00",
      //          "video_id": 22
      //        },{
      //          "text": "YESSSS2!",
      //          "creation_time": "2015-04-16T01:09:42 -03:00",
      //          "video_id": 11
      //        },{
      //          "text": "YESSSS3!",
      //          "creation_time": "2015-04-16T01:09:42 -03:00",
      //          "video_id": 223
      //        }]
    //   },
    //   {
    //     "id": "user_id_58087b4724e5ce6f13ba7299",
    //     "image_url": "https://randomuser.me/api/portraits/men/9.jpg/",
    //     "created_time": "2016-02-10T11:13:42 -02:00",
    //     "video_ids": [
    //      15
    //     ],
    //     "details": [
    //       {
    //         "p_name": "Flores",
    //         "l_name": "Henderson",
    //         "user_name": 30,
    //         "email": "floreshenderson@zaggle.com",
    //         "Followers_ids": [
    //           11,
    //           7,
    //           20
    //         ]
    //       }
    //     ],
    //     "location": "American Samoa"
    //   },
    //   {
    //     "id": "user_id_58087b476e0657ea5fb7ad6d",
    //     "image_url": "https://randomuser.me/api/portraits/men/44.jpg/",
    //     "created_time": "2014-10-10T06:52:36 -03:00",
    //     "video_ids": [
    //     24
    //     ],
    //     "details": [
    //       {
    //         "p_name": "Francis",
    //         "l_name": "Collier",
    //         "user_name": 42,
    //         "email": "franciscollier@zaggle.com",
    //         "Followers_ids": [
    //           13,
    //           8,
    //           33
    //         ]
    //       }
    //     ],
    //     "location": "Rhode Island"
    //   },
    //   {
    //     "id": "user_id_58087b472b0446d1acd25bd2",
    //     "image_url": "https://randomuser.me/api/portraits/men/10.jpg/",
    //     "created_time": "2015-11-02T06:08:22 -02:00",
    //     "video_ids": [
    //      10
    //     ],
    //     "details": [
    //       {
    //         "p_name": "English",
    //         "l_name": "Noble",
    //         "user_name": 1,
    //         "email": "englishnoble@zaggle.com",
    //         "Followers_ids": [
    //           6,
    //           6,
    //           15
    //         ]
    //       }
    //     ],
    //     "location": "Maryland"
    //   }
    // ];
    // var contests = [
    //   {
    //     "id": "user_id_580877a216f817015b37a0a0",
    //     "start_time": "2016-01-07T05:46:27 -02:00",
    //     "end_time": "2016-08-15T02:00:57 -03:00",
    //     "category": "music",
    //     "video_ids": [
    //       44,
    //       15,
    //       38
    //     ]
    //   },
    //   {
    //     "id": "user_id_580877a255b08d8b58f7bddc",
    //     "start_time": "2014-01-09T03:43:37 -02:00",
    //     "end_time": "2014-04-18T09:58:24 -03:00",
    //     "category": "music",
    //     "video_ids": [
    //       33,
    //       24,
    //       10,
    //       5
    //     ]
    //   }
    // ];
    // var example = {
    //   'users':{
    //   'user1':{
    //     'username':'john',
    //       'full_name':'John Vincent',
    //       'created_at':'9th Feb 2015',
    //       'groups':{
    //       'group1':true,
    //         'group3':true
    //     }
    //   },
    //   'user2': {},
    //   'user3': {}
    // },
    //   'groups': {
    //   'group1'{
    //     'group_name':'Administrators',
    //       'group_description':'Users who can do anything!',
    //       'no_of_users':2,
    //       'members':{
    //       'user1':true,
    //         'user3':true
    //     }
    //   },
    //   'group2'{
    //     'group_name':'Moderators',
    //       'group_description':'Users who can only moderate!',
    //       'no_of_users':1,
    //       'members':{
    //       'user2':true
    //     }
    //   }
    // }
    // };
    vm.contests = [
      {
        "id": "1",
        "start_time": "2016-01-07T05:46:27 -02:00",
        "end_time": "2016-08-15T02:00:57 -03:00",
        "title": "The Best Voice ever!",
        "category": "music",
        "videos": [
          {
            "id": "video_id_44",
            "video_url": "www.cdn.video.com/9d0c60af-a069-484e-987f-fad9935dc9a7",
            "upload_time": "2015-07-31T02:10:37 -03:00",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fparks",
            },
            "social": [
              {
                "facebook": 17,
                "comments": 36,
                "like": 44
              }
            ],
            "comments": [{
              "comment_id": 0,
              "text": "soooo great!",
              "user": {
                "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
                "created_time": "2015-04-16T01:09:42 -03:00",
                "user_name": "fpark22",
              }
            }, {
              "comment_id": 1,
              "text": "soooo great2!",
              "user": {
                "image_url": "https://randomuser.me/api/portraits/men/23.jpg",
                "created_time": "2015-04-16T01:09:42 -03:00",
                "user_name": "fparks",
              }
            },
              {
                "comment_id": 2,
                "text": "soooo great!",
                "user": {
                  "image_url": "https://randomuser.me/api/portraits/men/80.jpg",
                  "created_time": "2015-04-16T01:09:42 -03:00",
                  "user_name": "fparks33",
                }
              }
              ]
          },
          {
            "id": "video_id_15",
            "video_url": "www.cdn.video.com/0186d8aa-6744-40a9-a8b9-c9fedac93c05",
            "upload_time": "2016-03-01T01:00:35 -02:00",
            "user": {
              "id": "user_id_58087b4724e5ce6f13ba7299",
              "image_url": "https://randomuser.me/api/portraits/men/14.jpg",
              "created_time": "2016-02-10T11:13:42 -02:00",
              "video_ids": [
                "video_id_15"
              ],
              "details":
                {
                  "p_name": "Flores",
                  "l_name": "Henderson",
                  "user_name": "fhenderson",
                  "email": "floreshenderson@zaggle.com"
                },
              "location": "American Samoa"
            },
            "social": [
              {
                "facebook": 9,
                "comments": 26,
                "like": 7
              }
            ]
          },
          {
            "id": "video_id_38",
            "video_url": "www.cdn.video.com/21005cec-ae7c-4f90-b9c0-2cdfc84e5cfc",
            "upload_time": "2015-06-23T06:47:05 -03:00",
            "user": {
              "id": "user_id_58087b47303a0e1feebcd1f4",
              "image_url": "https://randomuser.me/api/portraits/men/85.jpg",
              "created_time": "2014-12-22T03:40:38 -02:00",
              "video_ids": [
                "video_id_38"
              ],
              "details":
                {
                  "p_name": "Lorie",
                  "l_name": "Graves",
                  "user_name": "lgraves",
                  "email": "loriegraves@zaggle.com"
                },
              "location": "Montana"
            },
            "social": [
              {
                "facebook": 24,
                "comments": 32,
                "like": 27
              }
            ]
          }
        ]
      },
      {
        "id": "2",
        "start_time": "2014-01-09T03:43:37 -02:00",
        "end_time": "2014-04-18T09:58:24 -03:00",
        "title": "The highest Jumps ever!",
        "category": "sport",
        "videos": [
          {
            "id": "video_id_24",
            "video_url": "www.cdn.video.com/8e5a08f0-f246-4d67-aa97-547b3fc81e42",
            "upload_time": "2015-08-08T12:59:27 -03:00",
            "user": {
              "id": "user_id_58087b476e0657ea5fb7ad6d",
              "image_url": "https://randomuser.me/api/portraits/women/4.jpg",
              "created_time": "2014-10-10T06:52:36 -03:00",
              "video_ids": [
                "video_id_24"
              ],
              "details":
                {
                  "p_name": "Francis",
                  "l_name": "Collier",
                  "user_name": "ssdsdsd",
                  "email": "franciscollier@zaggle.com"
                },
              "location": "Rhode Island"
            },
            "social": [
              {
                "facebook": 17,
                "comments": 30,
                "like": 28
              }
            ]
          },
          {
            "id": "video_id_10",
            "video_url": "www.cdn.video.com/3f0ce094-9148-4aee-84b1-00f65cef3bf4",
            "upload_time": "2015-03-08T08:11:21 -02:00",
            "user": {
              "id": "user_id_58087b472b0446d1acd25bd2",
              "image_url": "https://randomuser.me/api/portraits/women/48.jpg",
              "created_time": "2015-11-02T06:08:22 -02:00",
              "video_ids": [
                "video_id_10"
              ],
              "details":
                {
                  "p_name": "English",
                  "l_name": "Noble",
                  "user_name": "sdssdaad",
                  "email": "englishnoble@zaggle.com"
                },
              "location": "Maryland"
            },
            "social": [
              {
                "facebook": 41,
                "comments": 18,
                "like": 6
              }
            ]
          },
          {
            "id": "video_id_22",
            "video_url": "www.cdn.video.com/052519eb-b0e0-4dc0-8d7c-8232e3722cbb",
            "upload_time": "2016-07-28T09:01:43 -03:00",
            "user": {
              "id": "user_id_58087b472b0446d1acd25bd2",
              "image_url": "https://randomuser.me/api/portraits/women/56.jpg",
              "created_time": "2015-11-02T06:08:22 -02:00",
              "video_ids": [
                "video_id_22"
              ],
              "details":
                {
                  "p_name": "English",
                  "l_name": "Noble",
                  "user_name": "adaadsadasd",
                  "email": "englishnoble@zaggle.com"
                },
              "location": "Maryland"
            },
            "social": [
              {
                "facebook": 9,
                "comments": 6,
                "like": 49
              }
            ]
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


