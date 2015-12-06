Meteor.subscribe('posts');
Meteor.subscribe('ProfileImages');
Meteor.subscribe('UserImages');

Meteor.startup(function () {
  AccountsEntry.config({
    homeRoute: '/',      
    dashboardRoute: '/',
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

  Accounts.ui.config({
  	passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

});

// global function to display user avatar in templates
Template.registerHelper('getProfileImage', function(userId){
	var imgUrl = UserImages.findOne({userId: userId}).image;
	return imgUrl;
});

// global function to display tweet creation time using MomentJS
Template.registerHelper('getMomentTime', function(postId){
	// find that post using given postId (passed from the posts.html)
	// from the post, grab the createdAt value
	var tweetDate 	= Posts.findOne({_id: postId}).createdAt;
	// apply MomentJS based on current time
	var momentTime 	= moment(tweetDate).fromNow();
	// give back to the template
	return momentTime;
});
