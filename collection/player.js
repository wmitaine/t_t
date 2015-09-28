Players = new Mongo.Collection("players");

Meteor.methods({
	createPlayer: function(player){
		var existedPlayer = Players.findOne(player.name);

		console.log(existedPlayer);

		newPlayer = Players.insert({name: player.name, createdAt : Date.now()}, function(error, result){});

		return newPlayer;

	}
})