var request = require('request');

var opts = {
  headers: {
    'User-Agent': 'UnumUX Test App'
  }
};

function getReposForOrg(org, cb) {
    var requestUrl = `https://api.github.com/orgs/${org}/repos`;
    helperFunction(requestUrl, cb)
}

function getReposForUser(user, cb) {
    var requestUrl = `https://api.github.com/users/${user}/repos`;
    helperFunction(requestUrl, cb)
}

function helperFunction(url, cb) {
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