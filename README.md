# config
Easy-to-use configuration system for environment variables.
The main goal of this is to save projects from using `process.env` while keeping the convenience of referencing the variables across a project.


## Setup
- New folder `config` in the root directory.
- New `env.json` under the `config` folder.
- Set `ENV` as either `dev`, `prod`, or any other keyword.
  - Create a new JSON file in the same directory with suffix after the keyword (eg. `env-dev.json`)
  - Otherwise, default config is the `env.json`

### Examples
- `env.json`
```json
{
    "ENV": "dev"
}
```

- `env-dev.json`
```json
{
    "TOKEN": "123",
    .
    .
    .
}
```


## Usage
```js
const config = require('@lena/config');

console.log(config.VARIABLE_NAME);
```