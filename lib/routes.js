if (Meteor.isClient) {//This code checks for login and logout using the gwendall:auth-client-callbacks package within the client side code
	
	Accounts.onLogin(function() {
		FlowRouter.go('users');//redirect to recipe-book on login
	});


	Accounts.onLogout(function() {
		FlowRouter.go('home');//redirect to home on logout
	});
}

FlowRouter.triggers.enter([function(context, redirect){ //we restringe access  if user is not logged in
	if(!Meteor.userId()) {
		FlowRouter.go('home'); //if user is not logged in, redirect home
	}
}]);


FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});


FlowRouter.route('/users', {
	name: 'users',
    waitOn: function() {
        return Meteor.subscribe('userList');
    },
    data: function() {
        return Meteor.users.find({});       
    },
	action() {
		BlazeLayout.render('MainLayout', {main: 'Users'})
	}
});

FlowRouter.route('/profile', {
	name: 'profile',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Profile'})
	}
});

FlowRouter.route('/map', {
	name: 'map',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Map'})
	}
});