/**
 * Created by gadi on 02/11/2016.
 */
angular.module('topthat.auth', ['ionic'])
  .controller('AuthController', AuthController);

AuthController.$inject = ['$scope', '$ionicModal', '$timeout', '$stateParams', '$ionicPopup', '$state', '$ionicHistory'];

/* @ngInject */
function AuthController($scope, $ionicModal, $timeout, $stateParams, $ionicPopup, $state, $ionicHistory) {
  var vm = this;
  vm.facebookSignIn = facebookSignIn;

  activate();

  ////////////////

  function activate(){}

  function facebookSignIn(){}

}
