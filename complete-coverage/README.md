# nyc-config-complete-coverage
Our [nyc][nyc-pkg-url] configuration for enforcing 100% code coverage. Geared for our specific needs, but feel free to use it if it helps for you!

## Configuration
Extends our [base configuration][base-config-pkg-url] and adds:

- `check-coverage` : true  
- `lines` : 100
- `statements` : 100
- `functions` : 100
- `branches` : 100

## License
MIT - see license details [here][license-url]

[nyc-pkg-url]: https://www.npmjs.com/package/nyc
[base-config-pkg-url]: https://www.npmjs.com/package/@swellaby/nyc-config
[license-url]: https://github.com/swellaby/nyc-config/blob/master/LICENSE