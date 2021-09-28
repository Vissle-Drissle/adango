if (window.location.href.startsWith("http://")) {window.location.href = window.location.href.replace("http://", "https://")}
else {
  var element = [document.getElementsByTagName("td")[2], document.getElementsByClassName("logo_links")[0], document.getElementById("ad_wrapper"), document.getElementById("ad_placeholder_td"), document.getElementById("right"), document.getElementById("buyers_ad"), document.getElementById("rect_ad"), document.getElementById("rc-widget-845cca"), document.getElementById("clogo")]
  element.forEach(
    function(x) {
      if (x && x.getElementsByTagName("input")[0] == undefined && location.pathname != "/deletegroup") {x.remove()}
    }
  )
  var limit = 0
  document.querySelectorAll("div").forEach(
    function(x) {
      if (x.style[0] == "float" && limit < 2) {
        x.remove()
        limit += 1
      }
    }
  )
  if (document.getElementsByClassName("fpix_header")[0]) {document.getElementsByClassName("fpix_header")[0].remove()}
  console.log("https://i.imgur.com/8An6ZDm.gif")
}
