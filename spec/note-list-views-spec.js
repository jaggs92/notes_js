function listIsEmpty() {
  var testList = new NoteList();
  var listView = new ListView(testList);
  var html = "<ul></ul>"
  isTrue(listView.printListHTML() === html);
}

listIsEmpty();
