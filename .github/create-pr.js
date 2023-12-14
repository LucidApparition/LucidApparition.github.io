import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GH_TOKEN,
});

const branch = process.env.GITHUB_REF.replace('refs/heads/', '');
const prTitle = `Auto PR: ${branch}`;
const prBody = `Auto-generated pull request after push to ${branch}\n\n${cat .github/prTemplate.md}`;

octokit.pulls.create({
  owner: 'your-username',
  repo: 'your-repo',
  title: prTitle,
  head: branch,
  base: 'master',
  body: prBody,
});
