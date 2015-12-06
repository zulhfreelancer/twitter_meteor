Template.profile.events({
	"submit .edit-profile": function(event){
		// grab the submitted file
		// .get(0) 		= the first field 
		// .files[0]	= the first file
		var file = $("#profileImage").get(0).files[0];
		
		// if we get the file
		if (file) {
			// create uploader object
			fsFile = new FS.File(file);

			// upload the image file to ProfileImages collection
			ProfileImages.insert(fsFile, function(error, result){
				if (error) {
					throw new Meteor.Error(error)
				} else {
					var imageLocation = '/cfs/files/ProfileImages/' + result._id;

					// upload the image data and image path to UserImages collection
					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLocation
					});

					// redirect to home after image is saved
					Router.go('/');
				}
			})
		}

		return false; // prevent form default
	}
});