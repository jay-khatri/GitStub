var MAXRECS = 10;
var MAXNAMELEN = 40;
var MAXDESCLEN = 80;
var NUMRANDOM = 4; // Number of random stars to sample

// emoji
var HEARTEYESNODE = document.createElement("div");
HEARTEYESNODE.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 -12 64 72" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <g> <circle fill="#FFDD67" cx="32" cy="31.999" r="30"/> </g> <g> <g> <path fill="#664E27" d="M48,37.499c0,6.461-5.314,14-15.998,14c-10.689,0-16-7.539-16-14c0,0,5.311,0,16,0     C42.686,37.499,48,37.499,48,37.499z"/> </g> <g> <rect x="16.92" y="37.499" fill="#FFFFFF" width="30.164" height="5.6"/> </g> <g> <path fill="#664E27" d="M32.002,52.499c-11.041,0-17-7.729-17-15v-1H49v1C49,44.771,43.043,52.499,32.002,52.499z M17.047,38.499     c0.523,5.99,5.727,12,14.955,12c9.227,0,14.432-6.01,14.955-12H17.047z"/> </g> </g> <path fill="#F46767" d="M61.848,13.22c-0.463-2.655-2.031-4.89-4.463-5.553c-2.654-0.728-5.082,0.315-7.438,2.703   c-1.32-3.63-3.338-6.326-6.52-7.708C40.168,1.238,37,2.196,35.002,4.723c-2.076,2.628-2.902,6.677-0.68,11.974   C36.404,21.656,45.734,31.709,46.004,32c0.363-0.226,10.754-6.72,13.299-9.909C61.793,18.971,62.309,15.864,61.848,13.22z"/> <path fill="#F46767" d="M29.002,4.723c-1.996-2.526-5.166-3.484-8.426-2.062c-3.184,1.382-5.201,4.078-6.523,7.708   c-2.355-2.387-4.783-3.43-7.438-2.703c-2.43,0.663-4,2.898-4.463,5.553c-0.459,2.644,0.057,5.751,2.545,8.872   C7.244,25.28,17.637,31.774,18,32c0.268-0.291,9.6-10.344,11.682-15.303C31.904,11.4,31.078,7.351,29.002,4.723z"/> </g> </svg>';

var AOKAYNODE = document.createElement("div");
AOKAYNODE.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 -12 64 72" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <path fill="#FFBE73" d="M48.126,32.832c0.871,2.445,1.359,6.482,0.15,11.58c0,0-5.545-4.523-6.564-6.908   c0,0-3.189-9.25-5.674-15.051c-1.021-2.383-4.121-3.23-5.556-6.559c-2.504-5.803,0.439-10.82,3.433-7.199   c3.449,4.174,8.479,7.27,9.496,9.654C45.112,22.328,46.854,29.244,48.126,32.832z"/> <path fill="#FFDD67" d="M53.265,36.625c0.449,3.16,0.061,8.135-2.629,13.949c0,0-5.563-6.84-6.209-9.963   c0,0-1.59-11.922-3.166-19.52c-0.648-3.123-4.168-4.928-5.084-9.289c-1.6-7.605,3.15-12.887,5.867-7.777   c3.133,5.891,8.42,10.885,9.066,14.008C52.188,23.244,52.603,31.994,53.265,36.625z"/> <path fill="#EBA352" d="M46.085,38.055c0,0-1.588-11.922-3.168-19.518c-0.646-3.125-4.164-4.93-5.082-9.291   c-0.549-2.619-0.35-4.963,0.262-6.701c-1.67,1.318-3.023,4.906-2.107,9.26c0.918,4.361,4.455,6.186,5.104,9.311   c1.578,7.598,3.334,19.496,3.334,19.496c0.645,3.123,6.209,9.963,6.209,9.963c0.494-1.064,0.885-2.09,1.232-3.092   C50.563,45.824,46.624,40.656,46.085,38.055z"/> <path fill="#FFDD67" d="M50.915,35.441c-6.467-6.041-13.645-9.697-18.302-12.047c-6.912-3.488-5.094,1.313-16.883,4.484   c-1.557,0.418-3.41,1.584-1.994,4.619c1.365,2.922,12.496,0.705,14.225-1.045c0,0,4.658,5.85,9.312,5.713   c0,0-0.805,3.883,0.328,5.76c0,0-6.595,3.523-9.419,6.615l-7.84-5.389c-0.574-8.336-2.051-10.803-6.043-10.408   c-3.723,0.367-3.303,3.953-3.221,6.906c0.146,5.314-1.227,6.176,0.039,8.285C15.955,57,22.027,62,33.327,62   c4.23,0,6.918-0.115,9.518-1.438C47.202,58.348,58.03,42.088,50.915,35.441z"/> <g> <path fill="#EBA352" d="M52.179,37.021c2.418,7.617-6.221,20.102-10.002,22.023c-2.6,1.32-5.287,1.436-9.517,1.436    c-11.176,0-17.283-4.92-22.053-12.807c0.115,0.439,0.273,0.855,0.518,1.262C15.962,57,22.037,62,33.335,62    c4.232,0,6.92-0.115,9.52-1.438C46.897,58.508,56.505,44.361,52.179,37.021z"/> </g> <g> <path fill="#EBA352" d="M18.97,44.412c0,0,7.289,4.803,9.061,5.068l-7.688-5.328c0.313-8.416-2.092-11.096-6.045-10.408    c-0.322,0.057-0.609,0.123-0.869,0.199C17.388,33.531,19.291,36.201,18.97,44.412z"/> </g> <g> <path fill="#EBA352" d="M27.98,31.453c0,0,4.66,5.85,9.312,5.713V36.08c-4.652,0.137-9.312-5.715-9.312-5.715    c-1.727,1.75-12.857,3.967-14.223,1.045c-0.24-0.512-0.379-0.969-0.449-1.381c-0.129,0.641-0.027,1.445,0.449,2.469    C15.123,35.42,26.253,33.203,27.98,31.453z"/> </g> </g> </svg>';

