var noteList = new NoteList();
noteList.store("Favourite drink: seltzer");
var noteController = new NoteController(noteList);
noteController.insertHTML();
