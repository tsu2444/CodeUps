jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  jQuery(function ($) {
    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger ").on("click", function () {
        $(this).toggleClass("is-open");
        if ($(this).hasClass("is-open")) {
          openDrawer();
        } else {
          closeDrawer();
        }
      });

      // backgroundまたはページ内リンクをクリックで閉じる
      $(".js-drawer a[href]").on("click", function () {
        closeDrawer();
      });

      // resizeイベント
      $(window).on("resize", function () {
        if (window.matchMedia("(min-width: 768px)").matches) {
          closeDrawer();
        }
      });
    });

    function openDrawer() {
      $(".js-drawer").fadeIn();
      $(".js-hamburger").addClass("is-open");
    }

    function closeDrawer() {
      $(".js-drawer").fadeOut();
      $(".js-hamburger").removeClass("is-open");
    }
  });

  // mv_swiper
  jQuery(function ($) {
    const mv_swiper = new Swiper(".js-mv-swiper", {
      loop: true,
      speed: 1000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
    });
  });

  //Campaign swiper
  jQuery(function ($) {
    var initialSlide = 0; // 初期のスライドを設定

    var campaign_swiper = new Swiper(".js-campaign-swiper", {
      loop: true,
      speed: 1000,
      slidesPerView: 1.22,
      spaceBetween: 24,
      loopedSlides: 4, // カードの数に合わせて設定
      centeredSlides: false, // 中央寄せを無効化
      initialSlide: initialSlide, // 初期のスライドを指定
      autoplay: {
        delay: 200000000,
        disableOnInteraction: false,
      },
      initialSlide: initialSlide, // 初期のスライドを指定
      breakpoints: {
        768: {
          slidesPerView: 3.5,
          spaceBetween: 44,
          initialSlide: initialSlide, // 初期のスライドを指定
          loopedSlides: 4, // カードの数に合わせて設定
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  //page-topボタン
  jQuery(function ($) {
    $(".js-page-top").on("click", function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        500
      );
      return false;
    });
  });
});

//背景→画像のアニメーション[colorbox]
//要素の取得とスピードの設定
var box = $(".colorbox"),
  speed = 700;

//.colorboxの付いた全ての要素に対して下記の処理を行う
box.each(function () {
  $(this).append('<div class="color"></div>');
  var color = $(this).find($(".color")),
    image = $(this).find("img");
  var counter = 0;

  image.css("opacity", "0");
  color.css("width", "0%");
  //inviewを使って背景色が画面に現れたら処理をする
  color.on("inview", function () {
    if (counter == 0) {
      $(this)
        .delay(200)
        .animate({ width: "100%" }, speed, function () {
          image.css("opacity", "1");
          $(this).css({ left: "0", right: "auto" });
          $(this).animate({ width: "0%" }, speed);
        });
      counter = 1;
    }
  });
});
