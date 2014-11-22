Template.login.events({
	'click .loginWithTwitter': function () {
		Meteor.loginWithTwitter(function(err,a,b,c){console.log(err)});
	}
});