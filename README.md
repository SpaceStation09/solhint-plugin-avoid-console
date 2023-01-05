# Solhint-plugin-ban-console

This solhint plugin helps avoid the usage of console statement in production env.

## Install

```bash
npm install --save-dev solhint-plugin-ban-console
```

## Usage

Add the following info to your solhint configuration:

```json
{
  "plugins": ["ban-console"],
  "rules": {
    "ban-console/no-console-log": "error"
  }
}
```

## LICENSE

[MIT License](LICENSE)