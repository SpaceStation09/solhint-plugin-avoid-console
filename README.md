# Solhint-plugin-avoid-console

This solhint plugin helps avoid the usage of console statement in production env.

## Install

```bash
npm install --save-dev solhint-plugin-avoid-console
```

## Usage

Add the following info to your solhint configuration:

```json
{
  "plugins": ["avoid-console"],
  "rules": {
    "avoid-console/no-console-log": "error"
  }
}
```

## LICENSE

[MIT License](LICENSE)