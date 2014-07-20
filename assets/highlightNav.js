$(document).ready(function(){
  highlightCurrentPage();
});

function highlightCurrentPage(){
  var currentUrl = document.URL;

  var regex = /http:\/\/(.+)\.com\/(.*?)\//;
  var baseUrl = currentUrl.replace(regex, "$2")
  console.log(baseUrl)
  $('a[href="/' + baseUrl + '/"]').addClass("current_page")
}
;
