/*Meteor.subscribe('playersAvailable');*/

Template.playersAvailable.helpers({
	/*var playersAvailable = Players.find({});
	return playersAvailable;*/

	playersAvailable: function(){
		return Players.find({});
	}
});

Template.playersSelectable.helpers({
	/*var playersAvailable = Players.find({});
	return playersAvailable;*/

	playersSelectable: function(){
		return Players.find({});
	}
});




Template.form_addingPlayer.events({
	'click .btn': function (event) {
		event.preventDefault();
		var name = $('#name').val();

		Meteor.call('createPlayer', {name: name}, function (error, result) {
			if(result){
				$('#name').val('');
				console.log(result);
			}
		});
	}
});

Template.form_addingTable.events({
	'click .btn': function (event) {
		event.preventDefault();
		UI.insert(UI.render(Template.playersSelectable), document.body)
		//UI.insert(UI.renderWithData(Template.playersSelectable, {bar: "baz"}), document.body)
	}
});