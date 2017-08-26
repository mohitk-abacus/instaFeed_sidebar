angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
    //});
    
    // Form data for the login modal
    // $scope.loginData = {};
    



    
// ========================
// ======================== LOGIN TEMPLATES MODAL FUNCTION START
// ========================

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });
    
    // Open the LOGIN modal
    $scope.login = function() {
      $scope.modal.show();
    };
    
    // Triggered in the forgot password modal to close it
    $scope.closelogin = function() {
      $scope.modal.hide();
    };
// ========================
// ======================== LOGIN TEMPLATES MODAL FUNCTION END
// ========================
// -----------
// -----------
// -----------
// -----------
// ========================
// ======================== FORGOT PASSWORD TEMPLATES MODAL FUNCTION START
// ========================
    
    $ionicModal.fromTemplateUrl('templates/forgot-password.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.forgotpasswordmodal = modal;
    });
    
    // Open the forgot password modal
    $scope.forgotpassword = function() {
      $scope.forgotpasswordmodal.show();
    };
    
    // Triggered in the forgot password modal to close it
    $scope.closeforgotpassword = function() {
      $scope.forgotpasswordmodal.hide();
    };

// ========================
// ======================== FORGOT PASSWORD TEMPLATES MODAL FUNCTION END
// ========================
// -----------
// -----------
// -----------
// ----------- 
// ========================
// ======================== SIGN UP TEMPLATES MODAL FUNCTION START
// ========================
    
    $ionicModal.fromTemplateUrl('templates/signup.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.signupmodal = modal;
    });
    
    // Open the SIGN modal
    $scope.signup = function() {
      $scope.signupmodal.show();
    };
    
    // Triggered in the forgot password modal to close it
    $scope.closesignup = function() {
      $scope.signupmodal.hide();
    };

// ========================
// ======================== SIGN UP TEMPLATES MODAL FUNCTION END
// ========================
// -----------
// -----------
// -----------
// -----------
// ========================
// ======================== CHNAGE PASSWORD TEMPLATES MODAL FUNCTION START
// ========================
    
    $ionicModal.fromTemplateUrl('templates/change-password.html', {
      scope: $scope
    })
    .then(function(modal) {
      $scope.changepasswordmodal = modal;
    });
    
    // Open the forgot password modal
    $scope.changepassword = function() {
      $scope.changepasswordmodal.show();
    };
    
    // Triggered in the forgot password modal to close it
    $scope.closechangepassword = function() {
      $scope.changepasswordmodal.hide();
    };

// ========================
// ======================== FORGOT PASSWORD TEMPLATES MODAL FUNCTION END
// ========================  
    
    
  
  })
  
  
  // .controller('PlaylistsCtrl', function($scope) {
  //   $scope.playlists = [
  //     { title: 'Reggae', id: 1 },
  //     { title: 'Chill', id: 2 },
  //     { title: 'Dubstep', id: 3 },
  //     { title: 'Indie', id: 4 },
  //     { title: 'Rap', id: 5 },
  //     { title: 'Cowbell', id: 6 }
  //   ];
  // })
  
  .controller('PlaylistCtrl', function($scope, $stateParams, $ionicActionSheet) {
    
    
    $scope.uploads = function() {
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: "<i class='icon ion-camera'></i> Photo"},
          { text: "<i class='icon ion-ios-videocam'></i> Video"},
          { text: "<i class='icon ion-mic-a'></i> Audio"},
          { text: "<i class='icon ion-android-image'></i> Gallery" }
        ],
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          // return true;
          
          if(index === 0){ // Manual Button
            $scope.addsilverpartner();
          }
          else if(index === 1){
            $scope.addgoldpartner();
          }
          
          return true;
        }
      })
    }
    
    

// ========================
// ======================== PROFILE ICON CHNAGE FUNCTION START
// ========================
    $scope.camera_click = function() {
      
      // Show the action sheet
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: "<i class='icon ion-camera'></i> Camera"},
          { text: "<i class='icon ion-android-image'></i> Gallery" }
        ],
        cancelText: 'Cancel',
        cancel: function() {
          // add cancel code..
        },
        buttonClicked: function(index) {
          // return true;
          
          if(index === 0){ // Manual Button
            $scope.addsilverpartner();
          }
          else if(index === 1){
            $scope.addgoldpartner();
          }
          
          return true;
        }
      })
    }
    
    // ========================
    // ======================== PROFILE ICON CHNAGE FUNCTION END
    // ========================
    // -----------
    // -----------
    // -----------
    // -----------
    // ========================
    // ======================== TOP UNIVERSAL SEARCH FUNCTION START
    // ========================
    $scope.addClass = function(){
      $('.top-search').addClass("active");
    };
    
    $scope.removeClass = function(){
      $('.top-search').removeClass("active");
    };
    // ========================
    // ======================== TOP UNIVERSAL SEARCH FUNCTION END
    // ========================
    // -----------
    // -----------
    // -----------
    // -----------
    // ========================
    // ======================== ADD REPLY FUNCTION START
    // ========================
    $scope.addReply = function(){
      $('#1').addClass("active");
    };
    
    // ========================
    // ======================== ADD REPLY FUNCTION END
    // ========================
    // -----------
    // -----------
    // -----------
    // -----------
    // ========================
    // ======================== FLOAT ICON FUNCTION START
    // ========================
    $scope.class = "nav";
    $scope.changeClass = function(){
      if ($scope.class === "nav")
        $scope.class = "nav active";
      else
        $scope.class = "nav";
    };
    // ========================
    // ======================== FLOAT ICON FUNCTION END
    // ========================    
    
    
  });
  