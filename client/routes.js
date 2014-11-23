Router.configure({
  layoutTemplate: 'main'
});

Router.map(function() {

    this.route('home', {
        path: '/',
        template: 'index'
    });

    this.route('admin', {
        path: '/:shop/admin',
        template: 'admin',
        onAfterAction: function () {
            if (!Meteor.user()) {
                Router.go('shop', { shop: this.params.shop }); // you are drunk
            }
        },
        data: function () {
        	var s = ShopsCollection.findOne();
        	if(s){
	            return {
	                currentSongs: PlaylistsCollection.find(),
	                shop: s
	            };
        	}
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

    this.route('shop', {
        path: '/:shop',
        template: 'shop',
        onAfterAction: function () {
            if (Meteor.user()) {
                Router.go('admin', { shop: this.params.shop });
            }
        },
        data: function () {
            return {
                currentSongs: PlaylistsCollection.find(),
                shop: this.params.shop
            };
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
		        	'Authorization': 'Bearer ' + "BQAKKlJVfwX5EkA-QQzfh0YAj6G4ugZbNs6HdFzy5fdoP4K1pkwlJehNwvtfxHQeJi-hmD06SxsMBGmyns5ZDcW2_s15rZDMZkk5SjYKThvbUVrVQzORDjI7ndmlahLKubwHbVAwYU-xWX1M2zKQluLHTV9bWbftdJUiqD1Na3q44ymhjKrmF148",
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
							$set:{'profile.playlist': response}

						}
					);
				}
			});
		}
	}
};
