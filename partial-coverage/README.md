# nyc-config-partial-coverage
Our [nyc][nyc-pkg-url] configuration for enforcing some reasonable minimal code coverage levels. Geared for our specific needs, but feel free to use it if it helps for you!  
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url] [![license Badge][license-badge]][license-url]

## Configuration
Extends our [base configuration][base-config-pkg-url] and adds:

* `check-coverage` : true  
* `lines` : 75
* `statements` : 75
* `functions` : 80
* `branches` : 70

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/nyc-config-partial-coverage.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/nyc-config-partial-coverage
[nyc-pkg-url]: https://www.npmjs.com/package/nyc
[base-config-pkg-url]: https://www.npmjs.com/package/@swellaby/nyc-config
[license-url]: https://github.com/swellaby/nyc-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/nyc-config.svg