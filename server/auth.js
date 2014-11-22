// Meteor.startup(function () {
// 	Accounts.loginServiceConfiguration.remove({
// 		service: 'twitter'
// 	});

// 	Accounts.loginServiceConfiguration.insert({
// 	  service: 'twitter',
// 	  consumerKey: 'URDIpyACHqpYblpD1G6OeSL7h',
// 	  secret: 'th2ua6RzHuiRQvgPcmjAzrakfnN0qNfOfrkV5xi0yeG582aYsG'
// 	});

// });

Meteor.startup(function () {
  var twitter = Meteor.npmRequire('twitter');
  var twit = new twitter({
    consumer_key: '2hYZbXjvfu6Ov0NxHtafIgQwp',
    consumer_secret: 'ZDYB8Q0zyhJc0I58gRMDs43KC9UrmGzZnu6nvveDXC5actHLpn',
    access_token_key: '369748206-pk1y07vbij29ZVQv3yNQQWzeRnTvI56SBDvVWDv7',
    access_token_secret: 'uBELgDzlb9CQicmBNIMdFtQVScPDk4nXU98DEXuE4fwKh'
  });

  var Fiber = Npm.require('fibers');
  var c = 0;

  // twit.get('/application/rate_limit_status.json', {include_entities:true}, function(data) {
  //     console.log(JSON.stringify(data.resources.application));
  // });


  // twit.stream('statuses/filter', {track:"iphone",'language': 'en'}, function(stream) {
  //   stream.on('data', function(data) {
  //     Fiber(function() {
  //       // if (!!data.text && !!data.user.screen_name) {
  //       if (data) {
  //         console.log(++c);
  //         // Tweets.insert({
  //         //   data: data
  //         // });
  //       }
  //     }).run();
  //   });
  // });
  
  // code to run on server at startup
});