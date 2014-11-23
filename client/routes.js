Router.configure({
  layoutTemplate: 'main'
});

Router.map(function() {

    this.route('home', {
		path: '/',
		template:'index'
	});

    this.route('admin', {
        path: '/:shop/admin',
        template: 'admin',
        onAfterAction: function() {
            if(!Meteor.user()) {
                Router.go('shop', { shop: this.params.shop }); // you are drunk
            }
        },
        data: function() {
            return {
                currentSongs: PlaylistsCollection.find(),
                shop: ShopsCollection.findOne({
                    name: this.params.shop
                })
            };
        }
    });

	this.route('shop', {
		path: '/:shop',
        template:'shop',
        onAfterAction: function() {
            if(Meteor.user()) {
                Router.go('admin', { shop: this.params.shop });
            }
        },
        data:function () {
			return {
                currentSongs: PlaylistsCollection.find(),
                shop: this.params.shop
            };
		}
	});
});