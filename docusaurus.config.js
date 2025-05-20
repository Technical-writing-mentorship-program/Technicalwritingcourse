// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Technical Writing Mentorship Program",
  tagline: "TWMP",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://technicalwritingmp.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Technical Writing mentorship program", // Usually your GitHub org/user name.
  projectName: "Technical Writing Course", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            "https://github.com/Technical-writing-mentorship-program/Technicalwritingcourse",
        },
        blog: {
          showReadingTime: true,
          blogTitle: "Technical Writing Mentorship Program Blog",
          blogDescription: "Technical Writing Mentorship Program Blog",
          blogSidebarTitle: "All posts",
          blogSidebarCount: "ALL",
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-999X9XX9XX",
          anonymizeIP: true,
        },

        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
        },

        googleTagManager: {
          containerId: "GTM-12345",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "TWMP",
        logo: {
          alt: "TWMP logo",
          src: "img/favicon.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Academy",
          },

          { to: "/blog", label: "Blog", position: "left" },
          { to: "/write-for-us", label: "Write for us", position: "left" },

          {
            href: "https://github.com/Technical-writing-mentorship-program/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      //TOC
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Learn",
            items: [
              {
                label: "Academy",
                to: "/docs/category/technical-writing-course",
              },
              {
                label: "YouTube",
                to: "https://www.youtube.com/@TechnicalWriti6",
              },
              {
                label: "Blog",
                to: "/blog",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/UC4QEsE8",
              },
              {
                label: "X",
                href: "https://twitter.com/TechnicalWriti6",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/company/technical-writing-mentorship-program",
              },
              {
                label: "GitHub",
                to: "https://github.com/Technical-writing-mentorship-program/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Trusted Talent",
                to: "/trusted-talent",
              },
              {
                label: "Build Your Portfolio",
                to: "/portfolio",
              },
              {
                label: "About us",
                to: "/about",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Technical Writing Mentorship Program`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Geist:wght@100..900&family=Instrument+Sans:ital,wght@0,400..700;1,400..700&display=swap",
  ],
};

export default config;
