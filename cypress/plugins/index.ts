const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = (on) => registerReportPortalPlugin(on);
