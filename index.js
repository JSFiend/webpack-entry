var fs = require('fs');
var path = require('path');
/**
 *
 * @param path   the folder directory
 * @returns {{}}  entry
 */
function getEntries(path, options) {
	var entries = {};
	options = options || {};
	readDir(path, entries, '', options);
	return entries;
}
/**
 *
 * @param path   the file or folder's path
 * @param entries    entry
 * @param dirpath   the folder's path
 */
function readDir(path, entries, dirpath, options) {
	var dir = fs.readdirSync(path);
	dirpath = dirpath ? dirpath + '/' : '';
	dir.map(function (file) {
		var url = path + '/' + file;
		var target = fs.statSync(url);
		if (target.isDirectory()) {
			readDir(url, entries, file, options);
		} else {
			var index = file.lastIndexOf('.');
			var fileName = (function(){
				if(options.dirAsKey) {

					var index = path.lastIndexOf('/');
					if(index == -1) {
						return path;
					} else {
						return path.slice(index + 1);
					}
				} else {
					var index = file.lastIndexOf('.');
					return file.slice(0, index);
				}
			})();
			var fileSuffix = file.slice(index + 1);
			if (fileSuffix == 'js' || fileSuffix == 'jsx' || fileSuffix == 'coffee') {
				entries[fileName] = url;
			}
		}
	})
}

//var entries = getEntries(path.join(__dirname, 'page'), {dirAsKey: true});
//console.log(entries);
module.exports = getEntries;