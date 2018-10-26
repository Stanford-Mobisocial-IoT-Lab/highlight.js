var hljs = require('./highlight');

hljs.registerLanguage('javascript', require('./languages/javascript'));
hljs.registerLanguage('tt', require('./languages/tt'));

module.exports = hljs;