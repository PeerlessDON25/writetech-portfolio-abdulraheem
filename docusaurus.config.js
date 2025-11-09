// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AbdulRaheem Olurode',
  tagline:
    'This is my portfolio for the WriteTech Accelerator Program, showcasing projects from each module and final deliverables.',
  favicon: 'static/img/favicon-v5.png'
  url: 'https://abdulraheem-docusaurus-site.com',
  baseUrl: '/',

  organizationName: 'PeerlessDON25', // Updated GitHub username
  projectName: 'writetech-portfolio-abdulraheem', // Updated repo name

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    mermaid: true,
    format: 'detect',
    mdx1Compat: {
      comments: true,
      admonitions: true,
      headingIds: true,
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          docItemComponent: '@theme/ApiItem',
          routeBasePath: '/',
          editUrl:
            'https://github.com/PeerlessDON25/writetech-portfolio-abdulraheem',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          breadcrumbs: true,
          sidebarCollapsible: true,
          sidebarCollapsed: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'chimoney',
        docsPluginId: 'classic',
        config: {
          chimoney: {
            specPath: 'docs/api-documentation/api-reference/chimoney-spec.yaml',
            outputDir: 'docs/api-documentation/api-reference/chimoney',
            sidebarOptions: {
              groupPathsBy: 'tag',
            },
          },
        },
      },
    ],
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        docsRouteBasePath: '/docs',
        blogRouteBasePath: '/blog',
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'static/img/favicon-v5.png',

      // Navbar configuration
      navbar: {
        title: 'AbdulRaheem Olurode',
        logo: {
          alt: 'Portfolio Logo',
          src: 'static/img/favicon-v5.png',
        },
        items: [
          { type: 'doc', docId: 'intro', position: 'left', label: 'Docs' },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/PeerlessDON25',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      // Footer configuration
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Tutorial', to: '/docs/intro' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'GitHub', href: 'https://github.com/PeerlessDON25' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AbdulRaheem Olurode.`,
      },

      // Color mode
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      customCssColors: {
        primary: '#0070f3',
        secondary: '#ff4081',
      },
    }),
};

export default config;
