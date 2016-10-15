#!/usr/bin/python3
import requests
import json


def printf(obj):
	try:
		print (json.dumps(obj, sort_keys=True,
		                  indent=4, separators=(',', ': ')))
	except:
		print("DONTTTT KNOW WHAT TO DO!")


def _get(url):
	token = "4194742316e0d39c72b699efe0bb0dda59f28fb7"
	return requests.get(url, headers={'Authorization': "token " + token}).json()

def get_contribs(repo):
	contribs = _get(repo)
	return contribs

def get_repos(user):
	username = user["login"]
	repos = _get("https://api.github.com/users/" + username + "/repos")
	return repos

# print ("Your remaining: ", _get("https://api.github.com/rate_limit")['resources']['core']['remaining'])


def score(repo):
	tot = 0
	tot += repo["forks_count"] * 5
	tot += repo["watchers_count"] * 5
	tot += repo["stargazers_count"] * 5
	return tot

def print_top(best_repos, num):
	if len(best_repos) < num:
		num = len(best_repos)
	best_repos = sorted(best_repos, key=lambda repo: repo["tot_score"], reverse=True)
	# print("There are contributers: ", len(best_repos))
	print("__Your Recomended Repos Are__")
	for i in range(num):
			print(best_repos[i]["name"])
			print("Score: " + str(best_repos[i]["tot_score"]))


repo_name = "jupyterlab/jupyterlab"
source_repo = "https://api.github.com/repos/" + repo_name + "/contributors"

contribs = get_contribs(source_repo)
best_repos = []

for contrib in contribs:
	# get repos of contrib
	contrib_repos = get_repos(contrib)

	# get repos with most forks
	contrib_topscore = 0
	for contrib_repo in contrib_repos:
		if score(contrib_repo) >= contrib_topscore:
			contrib_topscore = score(contrib_repo)
			contrib_best = contrib_repo
	contrib_best["tot_score"] = contrib_topscore
	best_repos.append(contrib_best) # add the contrib's best repo to the array of best repos

print_top(best_repos, 5)
printf(best_repos[0])