var WOWNODE = document.createElement("div");
WOWNODE.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 -12 64 72" enable-background="new 0 0 64 64" xml:space="preserve"> <g> <circle fill="#FFDD67" cx="32" cy="32" r="30"/> <g> <circle fill="#664E27" cx="31.999" cy="47.278" r="8.721"/> <path fill="#FFFFFF" d="M25.896,43.754c1.219-2.106,3.497-3.524,6.104-3.524s4.885,1.417,6.104,3.521L25.896,43.754z"/> </g> <g> <g> <circle fill="#FFFFFF" cx="20.248" cy="29.141" r="9"/> <circle fill="#664E27" cx="20.249" cy="29.141" r="4.5"/> </g> <g> <circle fill="#FFFFFF" cx="43.75" cy="29.141" r="9"/> <circle fill="#664E27" cx="43.75" cy="29.141" r="4.5"/> </g> </g> <g> <path fill="#917524" d="M50.203,15.777c-3.236-2.732-7.523-3.881-11.693-3.133c-0.578,0.113-1.088-2.021-0.385-2.156    c4.809-0.863,9.756,0.461,13.492,3.615C52.158,14.572,50.646,16.164,50.203,15.777z"/> <path fill="#917524" d="M25.488,12.494c-4.168-0.748-8.455,0.4-11.693,3.133c-0.443,0.389-1.953-1.205-1.412-1.674    c3.734-3.152,8.682-4.479,13.492-3.615C26.578,10.473,26.066,12.607,25.488,12.494z"/> </g> </g> </svg>';

var EMOJILIST = [HEARTEYESNODE, AOKAYNODE, WOWNODE];

var RECBOX, SPINNER;
var APIKEY;

function checkAPIKey() {
  if (!APIKEY) {
    displayWarning("You must set an API token in the GitStub settings to get recommendations");
    return false;
  }
  return true;
}

chrome.storage.sync.get(["GITHUB_APITOKEN"], function(items) {
  APIKEY = items['GITHUB_APITOKEN'];

  if(document.querySelector("body.page-profile") != null) {
    var anchor = document.querySelector(".js-repo-filter");
    RECBOX = makeRecbox(anchor);
    SPINNER = RECBOX.querySelector(".spinner");
    if(!checkAPIKey()) {
      return false;
    }
    var username = document.location.href.split(".com/").pop().match(/[^/]+/).pop();
    get_lang(username, function(ans){
      addrecsInside(ans);
    });
  } else if(document.querySelector(".repository-content") != null) {
    var anchor = document.querySelector("#readme");
    if (!anchor) { // There is no readme
      anchor = document.querySelector(".file-wrap");
    }
    RECBOX = makeRecbox(anchor);
    SPINNER = RECBOX.querySelector(".spinner");
    if(!checkAPIKey()) {
      return false;
    }
    var reponame = document.location.href.split(".com/").pop().match(/[^/]+\/[^/]+/).pop();

    get_contribs(reponame, function(repos) {
      var users = [];
      repos.forEach(function(r) {
        if(users.indexOf(r.owner.login) == -1) {
          users.push(r.owner.login);
        }
      });
      var stars = [];
      var ct = 0;
      users.forEach(function(u) {
        get_stars(u, function(s) {
          s = s.map(function(e) {
            e['score'] = cal_score(e);
            return e;
          });
          stars.push(...s);
          ct++;
          if(ct == users.length) {
            var selectedstars = [];
            for(var i=0; stars.length && i < NUMRANDOM; i++) {
              selectedstars.push(...stars.splice(Math.floor(Math.random()*stars.length),1));
            }
            selectedstars.forEach(function(a) {
              if(repos.indexOf(a) == -1) {
                repos.push(a);
              }
            })
            addRecs(repos);
          }
        });
      });
    });
  }
});

