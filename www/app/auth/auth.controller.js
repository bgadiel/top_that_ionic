/**
 * Created by gadi on 02/11/2016.
 */
angular.module('topthat.auth', ['ionic'])
  .controller('AuthController', AuthController);

AuthController.$inject = ['$state', 'toastr', '$cordovaOauth', '$localStorage', '$firebaseAuth'];

/* @ngInject */
function AuthController($state, toastr, $cordovaOauth, $localStorage, $firebaseAuth) {
  var vm = this;
  var auth = $firebaseAuth();

  vm.facebookSignIn = facebookSignIn;

  activate();

  ////////////////

  function activate(){
  }

  function facebookSignIn() {
    // login with Facebook

    // $cordovaOauth.facebook("242468262828616", ["email"])
    //   .then(function (result) {
    //     // results
    //     toastr.success("Login success");
    //     $localStorage.accessToken = result.access_token;
    //     $state.go('app.home');
    //   }, function (error) {
    //     toastr.error(error);
    //   });

    // authObj.$signInWithRedirect('facebook')
    //   .then(function() {
    //     toastr.success("Redirect success");
    //     $state.go('app.home');
    //   }).catch(function(error) {
    //   toastr.info("Authentication Redirect failed:", error);
    //   if (error.code === 'TRANSPORT_UNAVAILABLE') {
    //     authObj.$signInWithPopup('facebook')
    //       .then(function (authData) {
    //         toastr.success("Popup success");
    //         $state.go('app.home');
    //       });
    //   } else {
    //     toastr.error("Authentication Redirect failed:", error);
    //   }
    // });
    // firebase.auth().getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    //     var token = result.credential.accessToken;
    //   }
    //   // The signed-in user info.
    //   var user = result.user;
    // }).catch(function(error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   // The email of the user's account used.
    //   var email = error.email;
    //   // The firebase.auth.AuthCredential type that was used.
    //   var credential = error.credential;
    // });

    auth.$signInWithPopup("facebook").then(function(firebaseUser) {
      toastr.success("Signed in as:", firebaseUser.uid);
      $state.go('app.home', {cat: ''});
    }).catch(function(error) {
      toastr.error("Authentication failed:", error);
    });

    // Auth.$authWithOAuthRedirect(authMethod).then(function(authData) {
    // }).catch(function(error) {
    //   if (error.code === 'TRANSPORT_UNAVAILABLE') {
    //     Auth.$authWithOAuthPopup(authMethod).then(function(authData) {
    //     });
    //   } else {
    //     console.log(error);
    //   }
    // });
  }

}
