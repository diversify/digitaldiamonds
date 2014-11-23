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
