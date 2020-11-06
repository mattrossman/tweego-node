# tweego-node

Convenience node wrapper for Tweego.

Upon install, this downloads the appropriate Tweego release for your platform/arch, extracts it, and removes the archive.

The `tweego` bin links to a `run.js` script that spawns the extracted executable with the `TWEEGO_PATH` environment variable pointing to the extracted storyformats.

## Usage
```
npm install /path/to/tweego-node
// OR
yarn add /path/to/tweego-node
```
and in `package.json`:
```json
"scripts" {
	"build": "tweego -o index.html inputfile.twee"
}
```