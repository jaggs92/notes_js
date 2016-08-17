function viewSingleNote() {
  var note = new Note('Favourite drink: seltzer');
  var note_view = new NoteView(note);
  isTrue(note_view.printNoteHTML() === '<div>Favourite drink: seltzer</div>');
};

viewSingleNote();
