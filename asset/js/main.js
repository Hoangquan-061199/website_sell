$(document).ready(() => {
  // modal
  $(".myModal").on("shown.bs.modal", () => {
    $(".myInput").focus();
  });

  // btn login register
  $(".modal-login").click(() => {
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
    var active = jQuery(this).find(elem);
    var activeWidth = active.width() / 2;

    var pos = active.position().left + activeWidth;
    var elpos = jQuery(this).scrollLeft(); // get current scroll position
    var elW = jQuery(this).width(); //get div width
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

  $(".section__category-btn .prev-btn").click(() => {
    let leftPos = $(".section__category-content").scrollLeft();
    $(".section__category-content").animate({ scrollLeft: leftPos - 200 }, 300);
  });

  $(".section__category-btn .next-btn").click(() => {
    let leftPos = $(".section__category-content").scrollLeft();
    $(".section__category-content").animate({ scrollLeft: leftPos + 200 }, 300);
  });

  // section product
  $(".product__phone-btn .prev-btn").click(() => {
    let leftPos = $(".section__products-content-phone").scrollLeft();
    $(".section__products-content-phone").animate(
      { scrollLeft: leftPos - 200 },
      300
    );
  });

  $(".product__phone-btn .next-btn").click(() => {
    let leftPos = $(".section__products-content-phone").scrollLeft();
    $(".section__products-content-phone").animate(
      { scrollLeft: leftPos + 200 },
      300
    );
  });

  $(".product__style-btn .prev-btn").click(() => {
    let leftPos = $(".section__products-content-style").scrollLeft();
    $(".section__products-content-style").animate(
      { scrollLeft: leftPos - 200 },
      300
    );
  });

  $(".product__style-btn .next-btn").click(() => {
    let leftPos = $(".section__products-content-style").scrollLeft();
    $(".section__products-content-style").animate(
      { scrollLeft: leftPos + 200 },
      300
    );
  });

  $(".product__appliances-btn .prev-btn").click(() => {
    let leftPos = $(".section__products-content-appliances").scrollLeft();
    $(".section__products-content-appliances").animate(
      { scrollLeft: leftPos - 200 },
      300
    );
  });

  $(".product__appliances-btn .next-btn").click(() => {
    let leftPos = $(".section__products-content-appliances").scrollLeft();
    $(".section__products-content-appliances").animate(
      { scrollLeft: leftPos + 200 },
      300
    );
  });

  // suggest today
  $(".prev-suggest-btn").click(() => {
    let leftPos = $(".section__suggest-products").scrollLeft();
    $(".section__suggest-products").animate({ scrollLeft: leftPos - 200 }, 300);
  });

  $(".next-suggest-btn").click(() => {
    let leftPos = $(".section__suggest-products").scrollLeft();
    $(".section__suggest-products").animate({ scrollLeft: leftPos + 200 }, 300);
  });
});
