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