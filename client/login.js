Template.login.events({
	'click .loginWithTwitter': function () {
		Meteor.loginWithTwitter(function(err,a,b,c){console.log(err)});
	}
});


function receiveMessage(e){
	if(e.data){
		var data = JSON.parse(e.data);
		console.log(e);
		Session.set("spotifyUser", data);
	}
};


Meteor.functions = {
	auth: function () {
		var CLIENT_ID = '';
		var REDIRECT_URI = '';

		if (location.host == 'localhost:3000') {
			CLIENT_ID =	'a542edc2283346708cb0a4bf214e4798';
			REDIRECT_URI = 'http://localhost:3000/auth';
		} else {
			CLIENT_ID = '1cfa9a116cce4bafaa1249fb22c64e63';
			REDIRECT_URI = 'http://www.theartisthunt.com/auth';
		}

		function getLoginURL(scopes) {
			return 'https://accounts.spotify.com/authorize?client_id=' + CLIENT_ID
				+ '&redirect_uri=' + encodeURIComponent(REDIRECT_URI)
				+ '&scope=' + encodeURIComponent(scopes.join(' '))
				+ '&response_type=token';
		}

		window.addEventListener("message", receiveMessage, false);

		return {
			openLogin: function() {
				var url = getLoginURL([
					'user-library-read',
					'user-library-modify',
					'streaming',
					'playlist-modify-public'

				]);
				// 'user-read-private',
				// 'playlist-read-private',
				// 'playlist-modify-public',
				// 'playlist-modify-private',

				var w = window.open(url, 'Spotify', 'WIDTH=400, HEIGHT=600');

				// window.location = url;
			},
			getAccessToken: function() {
				var expires = 0 + localStorage.getItem('pa_expires', '0');
				if ((new Date()).getTime() > expires) {
					return '';
				}
				var token = localStorage.getItem('pa_token', '');
				return token;
			},
			setAccessToken: function(token, expires_in) {
				localStorage.setItem('pa_token', token);
				localStorage.setItem('pa_expires', (new Date()).getTime() + expires_in);
				// _token = token;
				// _expires = expires_in;
			},
			getUsername: function() {
				var username = localStorage.getItem('pa_username', '');
				return username;
			},
			setUsername: function(username) {
				localStorage.setItem('pa_username', username);
			},
			getUserCountry: function() {
				var userCountry = localStorage.getItem('pa_usercountry', 'US');
				return userCountry;
			},
			setUserCountry: function(userCountry) {
				localStorage.setItem('pa_usercountry', userCountry);
			}
		}
	}
}

Template.spotifyControls.events({
	'click .logIn':function () {
		var l = Meteor.functions.auth();
		l.openLogin();
	}
});