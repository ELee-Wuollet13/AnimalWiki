$(document).ready(function() {
  $("form#index").submit(function(event) {
    event.preventDefault();
    var animal = $("#animal").val();
    $(".lion, .tiger, .bear, .snake").hide();
    console.log(animal);
    if (animal === "Lion") {
      $(".lion").show()
    } else if (animal === "Tiger") {
      $(".tiger").show()
    } else if (animal === "Bear") {
      $(".bear").show()
    } else if (animal === "Snake") {
      $(".snake").show()
    } else {
      alert("Please select an animal")
    }
  });
});
