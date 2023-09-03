# config
Easy-to-use configuration system for environment variables.
The main goal of this is to save projects from using `process.env` while keeping the convenience of referencing the variables across a project.


## Setup
- New folder `config` in the root directory.
- New `env.json` under the `config` folder.
- Set `ENV` as either `dev`, `prod`, or any other keyword.
  - Create a new JSON file in the same directory with suffix after the keyword (eg. `env-dev.json`)
  - Otherwise, default config is the `env.json`

> Note:
> You should add `config` in your `.gitignore` if you don't want to have these included in your commits.

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
    "VARIABLE_NAME": "123"
}
```


## Usage
```js
const config = require('@lena/config');

console.log(config.VARIABLE_NAME);
```