var topic = ["Darth Vader", 
"Chuck Norris", 
"Batman", 
"The Power Rangers", 
"Godzilla",
"Indiana Jones",
"Wonder Woman",
"Abraham Lincoln",
"Charizard"];
var battleArray = [""];
var firstFighter = 0;
var secondFighter= 0;

// create buttons
for (var i=0; i<topic.length; i++) {
    var button = $("<button>");
    button.attr("data-person", topic[i]);
    button.text(topic[i]);
    $("#buttons-div").append(button);
};

$("button").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      person + "&api_key=SxgQtpHMCv3gvMIkC1Yrt5whcQt0vVVV&limit=10";
    
    if (firstFighter===0){
    firstFighter = person
      $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
    
        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div class='item'>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);
        
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#character-1").prepend(gifDiv);
        }
      });
    }
    else if (firstFighter != 0 && secondFighter === 0) {
            secondFighter = person
              $.ajax({
              url: queryURL,
              method: "GET"
            })
              .then(function(response) {
                var results = response.data;
            
                for (var i = 0; i < results.length; i++) {
                  var gifDiv = $("<div class='item'>");
        
                  var rating = results[i].rating;
        
                  var p = $("<p>").text("Rating: " + rating);
        
                  var personImage = $("<img>");
                  personImage.attr("src", results[i].images.fixed_height.url);
                
                  gifDiv.prepend(p);
                  gifDiv.prepend(personImage);
        
                  $("#character-2").prepend(gifDiv);
                }
              });
            }
  });