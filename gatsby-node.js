exports.onCreatePage = ({ page, actions }) => {
  console.log({ page, actions });
  if (page.path.match(/^\/dashboard/ig)) {
    page.matchPath = '/dashboard/*';
    actions.createPage(page);
  }
};
