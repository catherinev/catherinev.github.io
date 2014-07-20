$(document).ready(function(){
  highlightCurrentPage();
});

function highlightCurrentPage(){
  var currentUrl = document.URL;
  var baseUrl;
  if (currentUrl === "http://www.catherinev.com/"){
    baseUrl = ""
  }
  else {
    var regex = /http:\/\/(.+)\.com\/(\w*?\/).*/;
    baseUrl = currentUrl.replace(regex, "$2")
  }
 
  console.log(baseUrl)
  $('a[href="/' + baseUrl + '"]').addClass("current_page")
}
;
