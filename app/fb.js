jQuery(function( $ ){
  // Overwrite the local window reference by create a
  // local jQuery "window" wrapper for access to things
  // like width() and scrollTop().
  var window = $( window );
  // Log window.
  window.fbAsyncInit = function() {
    console.log("facebook login");
    FB.init({
      appId: 'equipme',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.4'
    });
  };
});
