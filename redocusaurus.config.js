// @ts-check

/** @type {import('redocusaurus').PresetEntry} */
const redocusaurus = [
  'redocusaurus',
  {
    specs: [
      {
        spec: 'docs/api-documentation/api-reference/chimoney/chimoney-spec.yaml',
        route: '/api/',
      },
    ],
    theme: {
      primaryColor: '#1DB954', // Spotify green to match your theme
      options: {
        hideDownloadButton: false,
        disableSearch: false,
        expandResponses: '200,201',
        expandSingleSchemaField: true,
        jsonSampleExpandLevel: 5,
        sortPropsAlphabetically: true,
        hideLoading: false,
        nativeScrollbars: true,
        onlyRequiredInSamples: false,
        pathInMiddlePanel: true,
        requiredPropsFirst: true,
        scrollYOffset: 60,
        showExtensions: true,
      },
    },
  },
];

module.exports = redocusaurus;
