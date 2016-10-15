var MAXRECS = 10;
var OCTOSVG = '<svg aria-hidden="true" class="octicon octicon-mark-github" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>';
var THUMBSUPSVG = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <path fill="#FFBE73" d="M48.126,32.832c0.871,2.445,1.359,6.482,0.15,11.58c0,0-5.545-4.523-6.564-6.908   c0,0-3.189-9.25-5.674-15.051c-1.021-2.383-4.121-3.23-5.556-6.559c-2.504-5.803,0.439-10.82,3.433-7.199   c3.449,4.174,8.479,7.27,9.496,9.654C45.112,22.328,46.854,29.244,48.126,32.832z"/> <path fill="#FFDD67" d="M53.265,36.625c0.449,3.16,0.061,8.135-2.629,13.949c0,0-5.563-6.84-6.209-9.963   c0,0-1.59-11.922-3.166-19.52c-0.648-3.123-4.168-4.928-5.084-9.289c-1.6-7.605,3.15-12.887,5.867-7.777   c3.133,5.891,8.42,10.885,9.066,14.008C52.188,23.244,52.603,31.994,53.265,36.625z"/> <path fill="#EBA352" d="M46.085,38.055c0,0-1.588-11.922-3.168-19.518c-0.646-3.125-4.164-4.93-5.082-9.291   c-0.549-2.619-0.35-4.963,0.262-6.701c-1.67,1.318-3.023,4.906-2.107,9.26c0.918,4.361,4.455,6.186,5.104,9.311   c1.578,7.598,3.334,19.496,3.334,19.496c0.645,3.123,6.209,9.963,6.209,9.963c0.494-1.064,0.885-2.09,1.232-3.092   C50.563,45.824,46.624,40.656,46.085,38.055z"/> <path fill="#FFDD67" d="M50.915,35.441c-6.467-6.041-13.645-9.697-18.302-12.047c-6.912-3.488-5.094,1.313-16.883,4.484   c-1.557,0.418-3.41,1.584-1.994,4.619c1.365,2.922,12.496,0.705,14.225-1.045c0,0,4.658,5.85,9.312,5.713   c0,0-0.805,3.883,0.328,5.76c0,0-6.595,3.523-9.419,6.615l-7.84-5.389c-0.574-8.336-2.051-10.803-6.043-10.408   c-3.723,0.367-3.303,3.953-3.221,6.906c0.146,5.314-1.227,6.176,0.039,8.285C15.955,57,22.027,62,33.327,62   c4.23,0,6.918-0.115,9.518-1.438C47.202,58.348,58.03,42.088,50.915,35.441z"/> <g> <path fill="#EBA352" d="M52.179,37.021c2.418,7.617-6.221,20.102-10.002,22.023c-2.6,1.32-5.287,1.436-9.517,1.436    c-11.176,0-17.283-4.92-22.053-12.807c0.115,0.439,0.273,0.855,0.518,1.262C15.962,57,22.037,62,33.335,62    c4.232,0,6.92-0.115,9.52-1.438C46.897,58.508,56.505,44.361,52.179,37.021z"/> </g> <g> <path fill="#EBA352" d="M18.97,44.412c0,0,7.289,4.803,9.061,5.068l-7.688-5.328c0.313-8.416-2.092-11.096-6.045-10.408    c-0.322,0.057-0.609,0.123-0.869,0.199C17.388,33.531,19.291,36.201,18.97,44.412z"/> </g> <g> <path fill="#EBA352" d="M27.98,31.453c0,0,4.66,5.85,9.312,5.713V36.08c-4.652,0.137-9.312-5.715-9.312-5.715    c-1.727,1.75-12.857,3.967-14.223,1.045c-0.24-0.512-0.379-0.969-0.449-1.381c-0.129,0.641-0.027,1.445,0.449,2.469    C15.123,35.42,26.253,33.203,27.98,31.453z"/> </g> </g> </svg>';
var THUMBSNODE = document.createElement("div");
THUMBSNODE.innerHTML = THUMBSUPSVG;
// THUMBSNODE.querySelectorAll("path").forEach(function(p) { p.setAttribute("fill", "#0085ff")});

var APIKEY;
(function() {
  if(document.querySelectorAll(".repository-content").length > 0) {
    var reponame = document.location.href.split(".com/").pop().match(/[^/]+\/[^/]+/).pop();
    console.log("Retrieving info for repository " + reponame);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', chrome.extension.getURL('github_APITOKEN'), true);
    xhr.addEventListener('load', function() {
      APIKEY = xhr.responseText.trim();
    	get_contribs(reponame, function(best) { console.log(best); addRecs(best); });
    });
    xhr.send();
  }
})();


function recNode(url, title, desc) {
  var n = document.createElement("div");
  n.innerHTML += THUMBSNODE.innerHTML;
  n.innerHTML += '<span itemprop="name"><a href="' + url + '" class="" data-selected-links="' + url + '" itemprop="url">' + title + '</a></span> <span class="sep"></span> <span itemprop="description">' + desc + '</span>';
  return n;
}

function addRecs(recs) {
  var readme = document.querySelector("#readme");
  var recbox = document.createElement("div");
  recbox.id = "recbox";
  recbox.innerHTML = "<h2>You might also enjoy...</h2>";
  recbox.classList += 'rec-group';
  insertAfter(readme, recbox);
  recs.forEach(function(rec,i) {
    if(i > MAXRECS-1) {
      return;
    }
    recbox.appendChild(recNode(rec.html_url, rec.full_name, rec.description));
  });
}

