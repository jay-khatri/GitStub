var reponame1 = "jay-khatri/Hack-Rice";

//get contributers
function get_contribs(reponame){
	var xhr = new XMLHttpRequest();
	var contribs;
	xhr.open("GET", "https://api.github.com/repos/" + reponame + "/contributors");
	xhr.addEventListener("load", function () {
		contribs = JSON.parse(this.response);
		get_repos(contribs[0].login);
	});
	xhr.send();
	return contribs;
};

//input is a string of the contributor
function get_repos(contrib){
	var xhr = new XMLHttpRequest();
	var contrib_repos;
	xhr.open("GET", "https://api.github.com/users/" + contrib + "/repos");
	xhr.addEventListener("load", function () {
		contrib_repos = JSON.parse(this.response);
		console.log(contrib_repos);
	});
	xhr.send();
	return contrib_repos;
};

var contribs = get_contribs(reponame1);
