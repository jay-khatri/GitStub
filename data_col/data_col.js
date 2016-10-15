var reponame1 = "robbyrussell/oh-my-zsh";

function cal_score(repo){
	fork_w = 5;
	star_w = 5;
	watch_w = 5;
	fork = repo['forks_count'] * fork_w;
	star = repo['stargazers_count'] * star_w;
	watch = repo['watchers_count'] * watch_w;
	return (fork + star + watch);
};
	

function get_toprepos(contrib_repos){
	//console.log(contrib_repos);
	var best_repos = [];
	contrib_repos.forEach(function(contrib_repo){
		//gets only the repos from the list
		repos = contrib_repo['repos'];
		//console.log(repos);
		var contrib_topscore = 0;
		var contrib_best = {};
		repos.forEach(function(repo){
			if (cal_score(repo) >= contrib_topscore){
					contrib_topscore = cal_score(repo);
					contrib_best = repo;
			}
		});
		best_repos.push(contrib_best['name']);
	});
	console.log(best_repos);
};


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
            obj['repos'] = contrib_repos;
      repos.push(obj);
      processed_count++;
			  if (processed_count == contribs.length) {
				// done processing, do something else
				//console.log(repos);
				get_toprepos(repos);
				//here, call the new function that gives a score.
			  }
      });
    xhr.send();
    });
};
                   

var contribs = get_contribs(reponame1);

