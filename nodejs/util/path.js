const path = require("path");

// filename of the main module, in this case 'app.js'
// The filename property of the main module contains the absolute path to the file.
module.exports = path.dirname(require.main.filename);
