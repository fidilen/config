'use strict';

const config = () => {
    const configuration = require(process.cwd() + `/config/env.json`);

    if (configuration.ENV) {
        configuration = require(process.cwd() + `/config/env-${configuration.ENV}.json`);
    }

    return configuration;
};

module.exports = config;