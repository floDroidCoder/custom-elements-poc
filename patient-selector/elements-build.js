const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/custom-elements/runtime.js',
    './dist/custom-elements/polyfills.js',
    './dist/custom-elements/scripts.js',
    './dist/custom-elements/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/patient-selector.js');
  await fs.copyFile(
    './dist/custom-elements/styles.css',
    'elements/styles.css'
  );
})();