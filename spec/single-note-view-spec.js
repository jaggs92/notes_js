it('SingleNote displays a note in html', function() {
  var note = new Note('Favourite drink: seltzer');
  var note_view = new NoteView(note);
  isTrue(note_view.printNoteHTML() === '<div>Favourite drink: seltzer</div>');
});

it('Rob has done a great testing framework' function() {
isTrue === true
});
