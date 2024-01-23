"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    var mv_swiper = new Swiper(".js-mv-swiper", {
      loop: true,
      speed: 1000,
      effect: "fade",
      fadeEffect: {
        crossFade: true
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      }
    });
  });

  //Campaign swiper
  jQuery(function ($) {
    var _Swiper;
    var initialSlide = 0; // 初期のスライドを設定

    var campaign_swiper = new Swiper(".js-campaign-swiper", (_Swiper = {
      loop: true,
      speed: 1000,
      slidesPerView: 1.22,
      spaceBetween: 24,
      loopedSlides: 4,
      // カードの数に合わせて設定
      centeredSlides: false,
      // 中央寄せを無効化
      initialSlide: initialSlide,
      // 初期のスライドを指定
      autoplay: {
        delay: 200000000,
        disableOnInteraction: false
      }
    }, _defineProperty(_Swiper, "initialSlide", initialSlide), _defineProperty(_Swiper, "breakpoints", {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 44,
        initialSlide: initialSlide,
        // 初期のスライドを指定
        loopedSlides: 4 // カードの数に合わせて設定
      }
    }), _defineProperty(_Swiper, "navigation", {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }), _Swiper));
  });

  //page-topボタン
  jQuery(function ($) {
    $(".js-page-top").on("click", function () {
      $("body,html").animate({
        scrollTop: 0
      }, 500);
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
      $(this).delay(200).animate({
        width: "100%"
      }, speed, function () {
        image.css("opacity", "1");
        $(this).css({
          left: "0",
          right: "auto"
        });
        $(this).animate({
          width: "0%"
        }, speed);
      });
      counter = 1;
    }
  });
});