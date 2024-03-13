const yargs = require('yargs');
const user = require('./user');

yargs
  .command({
    command: 'add',
    describe: 'Add a new language',
    builder: {
      title: {
        describe: 'Language title',
        demandOption: true,
        type: 'string'
      },
      level: {
        describe: 'Language level',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      user.addLanguage(argv.title, argv.level);
    }
  })
  .command({
    command: 'remove',
    describe: 'Remove a language',
    builder: {
      title: {
        describe: 'Language title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      user.removeLanguage(argv.title);
    }
  })
  .command({
    command: 'list',
    describe: 'List all languages',
    handler: () => {
      user.listLanguages();
    }
  })
  .command({
    command: 'read',
    describe: 'Read details about a language',
    builder: {
      title: {
        describe: 'Language title',
        demandOption: true,
        type: 'string'
      }
    },
    handler: (argv) => {
      user.readLanguage(argv.title);
    }
  })
  .demandCommand(1, 'Please provide a valid command.')
  .help()
  .argv;
