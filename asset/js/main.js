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
