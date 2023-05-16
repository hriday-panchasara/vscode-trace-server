import * as vscode from "vscode";
import { TraceServer } from "./trace-server";

const server = new TraceServer();
const extensionId = "vscode-trace-server";
const start = extensionId + ".start";
const stop = extensionId + ".stop";
const startIfStopped = extensionId + ".start-if-stopped";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(registerStart());
  context.subscriptions.push(registerStop());
  context.subscriptions.push(registerStartIfStopped());
}

export function deactivate() {
  vscode.commands.executeCommand(stop);
}

function registerStart(): vscode.Disposable {
  return vscode.commands.registerCommand(start, () => {
    server.restart();
  });
}
export const registerStart_test = registerStart;

function registerStop(): vscode.Disposable {
  return vscode.commands.registerCommand(stop, () => {
    return server.stop();
  });
}
export const registerStop_test = registerStop;

function registerStartIfStopped(): vscode.Disposable {
  return vscode.commands.registerCommand(startIfStopped, () => {
    server.startIfStopped();
  });
}
export const registerStartIfStopped_test = registerStartIfStopped;
