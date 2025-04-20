# Contributing To The Technical Writers Mentorship Program Documentation

Hurray! I'm glad you are here ✨.

This is the first step in making your contribution to the Technical Writers Mentorship Program Documentation.

This document will serve as a guide for contributing to the community. Follow the steps stated below carefully.

We can't wait to see your outstanding issues and pull requests.

## Ground Rules

Here at the Technical Writers Mentorship Program, we welcome everyone to contribute to this documentation as a way to give back to the community.

You can contribute in several ways, such as adding new content to our blog or creating issues for bugs you find in the documentation such as broken links, typos, etc.

Having several means of contributing means working with lots of individuals which is very good for the growth 📈 of the community but most times, can lead to conflicting interests and points of view 👈👉.

Below are set of rules 📖 that guide individuals contributing to our community:

- **Openness** 👐: Collaboration is only possible if everyone is open to sharing ideas.
- **Respect** 👨🏾‍🤝‍👨🏽: Having respect for everyone, their skills and opinions are paramount.
- **Welcoming tone** 😇: You are expected to interact optimistically and cheerfully with others.

## Your First Contribution

Is this your first time contributing to an open-source project? If yes, then you are in the right place.

Here is a [great tutorial](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github) on how to contribute to an open-source project.

After going through the tutorial, you can return here for your first contribution.

You must have seen a bug 🐞 or a typo in the documentation or have an amazing content idea for the blog. This is where you create your first issue.

### Steps to open a new issue

- **Step 1**: On the Technical Writers Mentorship Program repository, navigate to the **Issues** button.

  ![Issues](/assets/images/issues.png)

- **Step 2**: Scan through the currently opened issues to see if your issue(s) have been listed earlier.

  ![Add Issue](/assets/images/add-issue.png)

- **Step 3**: If your issue(s) hasn't been listed yet, click the **New issue** button at the top right corner to add your new issue.
- **Step 4**: Time to add your amazing issue. You add the title and a brief description of the issue. For further explanation, images can be added as well.

  ![Input issue](/assets/images/input-issue.png)

- **Step 5**: Click on the **Submit new issue** button to submit the issue.

  ![Submit issue](/assets/images/submit-issue.png)

Yes! You just added your first issue. The documentation editors will review your issue and resolve it if it's a bug or a typo or assign it to you if the issue is a good fit for the community.

## Getting Started

The steps below will guide you on how to make your first contribution to the Technical Writers Mentorship Program Documentation.

- **Fork the repository**. Click on the **Fork** button at the top right corner of the page. This will create a copy of the repository in your account.

  ![Fork](/assets/images/fork.png)

- **Clone the repository** you forked to your local machine. To do this, you can use the command below.

  ```bash
  git clone https://github.com/YOUR-USERNAME/Technicalwritingcourse.git
  ```

  For Windows users, you can use the command below.

  ```bash
  git clone -c core.protectNTFS=false https://github.com/Technical-writing-mentorship-program/Technicalwritingcourse.git
  ```

  Replace `YOUR-USERNAME` with your GitHub username.

- **Navigate to the cloned directory**. To do this, you can use the command below.

  ```bash
  cd technicalwritingcourse
  ```

- **Install all the dependencies**. To do this, you can use the command below.

  ```bash
  npm install
  ```

- **Make a new branch**. To do this, you can use the command below.

  ```bash
  git checkout -b "Your Branch Name"
  ```

  A good branch name would begin with the issue ticket and the assigned issue. For example, if you are working on issue #343 and the issue is to add a new page, your branch name would be `#343-add-new-page`.

  ```bash
  git checkout -b "#343-add-new-page"
  ```

- **Make your changes**.

  - If you're adding new content to the blog, navigate to **content** > **blog** and create a new markdown file with the title of your blog post.
  - If you're fixing a bug or a typo, navigate to **content** > **docs** > **TechnicalWritingCourse** and find the file with the bug or typo.

- **Add an image**. You need a remote image URL to add an image to your blog post. Utilize dev.to to upload your image and get the URL. Use the following syntax to add an image:

  ```html
  <img src="IMAGE-URL" alt="IMAGE-DESCRIPTION" width="100%" />
  ```

  Replace `IMAGE-URL` with the URL of your image and `IMAGE-DESCRIPTION` with a brief description of your image.

- **Test your changes**. To do this, you can use the command below.

  ```bash
  npm run dev
  ```

  This will start a local server where you can preview your changes.

- **Commit your changes**. To do this, you can use the commands below.

  ```bash
  git add .
  git commit -m "Your commit message"
  ```

  A good commit message would be a brief description of your changes. For example, if you added a new blog post, your commit message would be `feat: add NEW BLOG POST`.

  Replace `NEW BLOG POST` with the title of your blog post.

- **Push your changes**. To do this, you can use the command below.

  ```bash
    git push origin "Your Branch Name"
  ```

After pushing your changes, you can head to the GitHub repository and click the **Contribute** button.

This will take you to the pull request page to submit your pull request.

## Docs Review Process

The documentation editors will review your pull request and either merge it if it's a good fit for the community or request changes if there are issues with your pull request.

You should get a response within 72 hours of submitting your pull request. You can close a pull request if shows no activity after two weeks.

## Best Practices

The following are the seven (7) best practices to follow when contributing to our community:

1. **ALWAYS** pull the latest changes from the main branch before making your changes. This will help you avoid merge conflicts.
2. **ALWAYS** Make your changes in a new branch. This will help you keep your changes separate from the main branch.
3. **ALWAYS** Make sure your commit messages are clear and concise. This will help the editors understand the changes you made.
4. **ALWAYS** Make sure your pull request is linked to an issue. This will help the editors understand the context of your changes.
5. **ALWAYS** Make sure your pull request is linked to the main branch. This will help the editors review your changes.
6. **ALWAYS** Use the same frontmatter format as the `index.html` file when creating a new blog post.
7. **ALWAYS** Make sure to test your changes before submitting your pull request.
