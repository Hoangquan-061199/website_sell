$(document).ready(() => {
  // modal
  $(".myModal").on("shown.bs.modal", () => {
    $(".myInput").focus();
  });

  // btn login register
  $(".modal-login").on("click", () => {
    $(".modal-register").removeClass("check");
    $(".modal-login").addClass("check");
    $(".modal-body-register").removeClass("check");
    $(".modal-body-login").addClass("check");
  });

  $(".modal-register").on("click", () => {
    $(".modal-login").removeClass("check");
    $(".modal-register").addClass("check");
    $(".modal-body-login").removeClass("check");
    $(".modal-body-register").addClass("check");
  });

  // menu btn click hiden show mobile and tablet
  $(".navbar__mobile-category").on("click", () => {
    $(".navbar__list").addClass("active");
    $(".overlay").addClass("active");
  });

  $(".icon-exit").on("click", () => {
    $(".navbar__list").removeClass("active");
    $(".overlay").removeClass("active");
  });

  $(".overlay").on("click", () => {
    $(".navbar__list").removeClass("active");
    $(".overlay").removeClass("active");
  });

  // section products
  // GC MODIF FROM https://codepen.io/onigetoc/pen/zPvLLG
  $(".section__products-title .section__products-title-item").on(
    "click",
    function () {
      $(".section__products-title .section__products-title-item ").removeClass(
        "active"
      );
      $(this).addClass("active");
      // CALL scrollCenter PLUSGIN
      $(".section__products-title").scrollCenter(".active", 300);
    }
  );

  jQuery.fn.scrollCenter = function (elem, speed) {
    // this = #timepicker
    // elem = .active

    var active = jQuery(this).find(elem); // find the active element
    //var activeWidth = active.width(); // get active width
    var activeWidth = active.width() / 2; // get active width center

    //alert(activeWidth)

    //var pos = jQuery('#timepicker .active').position().left; //get left position of active li
    // var pos = jQuery(elem).position().left; //get left position of active li
    //var pos = jQuery(this).find(elem).position().left; //get left position of active li
    var pos = active.position().left + activeWidth; //get left position of active li + center position
    var elpos = jQuery(this).scrollLeft(); // get current scroll position
    var elW = jQuery(this).width(); //get div width
    //var divwidth = jQuery(elem).width(); //get div width
    pos = pos + elpos - elW / 2; // for center position if you want adjust then change this

    jQuery(this).animate(
      {
        scrollLeft: pos,
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };

  // http://podzic.com/wp-content/plugins/podzic/include/js/podzic.js
  jQuery.fn.scrollCenterORI = function (elem, speed) {
    jQuery(this).animate(
      {
        scrollLeft:
          jQuery(this).scrollLeft() -
          jQuery(this).offset().left +
          jQuery(elem).offset().left,
      },
      speed == undefined ? 1000 : speed
    );
    return this;
  };

  $(".section__products-phone").click(() => {
    $(".section__products-phone").addClass("active");
    $(".section__products-content-list-phone").addClass("active");

    $(".section__products-style").removeClass("active");
    $(".section__products-appliances").removeClass("active");
    $(".section__products-content-list-style").removeClass("active");
    $(".section__products-content-list-appliances").removeClass("active");
  });

  $(".section__products-style").click(() => {
    $(".section__products-style").addClass("active");
    $(".section__products-content-list-style").addClass("active");

    $(".section__products-phone").removeClass("active");
    $(".section__products-appliances").removeClass("active");
    $(".section__products-content-list-phone").removeClass("active");
    $(".section__products-content-list-appliances").removeClass("active");
  });

  $(".section__products-appliances").click(() => {
    $(".section__products-appliances").addClass("active");
    $(".section__products-content-list-appliances").addClass("active");

    $(".section__products-phone").removeClass("active");
    $(".section__products-style").removeClass("active");
    $(".section__products-content-list-phone").removeClass("active");
    $(".section__products-content-list-style").removeClass("active");
  });

  // section category

  $(".prev-btn").click(() => {
    var leftPos = $(".section__category-content").scrollLeft();
    $(".section__category-content").animate({ scrollLeft: leftPos - 200 }, 300);
  });

  $(".next-btn").click(() => {
    var leftPos = $(".section__category-content").scrollLeft();
    $(".section__category-content").animate({ scrollLeft: leftPos + 200 }, 300);
  });
});
