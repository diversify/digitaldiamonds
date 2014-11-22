Router.configure({
  layoutTemplate: 'main',
});

Router.map(function() {

	this.route('home', {
		path: '/',
		template:'index'
	});

	this.route('shop', {
		path: '/shop',
		template:'shop',
		data:function () {
			return {example:["exampledata","asd"]};
		}
	});


 });
