// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AbdulRaheem Olurode',
  tagline:
    'This is my portfolio for the WriteTech Accelerator Program, showcasing projects from each module and final deliverables.',
  favicon: 'static/img/favicon-v5.png',
  url: 'https://abdulraheem-docusaurus-site.com',
  baseUrl: '/',

  organizationName: 'facebook', // Update this later
  projectName: 'docusaurus', // Update this later

  onBrokenLinks: 'ignore',
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
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem',
          routeBasePath: '/',
          editUrl:
            'https://github.com/PeerlessDON25/writetech-portfolio-abdulraheem',
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
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
          customCss: './src/css/custom.css',
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

  themeConfig: {
    image: 'static/img/favicon-v5.png',

    // ✅ Explicit color configuration
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    customCssColors: {
      primary: '#0070f3',               // main primary color
      secondary: '#ff4081',             // optional secondary color
