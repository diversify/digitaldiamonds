
// // // // POST "https://api.spotify.com/v1/users/charlottewohlecke/playlists" 
// // // // -H "Accept: application/json" 
// // // // -H "Authorization: Bearer BQDcWu42TWV-gXYeulJsqiRXGk3S5r1pAjToKJq28LGn-bFxFbY25tcmjB1YaIGg4McbKFE7Bw0lZnBSeEWCo5M2gGtBeLTi-BhvDX0xDUhmgozAxCg94YgGKDbYyDx6q13zi2hwhg5tF3-3aXndc7wsP7OdlGJ9Yp1JFLx57aQBI5iY8-639kRS" 
// // // // -H "Content-Type: application/json" 
// // // // --data "{\"name\":\"Meteor.users.GETINLOGGEDTWITTERACCOUNT\",\"public\":true}"
// Meteor.function createList (twitterAccount){
// 	var r = request.post({
//   	url: 'https://api.spotify.com/v1/users/charlottewohlecke/playlists?device_view=true',
//  	headers: {
//     	'Accept': 'application/json',
//     	'Authorization': 'Authorization: Bearer BQDcWu42TWV-gXYeulJsqiRXGk3S5r1pAjToKJq28LGn-bFxFbY25tcmjB1YaIGg4McbKFE7Bw0lZnBSeEWCo5M2gGtBeLTi-BhvDX0xDUhmgozAxCg94YgGKDbYyDx6q13zi2hwhg5tF3-3aXndc7wsP7OdlGJ9Yp1JFLx57aQBI5iY8-639kRS',
//     	'Content-Type': 'application/json' 
//   	}
//   	data:{
//   		name: 'twitterAccount',
//    		public : true
//   	}
// 	});
// 	console.log(r.success);
// 	var resp = 
// 	// var form = r.form();
// 	// form.append('authenticity_token', '{\"name\":\"Meteor.users.GETINLOGGEDTWITTERACCOUNT\",\"public\":true}');
// 	// return 
// }


// //
