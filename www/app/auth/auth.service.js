/**
 * Created by gadi on 31/03/2017.
 */
angular
    .module('topthat.auth')
    .factory('Auth', Auth);

Auth.$inject = ['$firebaseAuth'];

  /* @ngInject */
function Auth($firebaseAuth) {
  //return $firebaseAuth(rootRef);
  var endPoint = "top-that-one-fdf8f.firebaseapp.com";
  var usersRef = new Firebase(endPoint);
  return $firebaseAuth(usersRef);
}


