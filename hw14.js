var $buttonGreen = $(".green"),
  $body = $('body');

$("<button>")
  .addClass("green button")
  .text("green ")
  .appendTo($body);
$("<button>")
  .addClass("red button")
  .text("red")
  .appendTo($body);
$("<button>")
  .addClass("blue button")
  .text("blue")
  .appendTo($body);


$('.green').on('click', function () {
  $('.button').attr("style", "background: green")
});

$('.red').on('click', function () {
  $('.button').attr("style", "background: red")
});

$('.blue').on('click', function () {
  $('.button').attr("style", "background: blue")
});