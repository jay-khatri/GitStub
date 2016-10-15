var reponame1 = "jay-khatri/Hack-Rice";


//get contributers of a given repo name
function get_contribs(reponame){
	var xhr = new XMLHttpRequest();
	var contribs;
	xhr.open("GET", "https://api.github.com/repos/" + reponame + "/contributors");
	xhr.addEventListener("load", function () {
		contribs = JSON.parse(this.response);
		get_repos(contribs);
	});
	xhr.send();
	return contribs;
};

function get_repos(contribs){
  var contrib_repos;
  var processed_count = 0;
  var repos = [];
  
    contribs.forEach(function(contrib){ 
    var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/" + contrib.login + "/repos");
        xhr.addEventListener("load", function () {
            contrib_repos = JSON.parse(this.response);
            var obj = {};
            obj['login'] = contrib.login;
            obj['id'] = contrib.id;
            obj[contrib.login] = contrib_repos;
      repos.push(obj);
      processed_count++;
      if (processed_count == contribs.length) {
        // done processing, do something else
		console.log(repos);
			  //here, call the new function that gives a score.
      }
        });
    xhr.send();
    });
};
                   

var contribs = get_contribs(reponame1);


/*
When all of the requests created by the above forEach() complete, then the repos object will look like:

repos = [
    {
    login: octocat,
    id: 1,
    repos: [ {...}, {...} ]
  },
    {
    id: 2,
    login: batman,
    repos: [ {...} ]
  }
]
*/
