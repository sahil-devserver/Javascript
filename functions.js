//Functions

function loadProfiles(userNames){
	let names = typeof userNames !== 'undefined' ? userNames : [];
	let namesLength = names.length;
}

loadProfiles();

loadProfiles(undefined);

function setPageThread(name, {popular, expires, activeClass} = {}){
	console.log("Name: ", name);
	console.log("Popular: ", popular);
	console.log("Expires: ", expires);
	console.log("Active: ", activeClass);
}

setPageThread('New Version coming out soon',{popular: true});


displayTags("songs", "lyrics", "bands");

//Rest parameters
function displayTags(...tags){
	for(let i in tags) {
		let tag = tags[i];
		_addToTopic(target, tag);
	}
}
//spread operator
getRequest("/topics/17/tags", function(data){
	let tags = data.tags;
	displayTags(...tags);
})


//Arrow functions to preserve scope

function TagComponent(target, urlPath) {
	this.targetElement = target;
	this.urlPath = urlPath;
}

TagComponent.prototype.render = function() {
	getRequest(this.urlPath, (data) => {
		let tags = data.tags;
		displayTags(this.targetElement, ...tags);

	});
}


let tagComponent = new TagComponent(targetDiv, "/topics/17/tags");
tagComponent.render();


