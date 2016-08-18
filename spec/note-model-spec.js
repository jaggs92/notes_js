it('Note save text when created', function() {
  var noteOne = new Note("Hello");
  isTrue(noteOne.showNote() === "Hello");
});

it('Gives a note a unique id', function() {
  var noteTwo = new Note("hi");
  isTrue(noteTwo.noteId === 1);
});
