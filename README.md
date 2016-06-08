
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
var entry = getEntries(path.join(__dirname, 'page'));
```
# output
```javascript
{ app: './page/app.js',
  home: './page/home/home.js',
  index: './page/index/index.js',
  second: './page/index/second/second.js' 
}
```

# folder directory 
The page folder directory structure.
```
|____home
| |____admin
| | |____index.js
| |____index.js
|____index
| |____index.js

```
# Usage
```javascript
var getEntries = require('webpack-entry');
var entry = getEntries(path.join(__dirname, 'page'), {dirAsKey: true});
```
# output
```javascript
{ admin: '/page/home/admin/index.js',
  home: '/page/home/index.js',
  index: '/page/index/index.js' }
```


