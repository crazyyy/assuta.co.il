// Avoid `console` errors in browsers that lack a console.
(function () {
  var method;
  var noop = function () {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
        console[method] = noop;
    }
}
}());
if (typeof jQuery == 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.


if ( $('.headnav').children('.current_page_item').length > 0 ) {

  var parentContent = $('.headnav .current_page_item').children('.sub-menu').html();
  var currentNavTitle = $('.headnav .current_page_item a').html();
  $('.right-bar-navi').html(parentContent);
  $('.blue-top-text').html(currentNavTitle);

} else if ( $('.headnav').children('.current_page_parent').length > 0 ) {

  var parentContent = $('.headnav .current_page_parent').children('.sub-menu').html();
  var currentNavTitle = $('.headnav .current_page_parent a').html();
  $('.right-bar-navi').html(parentContent);
  $('.blue-top-text').html(currentNavTitle);

} else if ( $('.headnav').children('.current-page-ancestor').children('.sub-menu').children('.current_page_parent').children('.sub-menu').children('.current_page_item').length > 0 ) {

  var parentContent = $('.headnav .current-page-ancestor').children('.sub-menu').html();
  var currentNavTitle = $('.headnav .current_page_parent a').html();
  $('.right-bar-navi').html(parentContent);
  $('.blue-top-text').html(currentNavTitle);

}

