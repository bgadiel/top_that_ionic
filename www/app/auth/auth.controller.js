/**
 * Created by gadi on 02/11/2016.
 */
angular.module('topthat.auth', ['ionic'])
  .controller('AuthController', AuthController);

AuthController.$inject = ['$scope', '$ionicModal', '$timeout', '$stateParams', '$ionicPopup', '$state', '$ionicHistory', '$firebaseAuth'];

/* @ngInject */
function AuthController($scope, $ionicModal, $timeout, $stateParams, $ionicPopup, $state, $ionicHistory, $firebaseAuth) {
  var vm = this;
  var auth = $firebaseAuth();

  vm.facebookSignIn = facebookSignIn;

  activate();

  ////////////////

  function activate(){
  }

  function facebookSignIn(){
    // login with Facebook
    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
      console.log("Signed in as:", firebaseUser.uid);
      $state.go('app.home');
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  }

}
