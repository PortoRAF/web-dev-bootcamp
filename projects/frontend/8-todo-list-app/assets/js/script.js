// Check off completed tasks
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// Delete tasks from list
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

// Insert new task to list
$("input[type='text']").keypress(function (event) {
  // When enter key is pressed
  if (event.which === 13 && $(this).val() !== "") {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>"
    );
  }
});

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
