var fs = require('fs');


/**
 *
 * @param path   the folder directory
 * @returns {{}}  entry
 */
function getEntries(path) {
	var option = {};
	readDir(path, option, '');
	return option;
}
/**
 *
 * @param path   the file or folder's path
 * @param option    entry
 * @param dirpath   the folder's path
 */
function readDir(path, option, dirpath) {
	var dir = fs.readdirSync(path);
	dirpath = dirpath ? dirpath + '/' : '';
	dir.map(function (file) {
		var url = path + '/' + file;
		var target = fs.statSync(url);
		if (target.isDirectory()) {
			readDir(url, option, file);
		} else {
			var index = file.lastIndexOf('.');
			var fileName = file.slice(0, index);
			var fileSuffix = file.slice(index + 1);
			if (fileSuffix == 'js' || fileSuffix == 'jsx' || fileSuffix == 'coffee') {
				option[fileName] = url;
			}
		}
	})
}


module.exports = getEntries;