// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    // var newDevoured = $(this).data("newDevoured");


    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true
    }).then(
      function () {
        console.log("changed devoured to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".delete").on("click", function (event) {
    var id = $(this).data("id");
    // var newDevoured = $(this).data("newDevoured");



    $.ajax("/api/delBurgers/" + id, {
      type: "DELETE",
      data: true
    }).then(
      function () {
        console.log("deleted------------------------", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let name = $("#bn").val().trim()
    if (name.length > 2) {
      var newBurger = {
        burger_name: name

      };

      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    }else{
      alert(`invalid name!`)
    }
  });
});