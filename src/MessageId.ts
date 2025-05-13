export const MessageId = {
  // log and messages
  log: "log",
  showMessage: "showMessage",

  // terminal messages
  runCommand: "command",
  createTerminal: "createTerminal",
  showTerminal: "showTerminal",
  hideTerminal: "hideTerminal",
  disposeTerminal: "disposeTerminal",
  isTerminalRunning: "isTerminalRunning",
  terminalOutput: "terminalOutput",
  runBuildCommand: "runBuildCommand",
  buildCommandRunSuccess: "buildCommandRunSuccess",
  buildCommandFailed: "buildCommandFailed",

  // file data
  getSolFiles: "getSolFiles",
  getAbi: "getAbi",
  getCurrentWorkingDirectory: "getCurrentWorkingDirectory",

  //interaction check
  deployFlag: "canDeployFlag",
  deployFlagSuccess: "deployFlagSuccess",
};

export const Terminals = {
  anvilTerminal: "anvilTerminal",
  commandTerminal: "commandTerminal",
};

export const VSCodeMessage = {
  error: "error",
  info: "info",
  warning: "warning",
};
