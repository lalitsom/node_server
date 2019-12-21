const fs = require("fs");
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log("note Added");
  } else {
    console.log("Title already taken");
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("noteStorage.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("noteStorage.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const newNotesData = notes.filter(note => note.title !== title);

  if (newNotesData.length != notes.length) {
    saveNotes(newNotesData);
    console.log(chalk.bgGreen("Note deleted"));
  } else {
    console.log(chalk.bgRed("Note not found"));
  }
};

const listNotes = () => {
  debugger;
  const notes = loadNotes();
  if (notes.length == 0) {
    console.log("No notes found");
  } else {
    console.log("All Notes:");
    notes.forEach(element => console.log(element.title));
  }
};

const readNote = title => {
  const notes = loadNotes();
  const findNote = notes.find(note => note.title === title);
  if (findNote) {
    printNote(findNote);
  } else {
    console.log(chalk.bgRed("Unable to find note"));
  }
};

const printNote = note => {
  console.log("Title : " + note.title);
  console.log("Body : " + note.body);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
