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
		
	}
});

Template.playersSelectable.events({
	'click .btn': function (event) {
		event.preventDefault();
		var nbPlayer = $('#playersList option:selected').length;

		if(nbPlayer < 3 || nbPlayer > 5){
			alert('Il ne peut y avoir que 3, 4 ou 5 joueurs');
		}else{
			$('#playersList option:selected').each(function(){
				console.log($(this).val());
			});
		}
	}
});