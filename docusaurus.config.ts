import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Node-side config only (no browser APIs here)
const config: Config = {
  title: "Mabrains Docs",
  tagline: "Agentic EDA & AI-Driven Chip Design Platform",
  favicon: "img/mabrains_logo_simple.svg",

  future: { v4: true },

  url: "https://mabrains.github.io",
  baseUrl: "/docs/",

  organizationName: "mabrains",
  projectName: "docs",

  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-image-zoom"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false, // turn off the sample blog
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.png",
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
    zoom: {
      selector: ".markdown :not(em) > img",
      options: {
        background: "rgba(0,0,0,0.8)",
        margin: 24,
        scrollOffset: 0,
      },
    },

    // ===== NAVBAR =====
    navbar: {
      title: "Mabrains",
      logo: {
        alt: "Mabrains",
        src: "img/mabrains_logo_simple.svg",
        srcDark: "img/mabrains_logo_simple.svg",
        width: 28,
        height: 28,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        { href: "https://mabrains.com", label: "Website", position: "left" },
        {
          href: "https://github.com/mabrains",
          label: "GitHub",
          position: "right",
        },
      ],
    },

    // ===== FOOTER =====
    footer: {
      style: "dark",

      links: [
        {
          title: "Docs",
          items: [
            { label: "Getting Started", to: "/docs/intro" },
            { label: "Chipro", to: "/docs/chipro/overview" },
          ],
        },
        {
          title: "Company",
          items: [
            { label: "Features", href: "https://mabrains.com#features" },
            { label: "Tools", href: "https://mabrains.com#tools" },
            { label: "Careers", href: "https://mabrains.com#careers" },
            { label: "Contact", href: "https://mabrains.com#contact" },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/mabrains",
            },
            {
              label: "LinkedIn",
              href: "https://eg.linkedin.com/company/mabrains",
            },
            {
              label: "X",
              href: "https://x.com/mabrains1",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@mabrains",
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Mabrains. All rights reserved.`,
    },

    // ===== CODE BLOCKS =====
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "go",
        "bash",
        "json",
        "yaml",
        "sql",
        "toml",
        "docker",
      ],
    },

    // ===== ALGOLIA (optional: fill later) =====
    // algolia: {
    //   appId: 'YOUR_APP_ID',
    //   apiKey: 'YOUR_PUBLIC_API_KEY',
    //   indexName: 'mabrains_docs',
    // },

    // ===== ANNOUNCEMENT BAR (optional) =====
    // announcementBar: {
    //   id: 'beta',
    //   content: 'Mabrains Docs is in beta—feedback welcome!',
    //   backgroundColor: 'var(--ifm-color-primary)',
    //   textColor: '#0b1220',
    //   isCloseable: true,
    // },
  } satisfies Preset.ThemeConfig,
};

export default config;
