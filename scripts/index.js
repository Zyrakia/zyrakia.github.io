var terminal = new Terminal();
terminal.render(document.querySelector('body'), 'prepend');
terminal.addDefaults();
terminal.registerCommand(new HelpCommand());
terminal.registerCommand(new ProjectsCommand());
terminal.registerCommand(new AboutCommand());
terminal.registerCommand(new ContactCommand());
terminal.registerCommand(new CLSCommand());
terminal.registerCommand(new EchoCommand());
terminal.registerCommand(new ExportCommand());
terminal.registerCommand(new TechnicalExport());
terminal.registerCommand(new GotoCommand());
terminal.registerCommand(new PICommand());
//# sourceMappingURL=index.js.map