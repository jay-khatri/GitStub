// Saves options to chrome.storage.sync.
function save_options() {
  var GITHUB_APITOKEN = document.getElementById('github_apitoken').value;
  chrome.storage.sync.set({"GITHUB_APITOKEN": GITHUB_APITOKEN}, function() {
    document.getElementById('status').textContent = 'Settings saved.';
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get(['GITHUB_APITOKEN'], function(items) {
    console.log(items);
      document.getElementById('github_apitoken').value = items['GITHUB_APITOKEN'] ? items['GITHUB_APITOKEN'] : '';
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
