var FORK_W = 5;
var STAR_W = 5;
var WATCH_W = 5;

var APIKEY;
(function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', chrome.extension.getURL('github_APITOKEN'), true);
  xhr.addEventListener('load', function() {
  APIKEY = xhr.responseText.trim();
  });
  xhr.send();
})();

//gets a list of most popular repos with same language
function get_lang(username, callback){
	var languages = [];
	var languages_u = [];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/" + username + "/repos?access_token=" + APIKEY);
    xhr.addEventListener("load", function () {
      repo_list = JSON.parse(this.response);
			//console.log(repo_list);
			repo_list.forEach(function(rl){
				languages.push(rl.language);	
			});
			//console.log(languages);
			languages.forEach(function(e) { 
					if(languages_u.indexOf(e) == -1) {
							if (e !== null){
						   		languages_u.push(e);
							}
				   	}
		   	});
			console.log(languages_u);
			repo_lang(languages_u, callback);
    });
    xhr.send();
  };

function repo_lang(languages, callback){
		results = [];
		parsed_results = [];
		final_result = [];
		var count = 1;
		languages.forEach(function(e){
    		var xhr = new XMLHttpRequest();
   		 	xhr.open("GET", "https://api.github.com/search/repositories?q=language:" + e + "&access_token=" + APIKEY);
    		xhr.addEventListener("load", function () {
      			search = JSON.parse(this.response);
				results.push(search);
				results.forEach(function(f){
						parsed_results.push(...f['items']);
				});
			count ++;
				if (count === languages.length){
					console.log(parsed_results.length);
					for(var i = 0; i < 21; i++){
						var index = Math.floor(Math.random()*(parsed_results.length));
						//console.log(parsed_results.length);
						final_result.push(parsed_results[index]);
					}
				console.log(final_result);
				callback(final_result);
				return final_result;
				}
			});
			xhr.send();
		})
}
function cal_score(repo){
  fork = repo['forks_count'] * FORK_W;
  star = repo['stargazers_count'] * STAR_W;
  watch = repo['watchers_count'] * WATCH_W;
  return (fork + star + watch);
};

function get_toprepos(contrib_repos, callback){
  // console.log(contrib_repos);
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
    best_repos.push(contrib_best);
  });
  // console.log(best_repos);
  callback(best_repos);
};

//get contributers of a given repo name
function get_contribs(reponame, callback){ var xhr = new XMLHttpRequest();
  var contribs;
  xhr.open("GET", "https://api.github.com/repos/" + reponame + "/contributors?access_token=" + APIKEY);
  // xhr.setRequestHeader("Authentication", "token " + APIKEY);
  xhr.addEventListener("load", function () {
    if(xhr.status == 200) {
      contribs = JSON.parse(this.response);
      // console.log(contribs);
      if(contribs.length && contribs.length > 0) {
        get_repos(contribs, callback);
      }
    } else {
      console.log("Something went wrong with an XHR...", xhr);
    }
  });
  xhr.send();
};

function get_repos(contribs, callback){
  var contrib_repos;
  var processed_count = 0;
  var repos = [];

  contribs.forEach(function(contrib){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/" + contrib.login + "/repos?access_token=" + APIKEY);
    // xhr.setRequestHeader("Authentication", "token " + APIKEY);
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
        get_toprepos(repos, callback);
      //here, call the new function that gives a score.
      }
    });
    xhr.send();
  });
};
