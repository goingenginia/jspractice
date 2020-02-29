$(function() {
  let duration = 0;
  //ハンバーガー
  $(".nav_main-hbg").on("click", e => {
    $(".nav_main-hbgmenu").fadeToggle(500);
    $(".bg_top").toggleClass("hbg_border--top");
    $(".bg_mid").toggleClass("hbg_border--mid");
    $(".bg_btm").toggleClass("hbg_border--btm");
    $(".nav_main-hbgmenu")
      .find("li")
      .each((index, value) => {
        $(value)
          .delay(duration)
          .queue(function() {
            $(this).toggleClass("hbg_border-fadeIn").dequeue;
          });
        duration = duration + 100;
      });
    duration = 0;
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
  // アコーディオン
  $(".aco-title").on("click", e => {
    if (
      !$(e.currentTarget)
        .next()
        .is(":visible")
    ) {
      $(".aco-cnt:visible").slideUp();
      $(e.currentTarget)
        .next()
        .slideDown();
    } else if (
      $(e.currentTarget)
        .next()
        .is(":visible")
    ) {
      $(e.currentTarget)
        .next()
        .slideUp();
    }
  });
  // スライダー
  let imgCurrent = 0;
  $(".slider_right").on("click", e => {
    imgCurrent += 1;
    if (imgCurrent === 1) {
      $(".slider_left").css("display", "block");
      $(".slider_row").animate({ left: `${imgCurrent * -200}px` }, 500);
    } else if (imgCurrent === 4) {
      $(".slider_row").animate({ left: `${imgCurrent * -200}px` }, 500);
      $(".slider_right").css("display", "none");
    } else {
      $(".slider_row").animate({ left: `${imgCurrent * -200}px` }, 500);
    }
  });
  $(".slider_left").on("click", e => {
    imgCurrent -= 1;
    if (imgCurrent === 0) {
      $(".slider_row").animate({ left: `${imgCurrent * -200}px` }, 500);
      $(".slider_right").css("display", "block");
      $(".slider_left").css("display", "none");
    } else {
      $(".slider_row").animate({ left: `${imgCurrent * -200}px` }, 500);
      $(".slider_right").css("display", "block");
    }
  });
});
