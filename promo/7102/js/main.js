var scrollCount = 0;

window.onload = function () {
  var s = $("html"),
    e = $(".preloader"),
    a = $(".curr_lang"),
    l = localStorage.lang || "no",
    o = [
      "en",
      "de",
      "ru",
      "pl",
      "no",
      "dk",
      "cz",
      "ro",
      "ee",
      "lv",
      "lt",
      "el",
      "hu",
      "jp",
      "pt",
      "es",
    ],
    n = new URLSearchParams(window.location.search).get("lang"),
    t = (
      new URLSearchParams(window.location.search).get("cc") || ""
    ).toLowerCase(),
    r = new URLSearchParams(window.location.search).get("pop"),
    d = $(".popup_overlay"),
    c = $("#popup_window_1"),
    u = $("#popup_window_2"),
    p = $("#popup_window_3"),
    m = $("#popup_window_4");
  "on" === r && (c.fadeIn(), d.fadeIn()),
    ("en" !== l && "en" !== n && l) ||
      (s
        .addClass("en")
        .removeClass("pl de no dk cz ro ee lv lt el hu jp pt es ru"),
      (l = "en")),
    ("ru" !== l && "ru" !== n && l) ||
      (s
        .addClass("ru")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp pt es"),
      (l = "ru")),
    ("pl" !== l && "pl" !== n) ||
      (s
        .addClass("pl")
        .removeClass("en de no dk cz ro ee lv lt el hu jp pt es ru"),
      (l = "pl")),
    ("de" !== l && "de" !== n) ||
      (s
        .addClass("de")
        .removeClass("en pl no dk cz ro ee lv lt el hu jp pt es ru"),
      (l = "de")),
    ("no" !== l && "no" !== n) ||
      (s
        .addClass("no")
        .removeClass("en pl de dk cz ro ee lv lt el hu jp pt es ru"),
      (l = "no")),
    ("dk" !== l && "dk" !== n) ||
      (s
        .addClass("dk")
        .removeClass("en pl de no cz ro ee lv lt el hu jp pt es ru"),
      (l = "dk")),
    ("cz" !== l && "cz" !== n) ||
      (s
        .addClass("cz")
        .removeClass("en pl de no dk ro ee lv lt el hu jp pt es ru"),
      (l = "cz")),
    ("ro" !== l && "ro" !== n) ||
      (s
        .addClass("ro")
        .removeClass("en pl de no dk cz ee lv lt el hu jp pt es ru"),
      (l = "ro")),
    ("ee" !== l && "ee" !== n) ||
      (s
        .addClass("ee")
        .removeClass("en pl de no dk cz ro lv lt el hu jp pt es ru"),
      (l = "ee")),
    ("lv" !== l && "lv" !== n) ||
      (s
        .addClass("lv")
        .removeClass("en pl de no dk cz ro ee lt el hu jp pt es ru"),
      (l = "lv")),
    ("lt" !== l && "lt" !== n) ||
      (s
        .addClass("lt")
        .removeClass("en pl de no dk cz ro ee lv el hu jp pt es ru"),
      (l = "lt")),
    ("el" !== l && "el" !== n) ||
      (s
        .addClass("el")
        .removeClass("en pl de no dk cz ro ee lv lt hu jp pt es ru"),
      (l = "el")),
    ("hu" !== l && "hu" !== n) ||
      (s
        .addClass("hu")
        .removeClass("en pl de no dk cz ro ee lv lt el jp pt es ru"),
      (l = "hu")),
    ("jp" !== l && "jp" !== n) ||
      (s
        .addClass("jp")
        .removeClass("en pl de no dk cz ro ee lv lt el hu pt es ru"),
      (l = "jp")),
    ("pt" !== l && "pt" !== n) ||
      (s
        .addClass("pt")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp es ru"),
      (l = "pt")),
    ("es" !== l && "es" !== n) ||
      (s
        .addClass("es")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp pt ru"),
      (l = "es")),
    "cl" === t &&
      "es" === l &&
      s
        .addClass("es cur_cl")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp pt ru"),
    "ar" === t &&
      "es" === l &&
      s
        .addClass("es cur_ar")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp pt ru"),
    "pe" === t &&
      "es" === l &&
      s
        .addClass("es cur_pe")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp pt ru"),
    "br" === t &&
      "pt" === l &&
      s
        .addClass("es cur_brl")
        .removeClass("en pl de no dk cz ro ee lv lt el hu jp pt ru");
  for (var _ = 0, i = 0; i < o.length; i++) l === o[i] && (_ = 1);
  0 === _ && (s.addClass("en"), (l = "en")),
    o.forEach(function (e) {
      s.removeClass(e).addClass(l);
    }),
    $('.lang_list_item[data-lang="' + l + '"]')
      .addClass("curr")
      .siblings()
      .removeClass("curr"),
    a.html($('.lang_list_item[data-lang="' + l + '"]').html()),
    setTimeout(function () {
      e.fadeOut(),
        setTimeout(function () {
          s.addClass("hide");
        }, 200);
    }, 200);

  var h = $(".wheel_btn"),
    C = $(".wheel_spinner"),
    n = $(".number"),
    n1 = $(".number1");

  h.click(function () {
    if (h.hasClass("spin")) {
      h.removeClass("spin").addClass("disabled");
      if (scrollCount == 0) {
        C.addClass("wheel_spinner_animated_1").removeClass(
          "wheel_spinner_animated"
        );
      }
      if (scrollCount == 1) {
        C.addClass("wheel_spinner_animated_2").removeClass(
          "wheel_spinner_animated"
        );
      }

      setTimeout(function () {
        scrollCount++;
        n[0].innerText = 2 - scrollCount;
        n1[0].innerText = 2 - scrollCount;
        if (scrollCount >= 2) {
          $(".bonus_1").fadeIn();
          // localStorage.currentSpin = "7102_spin";
          d.fadeIn();
          m.fadeIn();
          // $("#game_1").css("display", "none");
          // $("#game_2").css("display", "block");
          $(".bonus_1").fadeIn();
          c.css("display", "none");
        } else {
          d.fadeIn();
          u.fadeIn();
        }
      }, 4500);
    }
  });

  "7102_spin" === localStorage.currentSpin &&
    ($(".bonus_1").fadeIn(),
    d.fadeIn(),
    u.fadeIn(),
    C.removeClass("wheel_spinner_animated").css("transform", "rotate(720deg)"),
    h.removeClass("spin").addClass("disabled")),
    "7102_game_2" === localStorage.is_game_2 &&
      (d.fadeIn(),
      u.fadeIn(),
      $("#game_1").css("display", "none"),
      $("#game_2").css("display", "block"),
      $(".bonus_1").fadeIn(),
      c.css("display", "none")),
    "7102_true" === localStorage.pre_final_step &&
      (c.css("display", "none"),
      u.css("display", "none"),
      d.css("display", "none"),
      $("#game_1").css("display", "none"),
      $("#game_2").css("display", "block"),
      $(".bonus_1").fadeIn()),
    "7102_true" === localStorage.final_step &&
      ((localStorage.is_game_2 = ""),
      (localStorage.currentSpin = ""),
      d.fadeIn(),
      p.fadeIn(),
      c.css("display", "none"),
      u.css("display", "none"),
      $("#game_1").css("display", "none"),
      $("#game_2").css("display", "block"),
      $(".bonus_1").fadeIn(),
      $(".bonus_2").fadeIn()),
    "true" === localStorage.scratch_1_bonus_7102 &&
      $("#scratch_1")
        .addClass("used")
        .siblings()
        .addClass("scratch_outer_second_bonus"),
    "true" === localStorage.scratch_2_bonus_7102 &&
      $("#scratch_2")
        .addClass("used")
        .siblings()
        .addClass("scratch_outer_second_bonus"),
    "true" === localStorage.scratch_3_bonus_7102 &&
      $("#scratch_3")
        .addClass("used")
        .siblings()
        .addClass("scratch_outer_second_bonus"),
    "true" === localStorage.scratch_4_bonus_7102 &&
      $("#scratch_4")
        .addClass("used")
        .siblings()
        .addClass("scratch_outer_second_bonus");
};

