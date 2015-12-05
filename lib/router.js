Router.configure({
	layoutTemplate: 'layout'
});

Router.map(function(){
	// posts route
	this.route('posts', {
		path: '/',
		template: 'posts'
	});

	// posts route
	this.route('about');
});