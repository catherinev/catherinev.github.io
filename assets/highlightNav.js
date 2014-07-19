$(document).ready(function(){
  highlightCurrentPage();
});

function highlightCurrentPage(){
  var currentUrl = document.URL;
  console.log(currentUrl);
  var regex = /http:\/\/(.+)\/([\w\.]+)\??(.*)/;
  var baseUrl = currentUrl.replace(regex, "$2")
  console.log('base')
  console.log(baseUrl)
  $('a[href="' + baseUrl + '"]').addClass("current")
}
;