$(document).ready(function () {
  var clickedCards = [];
  let cardId = $(this).attr("id");
  var s = $(".lang_switcher"),
    a = $(".lang_list"),
    e = $(".lang_list_item"),
    l = $("html"),
    o = $(".preloader"),
    n = $(".curr_lang"),
    t = $(".popup_overlay"),
    r = $("#popup_window_1"),
    d = $("#popup_window_2"),
    c = $("#popup_window_3"),
    m = $("#popup_window_4"),
    h = $(".wheel_btn"),
    C = $(".wheel_spinner");
  s.click(function () {
    a.toggleClass("act");
  }),
    e.click(function () {
      o.fadeIn(),
        l.removeClass("hide"),
        setTimeout(function () {
          o.fadeOut(), l.addClass("hide");
        }, 200);
      var e = $(this).data("lang"),
        s = $(".lang_list_item")
          .map(function (e, s) {
            return $(s).data("lang");
          })
          .toArray()
          .join(" ");
      l.removeClass(s).addClass(e),
        (localStorage.lang = e),
        $('.lang_list_item[data-lang="' + e + '"]')
          .addClass("curr")
          .siblings()
          .removeClass("curr"),
        n.html($(this).html());
    }),
    $(document).mouseup(function (e) {
      s.is(e.target) || 0 !== s.has(e.target).length || a.removeClass("act");
    }),
    $("#popup_btn_1").click(function () {
      r.fadeOut(), t.fadeOut();
    }),
    $("#popup_btn_2").click(function () {
      d.fadeOut(), t.fadeOut(), $("#popup_window_2").fadeOut();
      h.addClass("spin").removeClass("disabled");

      C.addClass("wheel_spinner_animated").removeClass(
        "wheel_spinner_animated_1"
      );
    }),
    $("#popup_btn_4").click(function () {
      d.fadeOut(), t.fadeOut(), $("#popup_window_4").fadeOut();

      $("#game_1").css("display", "none"),
        $("#game_2").css("display", "block"),
        (localStorage.is_game_2 = "7102_game_2");
      localStorage.currentSpin = "7102_spin";
    }),
    $(".scratch_outer").mouseenter(function () {
      $(this).addClass("scratch_outer_hover");
    }),
    $(".scratch_outer").mouseleave(function () {
      $(this).removeClass("scratch_outer_hover"),
        $(this).find(".scratch_hover").addClass("scratch_hover_mouseleave");
    }),
    $(".scratch_outer").click(function () {
      let scratchBonus = $(this).find(".scratch_bonus img");
      let scratchTxt = $(this).find(".scratch_txt img");
      if (!localStorage.lang || localStorage.lang === "no") {
        if (clickedCards.includes(cardId)) {
          scratchBonus.attr("src", "../promo/7102/img/after-scratch/1400.png");
          
        } else {
          //
          scratchBonus.attr("src", "../promo/7102/img/after-scratch/250.png");
          
          clickedCards.push(cardId);
        }
      } else {
        $(this).find(".default").css("display", "none");
      }
      $(this).addClass("scratch_outer_action_1");
      var e =
        $(this).find(".scratch_action").attr("src") + "?a=" + Math.random();
      $(this).find(".scratch_action").attr("src", e),
        r.css("display", "none"),
        d.css("display", "none"),
        (localStorage.is_game_2 = ""),
        (localStorage.currentSpin = ""),
        (localStorage.pre_final_step = "7102_true"),
        $(this).siblings().addClass("scratch_outer_second_bonus"),
        $(this).hasClass("scratch_outer_second_bonus") &&
          ($(this)
            .css("pointer-events", "none")
            .siblings()
            .css("pointer-events", "none"),
          setTimeout(function () {
            $(".bonus_2").fadeIn(), t.fadeIn(), c.fadeIn();
          }, 1500),
          (localStorage.final_step = "7102_true"));
    }),
    $("#scratch_1").click(function () {
      localStorage.scratch_1_bonus_7102 = "true";
    }),
    $("#scratch_2").click(function () {
      localStorage.scratch_2_bonus_7102 = "true";
    }),
    $("#scratch_3").click(function () {
      localStorage.scratch_3_bonus_7102 = "true";
    }),
    $("#scratch_4").click(function () {
      localStorage.scratch_4_bonus_7102 = "true";
    });
});
