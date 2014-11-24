Meteor.spotifyAPI = {
	addSongToPlaylist: function (songId, playlistId) {
		// $.ajax({
		// 	type:'POST',
		// 	headers: {
	 //        	'Authorization': 'Bearer ' + "<insert spotify-auth-token",
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
        	'Authorization': 'Bearer ' + "<insert spotify-auth-token>",
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