import { Octokit } from '@octokit/rest';
import fs from 'fs';
import { execSync } from 'child_process';

// Custom fetch implementation using node-fetch
import fetch from 'node-fetch';

// For debugging
console.log('Environment variables:', process.env);

// Fix: Set GITHUB_REF manually for local testing
process.env.GITHUB_REF = process.env.GITHUB_REF || 'refs/heads/development'; // Replace 'development' with the default branch name

const branch = process.env.GITHUB_REF.replace('refs/heads/', '');
console.log('Branch:', branch);

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
  request: { fetch },
});

// Get repository owner and name from Git configuration
const repoUrl = execSync('git config --get remote.origin.url').toString().trim();
const repoOwner = repoUrl.match(/github\.com[:/](.*?)\.git/)[1].split('/')[0];
const repoName = repoUrl.match(/github\.com[:/](.*?)\.git/)[1].split('/')[1];

const prTitle = `Auto PR: ${branch}`;
const prTemplatePath = '.github/prTemplate.md';
const prBody = `Auto-generated pull request after push to ${branch}\n\n${fs.readFileSync(prTemplatePath, 'utf-8')}`;

octokit.pulls.create({
  owner: repoOwner,
  repo: repoName,
  title: prTitle,
  head: branch,
  base: 'master',
  body: prBody,
}).then(response => {
  console.log('Pull request created successfully:', response.data);
}).catch(error => {
  console.error('Error creating pull request:', error);
});