function getRecs(reponame) {
  var DOMOCK = false; // Flag for using mock data (see below)
  var ret, xhr;
  ret = [];

  if (DOMOCK) {
    ret = MOCK;
    addRecs(ret);
  } else {
    // get_contribs(reponame, function(best) { addRecs(best); });
    // xhr = new XMLHttpRequest();
    // xhr.open("GET", "https://api.github.com/repos/" + reponame + "/forks");
    // xhr.setRequestHeader("Authentication", "token " + APIKEY);
    // xhr.send();
    // xhr.addEventListener('load', function() {
    //   if (xhr.status == 200) {
    //     console.log("It's copacetic", xhr.status);
    //     if (xhr.response.length) {
    //       ret = JSON.parse(xhr.response);
    //       if (ret.length > 0) {
    //         addRecs(ret);
    //       }
    //     }
    //   } else {
    //     console.log("Something ain't right mane", xhr.status);
    //   }
    // });
  }
}

function insertAfter(self, node) {
  if (!self.parentNode) {
    return false;
  }

  if (self.nextSibling != null) {
    self.parentNode.insertBefore(node, self.nextSibling);
  } else {
    self.parentNode.appendChild(node);
  }
}

var MOCK = [
  {
    "id": 1296269,
    "owner": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "",
      "url": "https://api.github.com/users/octocat",
      "html_url": "https://github.com/octocat",
      "followers_url": "https://api.github.com/users/octocat/followers",
      "following_url": "https://api.github.com/users/octocat/following{/other_user}",
      "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
      "organizations_url": "https://api.github.com/users/octocat/orgs",
      "repos_url": "https://api.github.com/users/octocat/repos",
      "events_url": "https://api.github.com/users/octocat/events{/privacy}",
      "received_events_url": "https://api.github.com/users/octocat/received_events",
      "type": "User",
      "site_admin": false
    },
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "description": "This your first repo!",
    "private": false,
    "fork": true,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "html_url": "https://github.com/octocat/Hello-World",
    "archive_url": "http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}",
    "assignees_url": "http://api.github.com/repos/octocat/Hello-World/assignees{/user}",
    "blobs_url": "http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}",
    "branches_url": "http://api.github.com/repos/octocat/Hello-World/branches{/branch}",
    "clone_url": "https://github.com/octocat/Hello-World.git",
    "collaborators_url": "http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}",
    "comments_url": "http://api.github.com/repos/octocat/Hello-World/comments{/number}",
    "commits_url": "http://api.github.com/repos/octocat/Hello-World/commits{/sha}",
    "compare_url": "http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}",
    "contents_url": "http://api.github.com/repos/octocat/Hello-World/contents/{+path}",
    "contributors_url": "http://api.github.com/repos/octocat/Hello-World/contributors",
    "deployments_url": "http://api.github.com/repos/octocat/Hello-World/deployments",
    "downloads_url": "http://api.github.com/repos/octocat/Hello-World/downloads",
    "events_url": "http://api.github.com/repos/octocat/Hello-World/events",
    "forks_url": "http://api.github.com/repos/octocat/Hello-World/forks",
    "git_commits_url": "http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}",
    "git_refs_url": "http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}",
    "git_tags_url": "http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}",
    "git_url": "git:github.com/octocat/Hello-World.git",
    "hooks_url": "http://api.github.com/repos/octocat/Hello-World/hooks",
    "issue_comment_url": "http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}",
    "issue_events_url": "http://api.github.com/repos/octocat/Hello-World/issues/events{/number}",
    "issues_url": "http://api.github.com/repos/octocat/Hello-World/issues{/number}",
    "keys_url": "http://api.github.com/repos/octocat/Hello-World/keys{/key_id}",
    "labels_url": "http://api.github.com/repos/octocat/Hello-World/labels{/name}",
    "languages_url": "http://api.github.com/repos/octocat/Hello-World/languages",
    "merges_url": "http://api.github.com/repos/octocat/Hello-World/merges",
    "milestones_url": "http://api.github.com/repos/octocat/Hello-World/milestones{/number}",
    "mirror_url": "git:git.example.com/octocat/Hello-World",
    "notifications_url": "http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}",
    "pulls_url": "http://api.github.com/repos/octocat/Hello-World/pulls{/number}",
    "releases_url": "http://api.github.com/repos/octocat/Hello-World/releases{/id}",
    "ssh_url": "git@github.com:octocat/Hello-World.git",
    "stargazers_url": "http://api.github.com/repos/octocat/Hello-World/stargazers",
    "statuses_url": "http://api.github.com/repos/octocat/Hello-World/statuses/{sha}",
    "subscribers_url": "http://api.github.com/repos/octocat/Hello-World/subscribers",
    "subscription_url": "http://api.github.com/repos/octocat/Hello-World/subscription",
    "svn_url": "https://svn.github.com/octocat/Hello-World",
    "tags_url": "http://api.github.com/repos/octocat/Hello-World/tags",
    "teams_url": "http://api.github.com/repos/octocat/Hello-World/teams",
    "trees_url": "http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}",
    "homepage": "https://github.com",
    "language": null,
    "forks_count": 9,
    "stargazers_count": 80,
    "watchers_count": 80,
    "size": 108,
    "default_branch": "master",
    "open_issues_count": 0,
    "has_issues": true,
    "has_wiki": true,
    "has_pages": false,
    "has_downloads": true,
    "pushed_at": "2011-01-26T19:06:43Z",
    "created_at": "2011-01-26T19:01:12Z",
    "updated_at": "2011-01-26T19:14:43Z",
    "permissions": {
      "admin": false,
      "push": false,
      "pull": true
    }
  }
];