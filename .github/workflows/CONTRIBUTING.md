# TWMP Contribution Guide

## Content style guide
Read our [TWMP Writing Style Guide](writing_style_guide.md) to understand our guidelines for writing and formatting documents. The purpose of our style guide is to ensure consistency in the tone, voice, and structure of our documentation across all articles.

---
# Table of content
- [Contribution workflow](#contribution-workflow)
  - [Fork and clone repositories](#fork-and-clone-repositories)
  - [Report issues and bugs](#report-issues-and-bugs)
  - [Issue management](#issue-management)
  - [Commit messages](#commit-messages)
  - [Branch creation](#branch-creation)
  - [Pull requests](#pull-requests)
  - [Releases](#releases)
  - [Text formats](#text-formats)

## Contribution workflow

### Fork and clone repositories

1. Fork the repository to your own GitHub account by clicking the Fork button at the top of the TWMP GitHub Repo.
2. Clone your fork locally: git clone `https://github.com/your name/Technicalwritingcourse.git`
3. Add the upstream repository to keep your fork synced: git remote add upstream `https://github.com/Technical-writing-mentorship-program/Technicalwritingcourse.git `


### Report issues and bugs
If you find a typo, a broken link, or a technical error on the site, please open a new issue and use the [bug report template](.github/ISSUE_TEMPLATE/bug-report.md). Provide a clear description and a link to the page where the issue exists.

### Issue management 
We use GitHub Issues to manage article pitches:

1. Create an Issue: Use the [article pitch template](.github/ISSUE_TEMPLATE/article-pitch.md).
2. Details: Provide a concise description of your topic (Technical or Non-Technical).
3. Tagging: You must tag @Nickyshe in the issue for approval.

4. Draft Review: Once approved, post a link to your draft (Google Doc/Dropbox) in the issue comments. A mentor will review it here before you move to a PR.

### Commit messages
Follow the [conventional commits](https://www.conventionalcommits.org/) standard. Use clear, imperative messages:

- `feat: add article on cybersecurity documentation`
- `fix: correct typo in API tutorial`

### Branch creation
Create a new branch for every contribution. Name your branch using the following format: `feat/article-topic-name`, for example, `feat/what-is-web3`

### Pull requests
After a mentor approves your draft in the issue:

1. Push your changes to your fork and open a Pull Request (PR).

2. Link the PR to your issue by adding Closes #IssueNumber in the description.

3. Ensure you have followed the [PR Template checklist](.github/pull_request_template.md), including frontmatter and image 

### Releases
The TWMP site uses continuous deployment. Once a maintainer merges your PR into the main branch, your article will be automatically built and published to the live site within a few minutes.

### Text formats
1. **Markdown**: All content must be written in Markdown, while file extensions must be `.mdx`.
2. **Frontmatter**: Every file must start with a YAML block containing `title`, `author`, `date`, `slug`, `description` and `tag`
3. **Images**: Use `.png`, `.jpg`, or `.svg`. Images must be stored in `/blog/img/` dir for blog post. While for documentation, example, `docs/technical-writing-course/img`

---