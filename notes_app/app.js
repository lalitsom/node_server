const notes = require("./notes.js");
const chalk = require("chalk");
const yargs = require("yargs");

//add command
yargs.command({
  command: "add",
  description: "Adding a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },

    body: {
      describe: "Note body",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    console.log("Adding a new note");
    notes.addNote(argv.title,argv.body);
  }
});

// remove command

yargs.command({
  command: "remove",
  description: "Removing a note",
  builder: {
      title: {
          describe: "Note title to remove",
          demandOption: true,
          type: 'string'
      }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//read a note

yargs.command({
  command: "read",
  description: "Reading a note",
  builder: {
      title:{
          describe: "Reading a note",
          demandOption: true,
          type: 'string'
      }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
});

//list all notes

yargs.command({
  command: "list",
  description: "Listing all notes",
  handler() {
    notes.listNotes()
  }
});

yargs.parse();
