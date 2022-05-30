$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: "https://cat-fact.herokuapp.com/facts",
    success: function (data) {
      let factContainer;
      data.forEach((fact, index) => {
        factContainer = $(`#fact-${index + 1}`);
        factContainer.text(fact.text);
      }, this);
    },
    error: function (error) {
      $("#error-text").text(error.message);
      console.error(error);
    },
  });
});
