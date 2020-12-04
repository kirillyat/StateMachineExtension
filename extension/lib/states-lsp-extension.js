"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var path = require("path");
var vscode = require("vscode");
var vscode_languageclient_1 = require("vscode-languageclient");
var editing_1 = require("sprotty-vscode/lib/lsp/editing");
var lsp_1 = require("sprotty-vscode/lib/lsp");
var StatesLspVscodeExtension = /** @class */ (function (_super) {
    __extends(StatesLspVscodeExtension, _super);
    function StatesLspVscodeExtension(context) {
        return _super.call(this, 'states', context) || this;
    }
    StatesLspVscodeExtension.prototype.getDiagramType = function (commandArgs) {
        if (commandArgs.length === 0
            || commandArgs[0] instanceof vscode.Uri && commandArgs[0].path.endsWith('.sm')) {
            return 'states-diagram';
        }
    };
    StatesLspVscodeExtension.prototype.createWebView = function (identifier) {
        var webview = new lsp_1.SprottyLspWebview({
            extension: this,
            identifier: identifier,
            localResourceRoots: [
                this.getExtensionFileUri('pack')
            ],
            scriptUri: this.getExtensionFileUri('pack', 'webview.js'),
            singleton: false // Change this to `true` to enable a singleton view
        });
        webview.addActionHandler(editing_1.WorkspaceEditActionHandler);
        webview.addActionHandler(editing_1.LspLabelEditActionHandler);
        return webview;
    };
    StatesLspVscodeExtension.prototype.activateLanguageClient = function (context) {
        var executable = process.platform === 'win32' ? 'states-language-server.bat' : 'states-language-server';
        var languageServerPath = path.join('server', 'states-language-server', 'bin', executable);
        var serverLauncher = context.asAbsolutePath(languageServerPath);
        var serverOptions = {
            run: {
                command: serverLauncher,
                args: ['-trace']
            },
            debug: {
                command: serverLauncher,
                args: ['-trace']
            }
        };
        var clientOptions = {
            documentSelector: [{ scheme: 'file', language: 'states' }]
        };
        var languageClient = new vscode_languageclient_1.LanguageClient('statesLanguageClient', 'States Language Server', serverOptions, clientOptions);
        languageClient.start();
        return languageClient;
    };
    return StatesLspVscodeExtension;
}(editing_1.SprottyLspEditVscodeExtension));
exports.StatesLspVscodeExtension = StatesLspVscodeExtension;
