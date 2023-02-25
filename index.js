const https = require('https');
const vm = require('vm');

async function asyncImport(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let scriptCode = '';
      res.on('data', (chunk) => {
        scriptCode += chunk;
      });
      res.on('end', () => {
        const script = new vm.Script(scriptCode);
        const sandbox = {module: {exports:null}};
        const context = new vm.createContext(sandbox);
        script.runInContext(context);
        var exportedModule = sandbox.module.exports || sandbox.exports || sandbox.modExports || sandbox;
        if(Object.hasOwn(exportedModule, 'module')) {
          delete exportedModule.module;
        }
        resolve(exportedModule);
      });
    }).on('error', reject);
  });
}
module.exports = asyncImport;
