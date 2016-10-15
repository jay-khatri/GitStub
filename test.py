import requests

media = "application/vnd.github.spiderman-preview"
url   = "https://api.github.com/repos/jay-khatri/Hack-Rice/traffic/clones"
print( requests.get(url, headers={"Accept": media}).json() )



in best_repos
"/languages"
cool_lang = ["SQL", "Java", "JavaScript", "C#", "C++", "Python", "Ruby on Rails"]

for lang in cool_lang: