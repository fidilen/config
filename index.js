'use strict'

const getConfig = () => {
    let environment = process.env?.ENV

    if (!environment) {
        let configuration = require(process.cwd() + `/env/env`)

        environment = configuration.ENV
    }

    return require(process.cwd() + `/env/env-${environment}`)
}

const config = getConfig()

module.exports = config