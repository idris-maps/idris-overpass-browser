# idris-overpass

Query the [overpass API](https://wiki.openstreetmap.org/wiki/Overpass_API). Returns a GeoJSON collection.

**WORKS ONLY IN THE BROWSER**
For use in Node, see [idris-overpass](https://www.npmjs.com/package/idris-overpass)

## Install

### With NPM

```
$ npm install idris-overpass-browser
```

and 

```
var getOSM = require('idris-overpass-browser')
```

### Directly in the HTML document

Download **idris-overpass-browser.js** [here](https://raw.githubusercontent.com/idris-maps/idris-overpass-browser/master/dist/idris-overpass-browser.js)

```
<script src="idris-overpass-browser.js"></script>
```

## Usage

**getOSM(config, callback)**

```
var config = {
	bbox: [7.590,47.560,7.595,47.563],
	kv: [{key: 'highway', value: '*'}]
}

getOSM(config, function(geojson) {
	console.log(geojson)
})
```

**config**

* **bbox** (required) [minX, minY, maxX, maxY]
* **kv** (required) an array of objects ```{key: ... , value: ... }```
* **timeout** (optional)
