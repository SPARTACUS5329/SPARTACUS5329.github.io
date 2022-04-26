$(document).ready(function () {
  // console.log((document.querySelector("textarea").style.fontSize = "10000px"));
  var fontSize = 30;
  $("form").on("submit", function () {
    var input = $("#new-item");
    var todo = { item: input.val() };
    console.log(todo);
    var divId = todo.item.split(" ").join("_");
    var liElement = `<div id = "${divId}"><li>${todo.item}</li></div>`;
    input.val("");
    $("#todo-list").append(liElement);
    $(`#${divId} li`).on("click", function () {
      var divId = $(this).text().split(" ").join("_");
      $(`#${divId}`).remove();
    });
    return false;
  });

  $("#reduce-font").click(function () {
    fontSize = Math.max(fontSize - 3, 3);
    document.querySelector("textarea").style.fontSize = `${fontSize}px`;
  });
  $("#increase-font").click(function () {
    fontSize = Math.min(fontSize + 3, 60);
    document.querySelector("textarea").style.fontSize = `${fontSize}px`;
  });
});
