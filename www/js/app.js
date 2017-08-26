// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
        
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })
  
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    
    .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })
    
    .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    
    .state('app.single', {
      url: '/playlists/:playlistId',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlist.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
    
    
    
    .state('intro', {
      url: '/intro',
      cache: false,
      templateUrl: 'templates/introduction.html'
    })
      

    .state('app.newslisting', {
      url: '/newslisting',
      views: {
        'menuContent': {
          templateUrl: 'templates/newslisting.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
     

    .state('app.talentslisting', {
      url: '/talentslisting',
      views: {
        'menuContent': {
          templateUrl: 'templates/talentslisting.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
     

    .state('app.explorelisting', {
      url: '/explorelisting',
      views: {
        'menuContent': {
          templateUrl: 'templates/explorelisting.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
     
    

    .state('app.listingdetail', {
      url: '/listingdetail',
      views: {
        'menuContent': {
          templateUrl: 'templates/listingdetail.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
     
 
       
    .state('app.newsupload', {
      url: '/newsupload',
      views: {
        'menuContent': {
          templateUrl: 'templates/newsupload.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

 
       
    .state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

       
    .state('app.editprofile', {
      url: '/editprofile',
      views: {
        'menuContent': {
          templateUrl: 'templates/editprofile.html',
          controller: 'PlaylistCtrl'
        }
      }
    })


       
    .state('app.mypost', {
      url: '/mypost',
      views: {
        'menuContent': {
          templateUrl: 'templates/mypost.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

       
    .state('app.userprofile', {
      url: '/userprofile',
      views: {
        'menuContent': {
          templateUrl: 'templates/userprofile.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

       
    .state('app.following', {
      url: '/following',
      views: {
        'menuContent': {
          templateUrl: 'templates/following.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
       
    .state('app.followers', {
      url: '/followers',
      views: {
        'menuContent': {
          templateUrl: 'templates/followers.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

       
    .state('app.petitionslisting', {
      url: '/petitionslisting',
      views: {
        'menuContent': {
          templateUrl: 'templates/petitionslisting.html',
          controller: 'PlaylistCtrl'
        }
      }
    })
       
    .state('app.petitiondetail', {
      url: '/petitiondetail',
      views: {
        'menuContent': {
          templateUrl: 'templates/petitiondetail.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

       
    .state('app.pollslisting', {
      url: '/pollslisting',
      views: {
        'menuContent': {
          templateUrl: 'templates/pollslisting.html',
          controller: 'PlaylistCtrl'
        }
      }
    })

       
    .state('app.pollsdetail', {
      url: '/pollsdetail',
      views: {
        'menuContent': {
          templateUrl: 'templates/pollsdetail.html',
          controller: 'PlaylistCtrl'
        }
      }
    });


  // .state('newsupload', {
  //   url: '/newsupload',
  //   templateUrl: 'templates/newsupload.html',
  //   controller: 'PlaylistCtrl'
  // });


    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/intro');
  });
  