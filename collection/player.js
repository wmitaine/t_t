Players = new Mongo.Collection("players");

Meteor.methods({
	createPlayer: function(player){
		var existedPlayer = Players.findOne({name : player.name});

		console.log(existedPlayer._id);
		if(existedPlayer._id){
			console.log(player.name + " existe déjà.");
			return false;
		}else{
			newPlayer = Players.insert({name: player.name, createdAt : Date.now()}, function(error, result){});
			if(newPlayer._id){
				console.log(newPlayer.name + " est bien crée.");
				return true;
			}else{
				console.log("Une erreur est survenue à la création du joueur");
				return false;
			}
		}
	}
})