var request = require('request');

var opts = {
  headers: {
    'User-Agent': 'UnumUX Test App'
  }
};

var githubApi = "https://api.github.com";


function getReposForOrg(org, cb) {
    apiRequest(`${githubApi}/orgs/${org}/repos`, cb);
}

function getReposForUser(user, cb) {
    apiRequest(`${githubApi}/users/${user}/repos`, cb);
}

function apiRequest(url, cb) {
    request(url, opts, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var result = JSON.parse(body);
            var repoNames = result.map(function(repo) {
                return repo.name;
            });

            cb(repoNames);
        }
    });
}

module.exports = {
    getReposForOrg: getReposForOrg,
    getReposForUser: getReposForUser,
};