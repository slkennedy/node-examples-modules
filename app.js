var github = require("./github.js");

github.getReposForOrg("unumux", function(repos) {
    console.log(repos);
});

github.getReposForOrg("github", function(repos) {
    console.log(repos);
});

github.getReposForUser("slkennedy", function(repos) {
    console.log(repos);
});

github.getReposForUser("chuckhendo", function(repos) {
    console.log(repos);
});