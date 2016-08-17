var notelist = new NoteList();

it('NoteList stores notes', function() {
  var noteOne = "I love ruby";
  var noteTwo = "I hate Javascript";

  notelist.store(noteOne);
  notelist.store(noteTwo);

  var testList = notelist.list()
  var validateFirstNote = (testList[0].showNote() === noteOne)
  var validateSecondNote = (testList[1].showNote() === noteTwo)
  isTrue(validateFirstNote === validateSecondNote);
});
