const fs = require('fs')
const os = require('os')
const wget = require('node-wget-js')
const unzipper = require('unzipper')

function ensureDirExists(dir) {
	if (!fs.existsSync(dir)){
		fs.mkdirSync(dir);
	}
}

const platformMap = {
	darwin: "macos",
	win32: "windows",
	linux: "linux"
}
const archs = ['x32', 'x64']

function getDownloadUrl(version = '2.1.1') {
	const arch = os.arch()
	const platform = platformMap[os.platform()]
	return `https://github.com/tmedwards/tweego/releases/download/v${version}/tweego-${version}-${platform}-${arch}.zip`
}

function supportedSystem() {
	return archs.includes(os.arch()) && platformMap.hasOwnProperty(os.platform())
}

if (supportedSystem()) {
	ensureDirExists('dist')
	console.log("Downloading " + getDownloadUrl())
	wget({
		url: getDownloadUrl(),
		dest: 'dist/archive.zip'},
		function (error) {
			if (error) {
				console.error(error);
			} else {
				console.log('Extracting...')
				fs.createReadStream('dist/archive.zip').pipe(unzipper.Extract({ path: 'dist/bin' }));
			}
		}
	)
}
else {
	console.error(`Your system is not supported (platform: '${os.platform()}' arch: ${os.arch()})`)
}
