import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.window.showInformationMessage('Activating states extension');
}

export function deactivate(): Thenable<void> {
    return Promise.resolve(undefined);
}