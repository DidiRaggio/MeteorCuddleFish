Meteor.subscribe("Users");


Accounts.ui.config({
	passwordSignupFields:  "USERNAME_AND_OPTIONAL_EMAIL"
});

Meteor.publish('userList', function (){ 
  return Meteor.users.find({});
});

