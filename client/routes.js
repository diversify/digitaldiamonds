Router.configure({
  layoutTemplate: 'main'
});

Router.map(function() {

	this.route('home', {
		path: '/',
		template:'index'
	});

	this.route('shop', {
		path: '/:shop',
        onBeforeAction: function() {
            if(!Meteor.user()) {
                Router.go('home'); // you are drunk
            }
            this.next();
        },
		template:'shop',
		data:function () {
			return {
                currentSongs: PlaylistsCollection.find(),
                shop: this.params.shop
            };
		}
	});

	this.route('auth', {
		path: '/auth',
		action: function () {
			var hash = {};
			location.hash.replace(/^#\/?/, '').split('&').forEach(function(kv) {
				var spl = kv.indexOf('=');
				if (spl != -1) {
					hash[kv.substring(0, spl)] = decodeURIComponent(kv.substring(spl+1));
				}
			});

			if (hash.access_token) {
				window.opener.postMessage(JSON.stringify({
					type:'access_token',
					access_token: hash.access_token,
					expires_in: hash.expires_in || 0
				}), '*');

				window.close();
			}
		}
	});



 // });
});


Meteor.spotifyAPI = {
	createList: function () {
			if(Meteor.user()){
			$.ajax({
				type:'POST',
				headers: {
		        	'Authorization': 'Bearer ' + "BQDU6NUwh0wr8zyp0q0s1IkYAWyVtPozooGC4e9gUUwa1k-YK8Vy-o15U4YFIEGBqhX0vZ4OKDDyfJfK30Es535zU_shPmVE6Bzl4g47k3jQyHUwp4SgEhZXqZET7QCtmTcxRnH2arjMoccP5L5t6xXXQ2fjJJCOQ4dsBg1r5xrHfmyY8_yQYpoH",
					'Content-Type': 'application/json',
					'Accept': 'application/json'
		    	},
		    	data: '{"name":"'+Meteor.user().services.twitter.screenName+'","public": "true"}',
				url: 'https://api.spotify.com/v1/users/charlottewohlecke/playlists',
				success: function (response) {
					alert('never happens');
					console.log(response);

					Meteor.users.update(
						{
							_id:Meteor.user()._id
						}, {
							$set:{'profile.playlist': response.external_urls.spotify}

						}
					);
				}
			});
		}
	}
};