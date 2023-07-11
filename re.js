// JavaScript Document
// refreshing page automatically when viewport size change  
window.onresize = function(event) {
  document.location.reload(true);
}

var href = window.location.href.split("/")
var html_location = href[href.length-1]

if (window.innerWidth > 1920 && html_location !== "Error/errorns.html") {
    window.location = "Error/errorns.html";
}
if (window.innerWidth < 1920 && html_location !== "Error/errorns.html") {
    window.location = "Error/errorns.html";
}


if (window.innerWidth == 1920 && html_location !== "indexd.html") {
    window.location = "indexd.html";
}

