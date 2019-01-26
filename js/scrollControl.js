$(document).ready(run);

function run() {

    var MENU_HEIGHT = parseInt($("header").css("height")) + parseInt($("header").css("padding-top")) + parseInt($("header").css("padding-bottom"));
    var SCROLL_TIME = 1000;

    $(".scroll").click(menuClick);

    function menuClick(event) {
        event.preventDefault(); // nélküle egy pillanatra elugrana az ablak
        var id = $(this).attr("href");
        $("html, body").animate({"scrollTop": $(id).offset().top - MENU_HEIGHT}, SCROLL_TIME);
        if ($(".navbar-collapse").length > 0) {
            $(".navbar-collapse").collapse("hide");
        }
    }

}
