it('ListView empty list is legal', function listIsEmpty() {
  var testList = new NoteList();
  var listView = new ListView(testList);
  var html = "<ul></ul>"
  isTrue(listView.printListHTML() === html);
});

it('ListView shows one note', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var html = "<ul><li><div>Hello</div></li></ul>"
  isTrue(listView.printListHTML() === html);
});

it('ListView shows Many Notes', function() {
  var testList = new NoteList();
  var noteOne = "Hello";
  var noteTwo = "Howdy";
  testList.store(noteOne);
  testList.store(noteTwo);
  var listView = new ListView(testList);
  var html = "<ul><li><div>Hello</div></li><li><div>Howdy</div></li></ul>"
  isTrue(listView.printListHTML() === html);
});

it('ListView only shows 20 chars per note', function() {
  var testList = new NoteList();
  var noteOne = "This is a string that never ends";
  testList.store(noteOne);
  var listView = new ListView(testList);
  var html = "<ul><li><div>This is a string tha</div></li></ul>"
  isTrue(listView.printListHTML() === html);
});
