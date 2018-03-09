var topic = ["Darth Vader", 
"Chuck Norris", 
"Captain America", 
"The Power Rangers", 
"Godzilla",
"Indiana Jones",
"Wonder Woman",
"Abraham Lincoln",
"Shrek",
"Charizard",
"Papa John",
"Optimus Prime"];

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
          personImage.attr("src", results[i].images.fixed_height_still.url);
          personImage.attr("data-state", "still");
          personImage.attr("class", "gif");
          personImage.attr("data-still", results[i].images.fixed_height_still.url);
              personImage.attr("data-animate", results[i].images.fixed_height.url);
          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#character-1").prepend(gifDiv);
          //play and pause
          $(".gif").on("click", function() {

            var state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });    
        }
      
    });
    }
    //create second fighter
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
              personImage.attr("src", results[i].images.fixed_height_still.url);
              personImage.attr("data-state", "still");
              personImage.attr("class", "gif");
              personImage.attr("data-still", results[i].images.fixed_height_still.url);
              personImage.attr("data-animate", results[i].images.fixed_height.url);
              gifDiv.prepend(p);
              gifDiv.prepend(personImage);
                    
              $("#character-2").prepend(gifDiv);
                //play and pause
              $(".gif").on("click", function() {

                var state = $(this).attr("data-state");
                if (state === "still") {
                  $(this).attr("src", $(this).attr("data-animate"));
                  $(this).attr("data-state", "animate");
                } else {
                  $(this).attr("src", $(this).attr("data-still"));
                  $(this).attr("data-state", "still");
                }
              });   
            }  
            //winner function
            if (firstFighter > secondFighter) {
                var firstWin = $("<h2>");
                firstWin.text("Winner: " + firstFighter );
                $("#winner").append(firstWin);
            }
            else if (firstFighter < secondFighter) {
                var secondWin = $("<h2>");
                secondWin.text("Winner: " + secondFighter);
                $("#winner").append(secondWin);
            }
            else if (firstFighter === secondFighter) {
                var tie = $("<h2>");
                tie.text("Tie!!");
                $("#winner").append(tie);
            }
        })
        
    };   
      
});


    