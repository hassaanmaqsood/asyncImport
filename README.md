#Import Module From CDN
This is a Node.js module that allows you to import a module from a CDN URL. It uses the https module to fetch the script code and the vm module to run the code in a sandbox environment.

##Installation

This module can be installed via npm:
```
npm install import-mod
```

##Usage
To use the asyncImport function, simply pass the CDN URL of the module you want to import. The function returns a promise that resolves with the exported module.

```javascript
const asyncImport = require('import-mod');

async function example() {
  const myModule = await asyncImport('https://example.com/mymodule.js');
  myModule.myFunction();
}
```
Note that this function relies on the vm module, which may not be available in all environments (e.g. browser-based JavaScript).

##License
This module is released under the MIT License