function recNode(url, title, shortdesc, fulldesc, score) {
  var n = document.createElement("div");
  if (score < 100) {
    emojinode = AOKAYNODE;
  } else if (score >= 100 && score < 1000) {
    emojinode = WOWNODE;
  } else {
    emojinode = HEARTEYESNODE;
  }
  n.innerHTML += emojinode.innerHTML;
  n.innerHTML += '<div itemprop="name"><a href="' + url + '" class="" data-selected-links="' + url + '" itemprop="url">' + title + '</a></div> <div itemprop="description" title="' + fulldesc + '">' + shortdesc + '</div>';
  return n;
}

function addrecsInside(recs) {
  var MAXNAMELEN = 20;
  var MAXDESCLEN = 42;
  recs = scoreSort(recs);
  RECBOX.id = "recbox";
  var recflavor = RECBOX.querySelector("h2");
  recflavor.id = "rec-flavor-thin";
  RECBOX.appendChild(recflavor);
  recs.forEach(function(rec,i) {
    if(i > MAXRECS-1) {
      return;
    }
    var name = rec.full_name;
    if(name.length > MAXNAMELEN) {
      name = name.slice(0,MAXNAMELEN) + "...";
    }
    var fulldesc = rec.description != null ? rec.description : "No description available";
    var shortdesc = fulldesc;
    if(shortdesc.length > MAXDESCLEN) {
      shortdesc = shortdesc.slice(0,MAXDESCLEN) + "...";
    }
    RECBOX.appendChild(recNode(rec.html_url, name, shortdesc, fulldesc));
  });
  SPINNER.style.display = 'none';
  var username = document.querySelector(".vcard-username").textContent;
  RECBOX.querySelector("h2").textContent = "Based on " + username +"'s interests, we recommend...";
}

function displayWarning(message) {
  RECBOX.innerHTML = "<h2>" + message + "</h2>";
  RECBOX.classList += ' gitstub-warning ';
}


function displayError(message) {
  RECBOX.innerHTML = "<h2>" + message + "</h2>";
  RECBOX.classList += ' gitstub-error ';
}

function makeRecbox(anchor) {
  var recbox = document.createElement("div");
  recbox.id = "recbox";
  var spinner = document.createElement("div");
  spinner.classList += 'recspinner';
  spinner.innerHTML = '<div class="rect1"></div> <div class="rect2"></div> <div class="rect3"></div> <div class="rect4"></div> <div class="rect5"></div>';

  recbox.innerHTML = "<h2>Getting some other cool things for you...</h2>";
  recbox.classList += ' rec-group ';
  recbox.appendChild(spinner);
  insertAfter(anchor, recbox);
  return recbox;
}

function addRecs(recs) {
  scoreSort(recs).forEach(function(rec,i) {
    if(i > MAXRECS-1) {
      return;
    }
    var name = rec.full_name;
    if(name.length > MAXNAMELEN) {
      name = name.slice(0,MAXNAMELEN) + "...";
    }
    var fulldesc = rec.description != null ? rec.description : "No description available";
    var shortdesc = fulldesc;
    if(shortdesc.length > MAXDESCLEN) {
      shortdesc = shortdesc.slice(0,MAXDESCLEN) + "...";
    }
    RECBOX.appendChild(recNode(rec.html_url, name, shortdesc, fulldesc, rec.score));
    RECBOX.querySelector("div.recspinner").style.display = 'none';
    RECBOX.querySelector("h2").textContent = "You might also enjoy...";
  });
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

function insertInside(self, node) {
  if (!self.parentNode) {
    return false;
  }
  if (self.nextSibling != null) {
    self.parentNode.appendChild(node);
  }
}

function scoreSort(recs) {
  return recs.sort(function(a,b){
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  });
}
