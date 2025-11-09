module.exports = {
  chimoney: {
    specPath: "openapi/chimoney.yaml", // Path to your OpenAPI spec
    outputDir: "docs/chimoney-api",   
    sidebarOptions: {
      groupPathsBy: "tag",
      categoryLinkSource: "tag",
    },
  },
};
