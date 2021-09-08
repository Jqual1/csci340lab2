$(document).ready(function() {
  $('#clicker').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://randomfox.ca/floof/",
      success: function(results) {
        console.log(results["image"]);
        if (results["image"].endsWith(".mp4")) {
          $('#fox').attr("src", "images/blank.png");
        } else {
          $('#fox').attr("src", results["image"]);
        }
      },
      error: function(xhr,status,error) {
        console.log(error);
      }
    });
    $.ajax({
      dataType: "json",
      url: "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist",
      success: function(results) {
        console.log(results["joke"], results["setup"], results["delivery"]);
        $('#quote').text(results["setup"] + " " + results["delivery"])
        $('#quote').text(results["joke"])
      }
    })
  });
});
