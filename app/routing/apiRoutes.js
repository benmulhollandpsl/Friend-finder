
var friends = require("../data/friends");


module.exports = function(app) {
  

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  

  app.post("/api/friends", function(req, res) {
    
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    // Here we take the result of the user"s survey POST and parse it.
    var userData = req.body;
    var userScores = userData.scores;

    // This variable will calculate the difference between the users scores and the scores of
    // each user in the database
    var totalDifference;

    //  loop through all database entries
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      //  loop throug all scores 
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];



        // We calculate the difference 

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }



      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

    // save the user's data to the database 
    friends.push(userData);

    
    // Return a JSON with user's best match.
    res.json(bestMatch);
  });
};
