/*Meteor.subscribe('playersAvailable');*/

Template.playersAvailable.helpers({
	/*var playersAvailable = Players.find({});
	return playersAvailable;*/

	playersAvailable: function(){
		return Players.find({});
	}
});



Template.form_addingPlayer.events({
	'click .btn': function (event) {
		event.preventDefault();
		var name = $('#name').val();

		Meteor.call('createPlayer', {name: name}, function (error, result) {
			if(result){
				console.log(result);
			}
		});
	}
});