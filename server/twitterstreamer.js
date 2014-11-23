
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

	twit.get('/application/rate_limit_status.json', {include_entities:true}, function(data) {
	    console.log(JSON.stringify(data.resources.application));
	});


	var hashtag = 'dqueue';

	twit.stream('statuses/filter', {track:hashtag}, function(stream) {
	  stream.on('data', function(data) {
	    Fiber(function() {
	      // if (!!data.text && !!data.user.screen_name) {
	      if (data) {


	      	var hashtags = data.entities.hashtags; // array

	      	hashtags = _.map(hashtags, function (h) {
	      		return h.text;
	      	});

	      	console.log("2")
	      	if(hashtags.indexOf(hashtag) > -1){

	      		var mentionedUsers = data.entities.user_mentions;

	      		var mentionedUsersHandles = _.map(mentionedUsers, function (user) {
	      			return user.screen_name;
	      		});

	      		var matchedUser = Meteor.users.findOne({'services.twitter.screenName': {$in:mentionedUsersHandles}});

	      		// console.log(matchedUser.profile.playlist);

	      		var urls = _.map(data.entities.urls, function (url) {
	      			return url.expanded_url;
	      		});


	      		console.log(urls);


	      		for (var i = urls.length - 1; i >= 0; i--) {
	      			if( urls[i].indexOf('spotify') > -1){ // found the spotify link
	      				var parts = urls[i].split('/');
	      				console.log(parts);
	      				var songId = parts[parts.length-1];
	      				console.log(songId);


	      				Meteor.spotifyAPI.addSongToPlaylist(songId, matchedUser.profile.playlist.id);
	      				break;
	      			}
	      		};
	      	}



	        // console.log(++c,data);
	        // Tweets.insert({
	        //   data: data
	        // });
	      }
	    }).run();
	  });














	});
});
