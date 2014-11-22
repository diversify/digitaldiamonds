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
});
