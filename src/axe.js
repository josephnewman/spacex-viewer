const { configureAxe } = require('jest-axe');

const axe = configureAxe({
  rules: {
    // for demonstration only, don't disable rules that need fixing.
    region: { enabled: false },
    'landmark-banner-is-top-level': { enabled: false },
  },
});

module.exports = axe;
