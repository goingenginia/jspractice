$(function() {
  //ハンバーガー
  $(".nav_main-hbg").on("click", e => {
    $(".nav_main-hbgmenu").fadeToggle(500);
    $(".bg_top").toggleClass("hbg_border--top");
    $(".bg_mid").toggleClass("hbg_border--mid");
    $(".bg_btm").toggleClass("hbg_border--btm");
    $(".nav_main-hbgmenu")
      .find("li")
      .toggleClass("hbg_border-fadeIn");
  });
  // フェードイン
  $(window).on("scroll", e => {
    if ($(window).scrollTop() >= 1000) {
      $("header").css({ "background-color": "#55FFFF", transition: "1s" });
      $(".top_btn").fadeIn(500);
    } else if ($(window).scrollTop() >= 500) {
      $("header").css({ "background-color": "#FFFF55", transition: "1s" });
    } else {
      $("header").css("background-color", "white");
      $(".top_btn").fadeOut(500);
    }
  });
  // スムーススクロール
  $(".top_btn").on("click", e => {
    $("html").animate(
      {
        scrollTop: 0
      },
      3000
    );
  });
});
