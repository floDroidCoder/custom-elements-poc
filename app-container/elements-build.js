const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/app-container/es2015-polyfills.js',
    './dist/app-container/scripts.js',
    './dist/app-container/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/app-container.js');
  // await fs.copyFile(
  //   './dist/app-container/styles.css',
  //   'elements/styles.css'
  // );
})();