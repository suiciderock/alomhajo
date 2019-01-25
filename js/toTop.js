$(document).ready(run);

function run() {
  var GOMBSZIN = "#ae2735";
  var SCROLL_TIME = 800;

  $("body").append('<div id="toTop"><div></div></div>');
  $("#toTop div").css({
    "border-left": "solid 10px "+GOMBSZIN,
    "border-right": "solid 10px "+GOMBSZIN,
    "border-bottom": "solid 18px white",
    "width": 0
  });
  $("#toTop").css({
    "background-color": GOMBSZIN,
    "padding": "15px",
    "position": "fixed",
    "right": "50px",
    "bottom": "50px",
    "border-radius": "0px",
    "cursor": "pointer",
    "display": "none"
  });
  
  toTopSetup();
  $(window).scroll(toTopSetup);
  $(window).resize(toTopSetup);
  $("#toTop").click(gotoTop);
  
  function toTopSetup() {
    $(window).scrollTop() > 100 && $(window).innerWidth() > 767 ? $("#toTop").fadeIn() : $("#toTop").fadeOut();
  }

  function gotoTop() {
    $("html, body").animate({"scrollTop": 0}, SCROLL_TIME);
  }
}
