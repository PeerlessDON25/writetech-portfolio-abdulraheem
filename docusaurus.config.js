// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AbdulRaheem Olurode',
  tagline:
    'This is my portfolio for the WriteTech Accelerator Program, showcasing projects from each module and final deliverables.',
  favicon: 'static/img/favicon-v5.png',
  url: 'https://abdulraheem-docusaurus-site.com',
  baseUrl: '/',

  organizationName: 'facebook', // Update this later for deployment
  projectName: 'docusaurus', // Update this later for deployment

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
          sidebarPath: './sidebars.js',
          docItemComponent: '@theme/ApiItem', // Required for OpenAPI theme
          routeBasePath: '/', // Serve the docs at the site root
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
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // ✅ OpenAPI Plugin + Theme
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
    // Local search plugin
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

  themes: ['docusaurus-theme-openapi-docs'], // 🔑 Required for API theme

  themeConfig: {
    image: 'static/img/favicon-v5.png',
    navbar: {
      title: 'AbdulRaheem Olurode',
      items: [
        {
          type: 'doc',
          docId: 'Introduction',
          position: 'left',
          label: 'About Me',
        },
        {
          to: '#',
          label: 'Portfolio Projects',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'documentation-tooling/intro',
              label: 'Documentation Tooling',
            },
            {
              type: 'doc',
              docId: 'api-documentation/intro',
              label: 'API Documentation',
            },
            {
              type: 'doc',
              docId: 'docs-automation/intro',
              label: 'Docs Automation',
            },
            {
              type: 'doc',
              docId: 'ai-documentation/intro',
              label: 'AI Documentation',
            },
            {
              type: 'doc',
              docId: 'devops-cloud-documentation/overview',
              label: 'DevOps',
            },
            {
              type: 'doc',
              docId: 'web3-documentation/getting-started',
              label: 'Web3 Documentation',
            },
          ],
        },
        {
          type: 'search',
          position: 'right',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://www.notion.so/abdulraheem-olurode25/My-Portfolio-20272992bc76802e93fadb621fdec00b?source=copy_link',
          label: 'Notion Portfolio',
          position: 'right',
          className: 'button button--primary',
        },
        {
          href: 'https://github.com/PeerlessDON25',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'About Me',
              to: 'https://www.notion.so/abdulraheem-olurode25/My-Portfolio-20272992bc76802e93fadb621fdec00b?source=copy_link',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/TechWriterDON',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/PeerlessDON25/writetech-portfolio-abdulraheem',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Built by AbdulRaheem Olurode – WriteTech Accelerator Program 2025`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;