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

/*Template.form_newTable.events({
	'click .btn': function (event) {
		event.preventDefault();
		UI.insert(UI.render(Template.playersSelectable), document.body)
		
	}
});*/

Template.playersSelectable.events({
	'click .btn' : function (event){
		
	}
});

Template.form_newTable.events({
	'click .btn#startTable': function (event) {
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


Template.nav.events({
	'click .btn#open_params' : function (event){
		//redirection vers /config/
		Router.go('config');
	},
	'click .btn#newTableButton' : function (event){
		//redirection vers /table/
		//Router.go('table');
	}
});

Template.config.events({
	'click .btn#close_config' : function (event){
		//redirection vers /config/
		Router.go('home');
	}
});

