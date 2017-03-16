/**
 * Created by gadi on 12/03/2017.
 */

  angular
    .module('topthat.core')
    .factory('firebaseDataService', firebaseDataService);

  function firebaseDataService() {
    var root = firebase.database().ref();

    var service = {
      root: root,
      contests: root.child('contests'),
      users: root.child('users'),
      videos: root.child('videos')
    };

    return service;
  }
