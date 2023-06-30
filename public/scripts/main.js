$(document).ready(function () {
  console.log("ready!");
  var self = jQuery("#mainMenu");

  // console.log(smartmenus());

  self
    .smartmenus({
      mainMenuSubOffsetX: 0,
      mainMenuSubOffsetY: 0,
      subMenusSubOffsetX: 0,
      subMenusSubOffsetY: -43,
      subMenusMinWidth: "12.5em",
      subIndicatorsText: "",
    })
    .find("li.active")
    .children("a")
    .addClass("active");

  $("#mainMenu").after("");

  // responsive menu
  $(".menu-trigger").on("click", function (e) {
    e.preventDefault();
    if ($(this).hasClass("active")) {
      // when menu close
      $(this).removeClass("active");
      $(".menuContainer").slideUp("slow");
    } else {
      // when menu open
      $(this).addClass("active");
      $(".menuContainer").slideDown("slow");
    }
  });

  // jQuery when resize window
  $(window).on("resize", function () {
    if ($(window).width() > 980 && !$(".menu-trigger").hasClass("active")) {
      self.attr("style", "");
    }
  });
});
