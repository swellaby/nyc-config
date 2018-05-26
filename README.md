# nyc-config
[![npmjs Badge][npmjs-version-badge]][npmjs-pkg-url]
[![npmjs Badge][npmjs-downloads-badge]][npmjs-pkg-url]
[![Circle CI Badge][circle-ci-badge]][circle-ci-url]
[![license Badge][license-badge]][license-url]  

Our various configurations for [nyc][nyc-url] based code coverage. Geared for our specific needs, but feel free to use it if helps you!

## Installation
Install the nyc-config module as a dev dependency:
```sh
npm i @swellaby/nyc-config --save-dev
```

## Usage
Add an `extends` key to your [nyc config file][nyc-config-file-url] and specify the value of the configuration you want to use:

For example, to use our default nyc configuration add the following to your `.nycrc` file:
```json
{
    ...
    "extends": "@swellaby/nyc-config",
    ...
}
```

## nyc Configurations

### base Configuration
Our base configuration defines a couple core configuration settings:

- **reporters** - html, lcov, cobertura, text, and text-summary
- **cache** - true
- **all** -  true
- **per-file** - true

You can utilize our base configuration by adding an `extends` key to your [nyc config file][nyc-config-file-url] and specifying the value of `@swellaby/nyc-config/base`. For example:
```json
{
    ...
    "extends": "@swellaby/nyc-config/base",
    ...
}
```

### Complete Coverage Configuration
Our complete coverage configuration enforces 100% code coverage. It is the default configuration specified by this config module. It extends our [base configuration][base-section] with the following settings:
- **check-coverage** - true
- **lines** - 100
- **statements** - 100
- **functions** - 100
- **branches** - 100

This config will be used by adding the config value to the `extends` key in your [nyc config file][nyc-config-file-url].
```json
{
    ...
    "extends": "@swellaby/nyc-config",
    ...
}
```

### Partial Coverage Configuration 
We also have a configuration that enforces code coverage levels with lower threshold levels. It similarly extends our [base configuration][base-section] but uses defines the following coverage levels:
- **check-coverage** - true
- **lines** - 75
- **statements** - 75
- **functions** - 80
- **branches** - 70

You can utilize our partial coverage configuration by adding an `extends` key to your [nyc config file][nyc-config-url] and specifying the value of `@swellaby/nyc-config/partial-coverage`. For example:
```json
{
    ...
    "extends": "@swellaby/nyc-config/partial-coverage",
    ...
}
```

## API
All configurations are also accessible programmatically and can be accessed via the relevant property after importing the `@swellaby/nyc-config` module. For example:

```js
const nycConfig = require('@swellaby/nyc-config');

const baseConfig = nycConfig.baseConfig;
const partialCoverageConfig = nycConfig.partialCoverageConfig;
```

## License
MIT - see license details [here][license-url]

[npmjs-version-badge]: https://img.shields.io/npm/v/@swellaby/nyc-config.svg
[npmjs-pkg-url]: https://www.npmjs.com/package/@swellaby/nyc-config
[npmjs-downloads-badge]: https://img.shields.io/npm/dt/@swellaby/nyc-config.svg
[circle-ci-badge]: https://circleci.com/gh/swellaby/nyc-config.svg?style=shield
[circle-ci-url]: https://circleci.com/gh/swellaby/nyc-config
[license-url]: https://github.com/swellaby/nyc-config/blob/master/LICENSE
[license-badge]: https://img.shields.io/github/license/swellaby/nyc-config.svg
[nyc-url]: https://www.npmjs.com/package/nyc
[nyc-config-file-url]: https://www.npmjs.com/package/nyc#configuring-nyc
[base-section]: ./README.md#base-configuration