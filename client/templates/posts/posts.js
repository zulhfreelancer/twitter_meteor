Template.posts.helpers({
	posts: function(){
		return Posts.find({}, {sort: {createdAt: -1}});
	}
});

// function to close the modal after tweet has been saved
var insertPostFormHook = {
    onSuccess: function(operation, result) {
        if(result){

            console.log(operation);	// should be `insert`
            console.log(result); 	// return saved tweet `_id`

            $('#postModal').modal('toggle');
        }
    }
}

// register above function to autoForm
AutoForm.addHooks('insertPostForm', insertPostFormHook);