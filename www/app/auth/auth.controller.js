/**
 * Created by gadi on 02/11/2016.
 */
angular.module('topthat.auth', ['ionic'])
  .controller('AuthController', AuthController);

AuthController.$inject = ['$state', '$firebaseAuth', 'toastr'];

/* @ngInject */
function AuthController($state, $firebaseAuth, toastr) {
  var vm = this;
  var authObj = $firebaseAuth();

  // var provider = new firebase.auth.FacebookAuthProvider();
  // //provider.addScope("https://www.googleapis.com/auth/plus.login");
  // provider.setCustomParameters({
  //   'display': 'popup'
  // });

  authObj.$onAuthStateChanged(function(firebaseUser) {
    if (firebaseUser) {
      toastr.success("Authentication success:", firebaseUser.uid);
    } else {
      toastr.error("Signed out");
    }
    // $scope.currUser = user;
    // if (user) {
    //   $scope.go('profile') //function to change states.
    // } else {
    //   // No user is signed in.
    //   $scope.go("login") //login is where the app starts (login page)
    // }
  });


  vm.facebookSignIn = facebookSignIn;

  activate();

  ////////////////

  function activate(){
  }

  function facebookSignIn(){
    // login with Facebook
    authObj.$signInWithRedirect('facebook').then(function() {
      // Never called because of page redirect
      // Instead, use $onAuthStateChanged() to detect successful authentication
    }).catch(function(error) {
      toastr.info("Authentication Redirect failed:", error);
      if (error.code === 'TRANSPORT_UNAVAILABLE') {
        authObj.$signInWithPopup('facebook').then(function(authData) {
        });
      } else {
        toastr.error("Authentication Redirect failed:", error);
      }
    });
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
    // authObj.$signInWithPopup("facebook").then(function(firebaseUser) {
    //   toastr.success("Signed in as:", firebaseUser.uid);
    //   $state.go('app.home');
    // }).catch(function(error) {
    //   toastr.error("Authentication failed:", error);
    // });

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
