import * as sst from "@serverless-stack/resources";

export default class MyStack extends sst.Stack {
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create a HTTP API
    const site = new sst.StaticSite(this, "Site", {
      path: "site",
      buildOutput: "dist",
      buildCommand: "npm run generate",
      errorPage: sst.StaticSiteErrorOptions.REDIRECT_TO_INDEX_PAGE,
    });

    // Show the endpoint in the output
    this.addOutputs({
      "URL": site.url,
    });
  }
}
