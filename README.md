
# webpack-entry introduction
webpack-entry is a module support folder directory as webpack's entrance.


# folder directory 
The page folder directory structure.
```
|____app.js
|____app.less
|____home
| |____home.js
| |____home.less
|____index
| |____index.js
| |____index.less
| |____second
| | |____second.js
| | |____second.less

```
# Usage
```javascript
var getEntries = require('webpack-entry');
var entry = getEntries(path.join(__dirname, './src/js/page'));
```
# output
```javascript
{ app: './src/js/page/app.js',
  home: './src/js/page/home/home.js',
  index: './src/js/page/index/index.js',
  second: './src/js/page/index/second/second.js' 
}
```


