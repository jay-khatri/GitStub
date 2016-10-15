import requests

owner = "jupyterlab"
repo_name = "jupyterlab"
ext = owner + "/" + repo_name

source_repo = "https://api.github.com/repos/" + ext + "/contributors"


def get_contribs(repo):
	contribs = requests.get(source_repo).json()
	return contribs

def get_repos(username):
	userinfo = requests.get("https://api.github.com/users/" + username).json()
	repos_url = userinfo['repos_url']
	repos = requests.get(repos_url).json()
	return repos

# print (c_repos)
highscore = 0
contribs = get_contribs(source_repo)
if len(contribs) == 0: raise("Bad URL. There are no contribs")
# get contibuters
# i and j are the index of highest number of repos

for j in range(len(contribs)):
	contrib_name = (contribs[j]["login"])
	# get repos of contrib
	contrib_repos = get_repos(contrib_name)

	# get repos with most forks
	most_forks = 0
	for i in range(len(contrib_repos)):
		if contrib_repos[i]["forks_count"] > most_forks:
			most_forks = i
		if most_forks > highscore: highscore = j

winner_contrib = (contribs[highscore]["login"])
contib_repos = get_repos(winner_contrib)
forks_count = contrib_repos[most_forks]["forks_count"]

print (winner_contrib + " has most forks...")
print ("Number of max forks: " + str(forks_count))





# 'created_at': '2013-12-06T19:18:28Z', 
# 'followers': 4
# 'updated_at': '2016-10-14T23:26:40Z'