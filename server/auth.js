Meteor.startup(function () {
	Accounts.loginServiceConfiguration.remove({
		service: 'twitter'
	});

	Accounts.loginServiceConfiguration.insert({
	  service: 'twitter',
	  consumerKey: 'URDIpyACHqpYblpD1G6OeSL7h',
	  secret: 'th2ua6RzHuiRQvgPcmjAzrakfnN0qNfOfrkV5xi0yeG582aYsG'
	});

});