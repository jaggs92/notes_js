(function(exports) {
  var idCounter = 0;

  function Note(text) {
    this.noteId = idCounter++;
    this.save_note = text;
  }

  Note.prototype.showNote = function () {
    return this.save_note;
  };
  exports.Note = Note;
})(this);

// hello there
