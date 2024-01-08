# Technicalwritingcourse

This repo contains resources to help you kickstat your technical writing career.

## How to contribute to this project

1. Clone the project:

```bash
git clone https://github.com/Technical-writing-mentorship-program/Technicalwritingcourse.git
```

2. Install dependencies:

Navigate to the cloned project directory and install the project's dependencies:

```bash
cd Technicalwritingcourse
npm install
npm install @hyas/doks-core@lastest
```

3.  Add your content:

Open the project in your preferred code editor and locate the `content/docs/Technical` writing course directory. Create a new Markdown file (.md) for your topic and add your content.
Make sure to include the frontmatter information:

```bash
---

title: "Intro to technical writing"

description: "Guides lead a user through a specific task they want to accomplish, often with a sequence of steps."

summary: ""

date: 2023-08-07T16:04:48+02:00

lastmod: 2023-09-07T16:04:48+02:00

draft: false

menu:

  docs:

    parent: ""

    identifier: "example-6a1a6be4373e933280d78ea53de6158e"

    weight: 810

toc: true

seo:

  title: "" # custom title (optional)

  description: "" # custom description (recommended)

  canonical: "" # custom canonical URL (optional)

  noindex: false # false (default) or true

---
```

4. Preview your changes:

To preview your changes before publishing, run the project with Hugo server:

```bash
hugo server
```
