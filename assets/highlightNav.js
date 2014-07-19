$(document).ready(function(){
  highlightCurrentPage();
});

function highlightCurrentPage(){
  var currentUrl = document.URL;
  console.log('current: ' + currentUrl)
  // var regex = /http:\/\/(.+)\/([\w\.]*)\??(.*)/;
  var regex = /http:\/\/(.+)\.com\/(.*)/;
  var baseUrl = currentUrl.replace(regex, "$2")
  console.log('base: ' + baseUrl)
  $('a[href="/' + baseUrl + '"]').addClass("current")
}
;
