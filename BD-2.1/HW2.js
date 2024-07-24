const express = require("express");
const app = express();

let githubPublicData = {
  username: "ankit123",
  fullname: "Ankit Kumar",
  email: "ankit@gmail.com",
  repositories: 24,
  gists: 12,
  joinedOn: "Sep 2018"
}

function getProfileUrl(githubPublicData)
{
  return "https://github.com/" + githubPublicData.username;
}

app.get("/github-profile",(req,res) => {
  let githubProfileUrl = getProfileUrl(githubPublicData);
  res.json({"profileUrl": githubProfileUrl});
});

function getPublicEmail(githubPublicData)
{
  return githubPublicData.email;
}

app.get("/github-public-email",(req,res) => {
  let publicEmail = getPublicEmail(githubPublicData);
  res.json({"publicEmail": publicEmail});
});

function getReposCount(githubPublicData)
{
  return githubPublicData.repositories;
}

app.get("/github-repos-count",(req,res) => 
  {
    let reposCount = getReposCount(githubPublicData);
    res.json({"reposCount": reposCount});
  });

function getGistsCount(githubPublicData)
{
return githubPublicData.gists;  
}

app.get("/github-gists-count",(req,res) => 
  {
let gistsCount = getGistsCount(githubPublicData);
    res.json({"gistsCount": gistsCount});
  });

function getUserBio(githubPublicData)
{
  return {
    fullName: githubPublicData.fullname,
    joinedOn: githubPublicData.joinedOn,
    email: githubPublicData.email
  };
}

app.get("/github-user-bio",(req,res) => {
  let userBio = getUserBio(githubPublicData);
  res.json(userBio);
});

function getRepoUrl(githubPublicData, repoName)
{
return "https://github.com/" + githubPublicData.username + "/" + repoName;  
}

app.get("/github-repo-url",(req,res) => 
  {
    let repoName = req.query.repoName;
    let repoUrl = getRepoUrl(githubPublicData, repoName);
    res.json({"repoUrl": repoUrl});
  });

const PORT = 3000;
app.listen(PORT,() => 
  {
    console.log(`Server is running at http://localhost:${PORT}`);
  });