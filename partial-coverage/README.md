# nyc-config-partial-coverage
Our [nyc][nyc-pkg-url] configuration for enforcing some reasonable minimal code coverage levels. Geared for our specific needs, but feel free to use it if it helps for you!

## Configuration
Extends our [base configuration][base-config-pkg-url] and adds:

- `check-coverage` : true  
- `lines` : 75
- `statements` : 75
- `functions` : 80
- `branches` : 70

## License
MIT - see license details [here][license-url]

[nyc-pkg-url]: https://www.npmjs.com/package/nyc
[base-config-pkg-url]: https://www.npmjs.com/package/@swellaby/nyc-config
[license-url]: https://github.com/swellaby/nyc-config/blob/master/LICENSE