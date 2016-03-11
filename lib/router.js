/*Router.configure({
  layoutTemplate: 'layout'
});*/

Router.route('/', function () {
  this.render('home');
},{
	name: 'home'
});

Router.route('/config', function () {
  this.render('config');
},{
	name: 'config'
});

Router.route('/table', function () {
  this.render('table');
},{
	name: 'table'
});

/*Router.route('share/:_id', function(){
	var params = this.params;
	var waiterShared = Waiters.findOne({_id:params._id});

	if(!Session.get("alreadyVisitor")){
		Meteor.call('newWaiterShare', {_id:waiterShared._id}, function(error, result){
			if(result){

			}
		})
	}

	Session.setPersistent("alreadyVisitor", true);

	return Router.go('home');
})*/