Meteor.spotifyAPI = {
	addSongToPlaylist: function (songId, playlistId) {
		// $.ajax({
		// 	type:'POST',
		// 	headers: {
	 //        	'Authorization': 'Bearer ' + "BQAKKlJVfwX5EkA-QQzfh0YAj6G4ugZbNs6HdFzy5fdoP4K1pkwlJehNwvtfxHQeJi-hmD06SxsMBGmyns5ZDcW2_s15rZDMZkk5SjYKThvbUVrVQzORDjI7ndmlahLKubwHbVAwYU-xWX1M2zKQluLHTV9bWbftdJUiqD1Na3q44ymhjKrmF148",
		// 		'Content-Type': 'application/json',
		// 		'Accept': 'application/json'
	 //    	},

		// 	url: "https://api.spotify.com/v1/users/charlottewohlecke/playlists/"+playlistId+"/tracks?uris=spotify:track:"+songId,
		// 	success: function (response) {
		// 		console.log(response);

		// 		Meteor.users.update(
		// 			{
		// 				_id:Meteor.user()._id
		// 			}, {
		// 				$set:{'profile.playlist': response}

		// 			}
		// 		);
		// 	}
		// });


		var header = {
        	'Authorization': 'Bearer ' + "BQAKKlJVfwX5EkA-QQzfh0YAj6G4ugZbNs6HdFzy5fdoP4K1pkwlJehNwvtfxHQeJi-hmD06SxsMBGmyns5ZDcW2_s15rZDMZkk5SjYKThvbUVrVQzORDjI7ndmlahLKubwHbVAwYU-xWX1M2zKQluLHTV9bWbftdJUiqD1Na3q44ymhjKrmF148",
			'Content-Type': 'application/json',
			'Accept': 'application/json'
    	}


		Meteor.http.post("https://api.spotify.com/v1/users/charlottewohlecke/playlists/"+playlistId+"/tracks?uris=spotify:track:"+songId,
			{headers: header},
			function(err, result) {
				if (!err){
		    		// do something with the result.
				}
			}
		);
	}
}