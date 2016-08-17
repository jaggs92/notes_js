it('Note save text when created', function() {
  var note = new Note("Hello");
  isTrue(note.showNote() === "Hello");
});
