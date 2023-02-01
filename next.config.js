const pathPrefix = process.env.DEPLOY_TARGET === 'gh-pages'
  ? '/benjaminsolano'
  : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};
