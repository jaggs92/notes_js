function noteTakesTextUponInstatiation() {
  var note = new Note("Hello");
  isTrue(note.showNote() === "Hello");
};

noteTakesTextUponInstatiation();
