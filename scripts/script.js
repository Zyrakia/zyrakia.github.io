var terminal = new Terminal();
terminal.render(document.querySelector('body'), 'prepend');
terminal.sayDefault();
terminal.registerCommand(new HelpCommand());
terminal.registerCommand(new ProjectsCommand());
terminal.registerCommand(new AboutCommand());
terminal.registerCommand(new ContactCommand());
terminal.registerCommand(new ClearCommand());
//# sourceMappingURL=script.js.map