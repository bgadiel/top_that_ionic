/**
 * Created by gadi on 02/11/2016.
 */
angular.module('topthat.new.contest', ['ionic'])
  .controller('NewContestController', NewContestController);

NewContestController.$inject = ['$scope', '$ionicModal', '$timeout', '$stateParams', '$ionicPopup', '$state', '$ionicHistory'];

/* @ngInject */
function NewContestController($scope, $ionicModal, $timeout, $stateParams, $ionicPopup, $state, $ionicHistory) {
  var vm = this;
  vm.newContestConfirm = newContestConfirm;

  $scope.$on('$ionicView.beforeEnter', function (event, viewData) {
    viewData.enableBack = true;
  });

  activate();

  ////////////////

  function activate() {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    vm.contestId = 111;
    vm.contestTitle = '';
    vm.isTimer = false;
    vm.isPrivate = false;
    vm.contestCategory = '';
  }

  function newContestConfirm() {
    // api call for new id
    var confirmPopup = $ionicPopup.show({
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
        //   {
        //   text: 'Invite your friends',
        //   type: 'button button-block button-positive',
        //   onTap: function (e) {
        //     // Returning a value will cause the promise to resolve with the given value.
        //     return 'share';
        //   }
        // },
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
        $state.go('app.contest.first', { contestID: 222 });
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
