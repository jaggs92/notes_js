var notelist = new NoteList();

function storesListOfNotes() {
  var noteOne = "I love ruby";
  var noteTwo = "I hate Javascript";

  notelist.store(noteOne);
  notelist.store(noteTwo);

  var testList = notelist.list()

  isTrue(testList[0].showNote() === noteOne);
  isTrue(testList[1].showNote() === noteTwo);
};

storesListOfNotes();
