'use strict';

const getConfig = () => {
    let configuration = require(process.cwd() + `/env/env.json`);

    if (configuration.ENV) {
        configuration = require(process.cwd() + `/env/env-${configuration.ENV}.json`);
    }

    return configuration;
};

const config = getConfig();

module.exports = config;