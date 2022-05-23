import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "import-all" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('import-all.addAllMissingImports', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.commands.executeCommand('editor.action.sourceAction', {
			"kind": "source.addMissingImports",
			"apply": "first"
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
