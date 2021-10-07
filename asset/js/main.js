// modal
$(".myModal").on("shown.bs.modal", function () {
  $(".myInput").focus();
});

// btn login register
$(".modal-login").on("click", function () {
  $(".modal-register").removeClass("check");
  $(".modal-login").addClass("check");
  $(".modal-body-register").removeClass("check");
  $(".modal-body-login").addClass("check");
});

$(".modal-register").on("click", function () {
  $(".modal-login").removeClass("check");
  $(".modal-register").addClass("check");
  $(".modal-body-login").removeClass("check");
  $(".modal-body-register").addClass("check");
});

// menu btn click hiden show mobile and tablet

$(".navbar__mobile-category").on("click", function () {
  $(".navbar__list").addClass("active");
  $(".overlay").addClass("active");
});

$(".icon-exit").on("click", function () {
  $(".navbar__list").removeClass("active");
  $(".overlay").removeClass("active");
});

$(".overlay").on("click", function () {
  $(".navbar__list").removeClass("active");
  $(".overlay").removeClass("active");
});

// slider
