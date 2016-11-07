/**
 * Created by gadi on 25/10/2016.
 */
angular.module('topthat.contest', ['ionic'])
  .controller('ContestController', ContestController);

ContestController.$inject = ['$scope', '$ionicModal', '$timeout', '$stateParams', '$rootScope', '$state', '$ionicPopup'];

/* @ngInject */
function ContestController($scope, $ionicModal, $timeout, $stateParams, $rootScope, $state, $ionicPopup) {
  var vm = this;
  vm.changeRegionModal = changeRegionModal;

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });

  // get the id
  vm.id = $stateParams.contestID;

  vm.contest =
  {
    "id": "0",
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
          "id": "user_id_58087b477fbe08966279b32d",
          "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
          "created_time": "2015-04-16T01:09:42 -03:00",
          "video_ids": [
            "video_id_44"
          ],
          "details": {
            "p_name": "Flora",
            "l_name": "Parks",
            "user_name": "fparks",
            "email": "floraparks@zaggle.com"
          },
          "location": "Nevada"
        },
        "social": [
          {
            "facebook": 17,
            "comments": 36,
            "like": 44
          }
        ],
        "comments": [
          {
            "comment_id": 0,
            "text": "soooo great!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fpark22",
            }
          },
          {
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
          "details": {
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
        ],
        "comments": [
          {
            "comment_id": 0,
            "text": "soooo great!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fpark22",
            }
          },
          {
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
        "id": "video_id_38",
        "video_url": "www.cdn.video.com/21005cec-ae7c-4f90-b9c0-2cdfc84e5cfc",
        "upload_time": "2015-06-23T06:47:05 -03:00",
        "user": {
          "id": "user_id_58087b47303a0e1feebcd1f4",
          "image_url": "https://randomuser.me/api/portraits/women/85.jpg",
          "created_time": "2014-12-22T03:40:38 -02:00",
          "video_ids": [
            "video_id_38"
          ],
          "details": {
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
        ],
        "comments": [
          {
            "comment_id": 0,
            "text": "soooo great!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/women/29.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fpark22",
            }
          },
          {
            "comment_id": 1,
            "text": "soooo great2!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/women/19.jpg",
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
        "id": "video_id_44",
        "video_url": "www.cdn.video.com/9d0c60af-a069-484e-987f-fad9935dc9a7",
        "upload_time": "2015-07-31T02:10:37 -03:00",
        "user": {
          "id": "user_id_58087b477fbe08966279b32d",
          "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
          "created_time": "2015-04-16T01:09:42 -03:00",
          "video_ids": [
            "video_id_44"
          ],
          "details": {
            "p_name": "Flora",
            "l_name": "Parks",
            "user_name": "fparks",
            "email": "floraparks@zaggle.com"
          },
          "location": "Nevada"
        },
        "social": [
          {
            "facebook": 17,
            "comments": 36,
            "like": 44
          }
        ],
        "comments": [
          {
            "comment_id": 0,
            "text": "soooo great!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/women/83.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fpark22",
            }
          },
          {
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
              "image_url": "https://randomuser.me/api/portraits/women/81.jpg",
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
          "image_url": "https://randomuser.me/api/portraits/women/0.jpg",
          "created_time": "2016-02-10T11:13:42 -02:00",
          "video_ids": [
            "video_id_15"
          ],
          "details": {
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
        ],
        "comments": [
          {
            "comment_id": 0,
            "text": "soooo great!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/men/50.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fpark22",
            }
          },
          {
            "comment_id": 1,
            "text": "soooo great2!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/women/23.jpg",
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
        "id": "video_id_38",
        "video_url": "www.cdn.video.com/21005cec-ae7c-4f90-b9c0-2cdfc84e5cfc",
        "upload_time": "2015-06-23T06:47:05 -03:00",
        "user": {
          "id": "user_id_58087b47303a0e1feebcd1f4",
          "image_url": "https://randomuser.me/api/portraits/women/4.jpg",
          "created_time": "2014-12-22T03:40:38 -02:00",
          "video_ids": [
            "video_id_38"
          ],
          "details": {
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
        ],
        "comments": [
          {
            "comment_id": 0,
            "text": "soooo great!",
            "user": {
              "image_url": "https://randomuser.me/api/portraits/women/27.jpg",
              "created_time": "2015-04-16T01:09:42 -03:00",
              "user_name": "fpark22",
            }
          },
          {
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
      }
    ]
  };

  activate();

  ////////////////

  function activate() {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
  }

  $rootScope.$ionicGoBack = function(backCount) {
    $state.go('app.home');
  };

  function changeRegionModal(){
    var confirmPopup = $ionicPopup.confirm({
      title: 'Almost Done!', // String. The title of the popup
      cssClass: 'popup-vertical-buttons', // String, The custom CSS class name
      subTitle: 'We will reveiew the detais and will start in the next 24 hours',
      templateUrl: 'app/new.contest/new.contest.modal.html',
      scope: $scope,
      buttons: [{ // Array[Object] (optional). Buttons to place in the popup footer.
        text: 'Contest Page',
        type: 'button button-block button-positive',
        onTap: function (e) {
          //e.preventDefault() will stop the popup from closing when tapped.
          //e.preventDefault();
          return 'contest';
        }
      },
        {
          text: 'Home Page',
          type: 'button button-block button-positive',
          onTap: function (e) {
            // Returning a value will cause the promise to resolve with the given value.
            return 'home';
          }
        }]
    });

    confirmPopup.then(function (res) {
      if (res === 'contest') {
        $state.go('app.contest.first', { contestID: 111 });
      }
      if (res === 'share') {
        $state.go('app.home');
      }
      if (res === 'home') {
        $state.go('app.home');
      }
    });
  }
}
