# GitStub
## See GitHub projects related to ones you already enjoy, zero-fuss!

GitStub is a Chrome extension that uses the GitHub API to create a list of recommendations of repositories related to the one being browsed by the user. Results are displayed alongside the current repo for a seamless experience.

![Animation of GitStub in action](http://i.imgur.com/TQQVoLj.gif)

Created over 36 hours in October 2016 for HackRice by [Josiah Coad](https://github.com/josiahcoad), [Jay Khatri](https://github.com/jay-khatri), and [James Gerity](https://github.com/SnoopJeDi).

## Installation

- ```git clone https://github.com/jay-khatri/Hack-Rice```
- Browse to `chrome://extensions`, enable development mode, and browse to the unpacked extension
- Create a new [GitHub personal access token](https://github.com/settings/tokens/new) (no additional permissions needed - you can leave those checkboxes alone!)
- Run `echo YOURTOKENHERE > github_APITOKEN` in the extension directory
- Visit a GitHub repo or user profile and enjoy!
