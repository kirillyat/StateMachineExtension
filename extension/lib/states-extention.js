"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vscode = require("vscode");
function activate(context) {
    vscode.window.showInformationMessage('Activating states extension');
}
exports.activate = activate;
function deactivate() {
    return Promise.resolve(undefined);
}
exports.deactivate = deactivate;
//# sourceMappingURL=states-extention.js.map