const withSass = require('@zeit/next-sass');
const withTranspiledModules = require('next-transpile-modules')(['react-syntax-highlighter']);

module.exports = withSass(withTranspiledModules());
