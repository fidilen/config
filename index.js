'use strict';

const getConfig = () => {
    let configuration = require(process.cwd() + `/config/env.json`);

    if (configuration.ENV) {
        configuration = require(process.cwd() + `/config/env-${configuration.ENV}.json`);
    }

    return configuration;
};

const config = getConfig();

module.exports = config;