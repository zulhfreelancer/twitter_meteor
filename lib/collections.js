// profile images collection
ProfileImages = new FS.Collection('ProfileImages', {
	stores: [new FS.Store.GridFS('ProfileImages')]
});

// after we remove insecure package, we need these methods for user avatar
ProfileImages.allow({
	// add avatar
	insert: function(userId, doc){
		return true;
	},
	// edit avatar
	update: function(userId, doc, fields, modifier){
		return true;
	},
	// display avatar
	download: function(){
		return true;
	}
});

UserImages = new Mongo.Collection('UserImages');

Posts = new Mongo.Collection('posts');

// attach schema to Posts
Posts.attachSchema(new SimpleSchema({
	body: {
		type		: String,
		max			: 500
	},
	userId: {
		type		: String,
		autoValue 	: function(){
						return Meteor.userId()
					  }
	},
	username: {
		type		: String,
		autoValue 	: function(){
						return Meteor.users.findOne({_id: this.userId}).username
					  }
	},
	createdAt: {
		type		: Date,
		autoValue 	: function(){
						return new Date()
					  }
	}
}));

// after we remove insecure package, we need this method to save tweet
Posts.allow({
	// add post/tweet
	insert: function(userId, post){
		return true;
	}
});

// after we remove insecure package, we need this method to save user avatar info
UserImages.allow({
	// add avatar
	insert: function(userId, image){
		return true;
	}
});

