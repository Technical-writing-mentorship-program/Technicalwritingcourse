---
title: "Introduction to Antora for beginners"
description: "This guide walks you through building a documentation site with Antora and AsciiDoc, including exporting to PDF, HTML, and other formats.
"
summary: ""
date: 2024-02-29T16:27:22+02:00
lastmod: 2023-09-07T16:27:22+02:00
draft: false
weight: 50
categories: [writing contest]
tags: [writing contest]
contributors: [Wisdom Nwokocha]
pinned: false
homepage: false
seo:
  title: "Introduction to Antora for beginners" # custom title (optional)
  description: "This guide walks you through building a documentation site with Antora and AsciiDoc, including exporting to PDF, HTML, and other formats.
" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  noindex: false # false (default) or true
---

# Introduction to Antora for beginners:

Antora is a static site generator that transforms AsciiDoc content into documentation sites.

AsciiDoc is a lightweight markup language for creating notes, articles, books, and web pages. Its simplicity allows complex documents using plain text files.

This guide walks you through building a documentation site with Antora and AsciiDoc, including exporting to PDF, HTML, and other formats.

## **1. Install Antora**

First, make sure you have [**Node.js**](https://nodejs.org/) installed on your system. Then, follow these steps:

1. Create a new directory for your documentation project.

2. Open a terminal and navigate to the project directory.

3. Run the following command to install Antora:

```
   node -e "fs.writeFileSync('package.json', '{}')" && npm i -D -E @antora/cli@3.1 @antora/site-generator@3.1
```

This command creates a `package.json` file and installs the Antora CLI and site generator as development dependencies in your project.

To verify that Antora is installed, run the following command:

```
    npx antora -v
```

If you encounter any issues during the installation, refer to the [official installation guide](https://docs.antora.org/antora/latest/install-and-run-quickstart/).

## **2. Set Up Your Documentation Content**

1. Create an **Antora playbook file** (e.g., `antora-playbook.yml`) in your project directory. This file defines the structure of your documentation.

2. Specify the **content sources** (e.g., Git repositories, local directories) where your documentation files reside.

3. Define the **UI bundle** (e.g., a theme) that Antora will use to generate your site.

{{< callout context="tip" title="Playbook configuration" icon="rocket" >}}
A playbook is a configuration file that tells Antora where to find the content and UI resources it needs to generate a documentation site.
{{< /callout >}}

To create a playbook, follow these steps:

1. Using your preferred text editor or IDE, create a new file.

2. Populate the file with the configuration information provided below.

```
    site:
      title: Antora Docs
      start_page: component-b::index.adoc
    content:
      sources:
      - url: https://gitlab.com/antora/demo/demo-component-a.git
        branches: HEAD
      - url: https://gitlab.com/antora/demo/demo-component-b.git
        branches: [v2.0, v1.0]
        start_path: docs
    ui:
      bundle:
        url: https://gitlab.com/antora/antora-ui-default/-/jobs/artifacts/HEAD/raw/build/ui-bundle.zip?job=bundle-stable
        snapshot: true
```

{{< callout context="tip" title="This is the default playbook configuration from Antora." icon="rocket" >}}
{{< /callout >}}

This playbook file will create a site using the [Antora demo repositories](https://gitlab.com/antora/demo).

Save the file as `antora-playbook.yml` in the root folder.

- **Site**: Contains the documentation site’s title and start page.
- **Content**: Specifies content repository locations.
- **UI**: Defines the location of the UI bundle.
- **URL**: Content repository URL.
- **Branches**: Selected branches from the content repository.
- **Start Path**: Root path in the content repository.
- **Bundle**: UI bundle URL.
- **Snapshot**: Determines whether to use the UI bundle as a snapshot.

## **3. Generate Your Documentation Site**

1. In the terminal, navigate to your project directory.

2. Run the following command to generate your site in the root folder:

```
    npx antora generate antora-playbook.yml
```

This command tells Antora to generate the documentation site in this folder `build/site` using your created playbook.

![](https://paper-attachments.dropboxusercontent.com/s_040DBEFCD010CD9D72D8F68E5F48F297CEBF454A18B2565E8A617E8894CB0609_1708794254984_Screenshot+2024-02-24+at+18.03.55.png)

{{< callout context="tip" title="Site generation complete!" icon="rocket" >}}
{{< /callout >}}

Open file:///Users/wisdomnwokocha/Desktop/Doctest/build/site/index.html in a browser to view your site.

Copy the URL and open the `index.html` file in your browser to see the result.

![](https://paper-attachments.dropboxusercontent.com/s_040DBEFCD010CD9D72D8F68E5F48F297CEBF454A18B2565E8A617E8894CB0609_1708794318119_Screenshot+2024-02-24+at+18.05.04.png)

To run Antora remotely, use the following command:

```
    npx antora -fetch antora-playbook.yml
```

{{< callout context="tip" title="Add this flag `--fetch` to fetch from a remote repo." icon="rocket" >}}
{{< /callout >}}

Antora will clone the content and UI repositories and generate your documentation site to the default output directory.

Congratulations!

You’ve successfully built your first site with Antora.

## **Basic Syntax**

Now that you’ve created a documentation site, it’s time to learn how to create content using AsciiDoc.

To create content in **AsciiDoc**, you need to understand basic syntax.

Here’s a simple example:

```
    = Getting Started with Antora
    John Doe <john.doe@asciidoctor.org>

    == Section 1

    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis metus at est scelerisque, nec faucibus neque dapibus. Duis vitae mi at eros tincidunt consequat.

    === Subsection 1.1

    Integer eget nibh nec nulla euismod finibus. Proin non ipsum vel leo rhoncus venenatis. Nam nec pharetra lorem.

    .Table Title
    |===
    |Name of Column 1 |Name of Column 2 |Name of Column 3

    |Cell in column 1, row 1
    |Cell in column 2, row 1
    |Cell in column 3, row 1

    |Cell in column 1, row 2
    |Cell in column 2, row 2
    |Cell in column 3, row 2
    |===
```

This example demonstrates the basic structure of an AsciiDoc document.

- The `=` character is used to define the document title.
- The `==` characters are used to define the section titles.
- The `===` characters are used to define the subsection titles.
- The `<>` character is used to define the author’s email address.

To learn more about the syntax, refer to the [AsciiDoctor Quick Syntax Reference](https://docs.asciidoctor.org/asciidoc/latest/syntax-quick-reference/).

## 4. Export as PDF, HTML, DocBook

You can export your AsciiDoc documents to PDF, HTML, and DocBook formats.

An easy way to export your documents is to use the AsciiDoc extension for Visual Studio Code.

**AsciiDoc Extension for VSCode**
To use the AsciiDoc extension for Visual Studio Code, you need to install it from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=asciidoctor.asciidoctor-vscode).

{{< callout context="tip" title="Make sure the extension you install is published by Asciidoctor." icon="rocket" >}}
{{< /callout >}}

The extension looks like this:

![Figure 1. AsciiDoc Extension for Visual Studio Code](https://paper-attachments.dropboxusercontent.com/s_E9BDCFC0C93DDDA993B60CF9314B6A3AD4616C2100C9F1602C752A57FE01CAE2_1707822679177_Screenshot+2024-02-13+at+12.10.10.png)

After installation, ensure the extension is enabled in your Visual Studio Code settings.

**Export as PDF**
To export your AsciiDoc document as a PDF, follow these steps:

1. Open the command palette using the following command:
   ctrl+shift+p // On Windows. Alternatively, use F1.
   cmd+shift+p // On Mac

2. Select `AsciiDoc: Export document as PDF`.
   ![Figure 2. Export document as PDF](https://paper-attachments.dropboxusercontent.com/s_4FE4BC8304E498F537D34F4A70D29DBE4E6CE923A3D9678B32EB9B22AE3F151E_1708342476453_PDF.png)

3. The AsciiDoc extension will prompt you to select the PDF's desired file name and location.

**Save as HTML**
To generate HTML from your Asciidoc file, follow the steps below:

1. Open the command palette.

2. Select `AsciiDoc: Save HTML document`.
   ![Figure 3. Save document as HTML](https://paper-attachments.dropboxusercontent.com/s_4FE4BC8304E498F537D34F4A70D29DBE4E6CE923A3D9678B32EB9B22AE3F151E_1708342556831_HTML.png)

3. The file is generated in the same folder as the source document.

To quickly do this, use the shortcut keys below:

```
     ctrl+alt+s \\ On Windows
     cmd+alt+s \\ On Mac
```

**Save to DocBook**
Docbook is another type of markup language used in technical documentation.

To save your AsciiDoc file to Docbook, follow the steps below:

1. From the command palette.

2. Select `AsciiDoc: Save to DocBook`.

   ![Figure 4. Save document to DocBook](https://paper-attachments.dropboxusercontent.com/s_4FE4BC8304E498F537D34F4A70D29DBE4E6CE923A3D9678B32EB9B22AE3F151E_1708342601608_DocBook.png)

3. The file is generated in the same folder as the source document.

{{< callout context="note" title="Only DocBook 5 is supported." icon="rocket" >}}
{{< /callout >}}

## 5. Customize your Playbook and publish Antora on Github

- Create a `/docs` in the root folder of your project.

- Copy the content from the [GitHub repository’s](https://github.com/wise4rmgod/antora) `docs` folder into your own.

- Modify the content as needed.

**Work Offline:**

- Run the following command to generate your site using the modified playbook:

```
    npx antora antora-playbook.yml
```

**Update Your Playbook:**

- Edit your playbook (`antora-playbook.yml`) with the following configurations:

  > Your URL is pointing to the root folder (.)

```
      site:
        title: Wizzy Docs
        start_page: component-b::index.adoc
      content:
        sources:
          - url: .
            start_path: docs
      ui:
        bundle:
          url: ./ui-bundle
      antora:
        extensions:
          - "@antora/lunr-extension"
```

- Push all changes to your GitHub repository.
- Configure GitHub Pages for your repo[Link to do this on Github].
- Use the following Git Action workflow to deploy your Antora page to GitHub Pages:

> Ensure you have enabled your repository's GitHub Pages by creating a gh-pages branch.

    # Simple workflow for deploying static content to GitHub Pages

```
    name: Deploy Antora static content to Pages
    on:
      # Runs on pushes targeting the default branch
      push:
        branches: ["main"]
      # Allows you to run this workflow manually from the Actions tab
      workflow_dispatch:
    # Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
    permissions:
      contents: write
      pages: write
      id-token: write
    # Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
    # However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
    concurrency:
      group: "pages"
      cancel-in-progress: false
    jobs:
      deploy:
        environment:
          name: github-pages
          url: ${{ steps.deployment.outputs.page_url }}
        runs-on: ubuntu-latest
        steps:
          - name: Checkout
            uses: actions/checkout@v4
          - name: Setup Pages
            uses: actions/configure-pages@v4
          - name: Upload artifact
            uses: actions/upload-pages-artifact@v3
            with:
              # Upload entire repository
              path: "./build/site"
          - name: Deploy to GitHub Pages
            id: deployment
            uses: actions/deploy-pages@v4
            with:
              github_token: ${{ secrets.GITHUB_TOKEN }}
              publish_dir: ./build/site # Update this to match your Antora output directory
```

**To Publish Your Changes:**

1. **Make Edits**: Update your documentation files as needed.

2. **Commit**: Commit your changes to Git.

3. **Push to GitHub**: Always push your changes to GitHub.

4. **Live Updates**: Your updated content will be live once it’s pushed to the repository.

## 6. Azure DevOps pipeline for publishing Antora Page to AzureStaticWeb:

**Follow the Same Process as GitHub**:

- Just like you did for GitHub, follow a similar process for AzureStaticWebApp.
- Make sure your documentation is ready and committed in your repository.

**Create an Azure Pages Workflow**:

- Set up a workflow file (e.g., `azure-pages.yml`) in your repository.
- This workflow will deploy your Antora page to AzureStaticWebApp.

```
    name: Azure Static Web Apps CI/CD
    pr:
      branches:
        include:
          - main
    trigger:
      branches:
        include:
          - main
    jobs:
      - job: build_and_deploy_job
        displayName: Build and Deploy Job
        condition: or(eq(variables['Build.Reason'], 'Manual'),or(eq(variables['Build.Reason'], 'PullRequest'),eq(variables['Build.Reason'], 'IndividualCI')))
        pool:
          vmImage: ubuntu-latest
        steps:
          - checkout: self
            submodules: false
          - task: AzureStaticWebApp@0
            inputs:
              azure_static_web_apps_api_token: [TOKEN-HERE]
              ###### Repository/Build Configurations - These values can be configured to match your app requirements. ######
              # For more information regarding Static Web App workflow configurations, please visit: https://aka.ms/swaworkflowconfig
              app_location: "./" # App source code path
              app_build_command: "npx antora --fetch antora-playbook.yml"
              api_location: "" # Api source code path - optional
              output_location: "./build/site" # Built app content directory - optional
    ###### End of Repository/Build Configurations ######
```

## **Conclusion**
