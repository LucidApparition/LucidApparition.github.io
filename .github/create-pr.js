import { Octokit } from '@octokit/rest';
import fs from 'fs';
import { execSync } from 'child_process';

// Custom fetch implementation using node-fetch
import fetch from 'node-fetch';

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
  request: { fetch },
});

// Get repository owner and name from Git configuration
const repoOwner = execSync('git config --get remote.origin.url')
  .toString()
  .match(/github\.com[:/](.*?)\.git/)[1]
  .split('/')[0];
const repoName = execSync('git config --get remote.origin.url')
  .toString()
  .match(/github\.com[:/](.*?)\.git/)[1]
  .split('/')[1];

const branch = process.env.GITHUB_REF.replace('refs/heads/', '');
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
});
