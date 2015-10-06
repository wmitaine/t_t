Players = new Mongo.Collection("players");

Meteor.methods({
	createPlayer: function(player){
		var existedPlayer = Players.findOne({"name":player.name});

		if(existedPlayer){
			console.log(player.name + " existe déjà.");
			return false;
		}else{
			newPlayer = Players.insert({"name": player.name, "createdAt" : Date.now()}, function(error, result){});
			if(newPlayer){
				return true;
			}else{
				return false;
			}
		}
	}
})