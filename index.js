const BaseChecker = require('solhint/lib/rules/base-checker');
const lodash = require("lodash");

const ruleId = "no-console-log";
const meta = {
  type: "best-practises",
  docs: {
    description: "Check if there exists any console.log or hardhat/console.sol statements",
    category: "Best Practice Rules",
  },
  isDefault: true,
  recommended: true,
  defaultSetup: ["error"],
  schema: null,
}

const logStatements = [
  "log",
  "logInt",
  "logUint",
  "logString",
  "logBool",
  "logAddress",
  "logBytes",
]

class NoConsoleLog extends BaseChecker {
  constructor(reporter) {
    super(reporter, ruleId, meta);
  }

  isHardHatConsoleImport(node) {
    return (node.type === "ImportDirective") && (node.path === "hardhat/console.sol");
  }

  isConsoleLog(node) {
    for (const len of lodash.range(1,33)) {
      logStatements.push(`logBytes${len}`);
    }
    return (node.expression.expression.name === "console") && (logStatements.includes(node.expression.memberName))
  }

  ImportDirective(node) {
    if (this.isHardHatConsoleImport(node)) {
      this.error(node, '"hardhat/console.sol" is not allowed.');
    }
  }

  FunctionCall(node) {
    if(this.isConsoleLog(node)) {
      this.error(node, `Console statement console.${node.expression.memberName}() is not allowed in production.`)
    }
  }
}

module.exports = [NoConsoleLog];