function listIsEmpty() {
  var testList = new NoteList();
  var listView = new ListView(testList);
  var html = "<ul></ul>"
  isTrue(listView.printListHTML() === html);
}

// function listHasOneNote() {
//   var testList = new NoteList();
//   var noteOne = "Favourite food: pesto";
//   testList.store(noteOne);
//   var listView = new ListView(testList);
//   var html = "<ul><li><div>Favourite food: pesto</div></li></ul>"
//   isTrue(listView.printListHTML() === html);
// };
//
// function listHasManyNotes() {
//   var testList = new NoteList();
//   var noteOne = "Favourite food: pesto";
//   var noteTwo = "Favourite drink: seltzer";
//   testList.store(noteOne);
//   testList.store(noteTwo);
//   var listView = new ListView(testList);
//   var html = "<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>"
//   isTrue(listView.printListHTML() === html);

// };

function listShowsOnly20Chars() {
  var testList = new NoteList();
  var noteOne = "Favourite food: superlongpestoname";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var html = "<ul><li><div>Favourite food: supe</div></li></ul>"
  isTrue(listView.printListHTML() === html);
};


listIsEmpty();
// listHasOneNote();
// listHasManyNotes();
listShowsOnly20Chars();
