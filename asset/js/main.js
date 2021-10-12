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
  $(".section__products-phone").click(() => {
    $(this).addClass("active");
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
  const item = $(".section__category-item");

  $(".prev-btn").click(() => {
    console.log("prev");
  });

  $(".next-btn").click(() => {
    console.log("next");
  });
});
