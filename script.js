$(document).ready(function () {
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
});
