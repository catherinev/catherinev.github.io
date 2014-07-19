$(document).ready(function(){
  highlightCurrentPage();
});

function highlightCurrentPage(){
  var currentUrl = document.URL;

  var regex = /http:\/\/(.+)\.com\/(.*)/;
  var baseUrl = currentUrl.replace(regex, "$2")

  $('a[href="/' + baseUrl + '"]').addClass("current")
}
;
