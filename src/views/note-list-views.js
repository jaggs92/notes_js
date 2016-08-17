(function(exports) {
  function ListView(noteList) {
    this.noteList = noteList;
  }

  ListView.prototype.printListHTML = function () {
    html = "<ul>";
    this.noteList.list().forEach(function(note){
      var shortNote = note.showNote().substring(0, 20);
      // console.log(shortNote);
      html += "<li><div>" + shortNote + "</div></li>";
    });
    html += "</ul>";
    return html;
  };

  exports.ListView = ListView;
})(this);
