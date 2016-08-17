(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  ListView.prototype.printListHTML = function () {
    html = "<ul>";
    this.noteList.list().forEach(function(note){
      html += "<li><div>" + note.showNote() + "</div></li>";
    });
    html += "</ul>";
    return html;
  };

  exports.ListView = ListView;
})(this);
