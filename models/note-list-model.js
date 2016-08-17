(function(exports) {
  function NoteList() {
      this.listArr = [];
    }

    NoteList.prototype.store = function (note) {
      this.listArr.push(note);
    }

    NoteList.prototype.list = function () {
      return this.listArr;
    }

    module.exports = NoteList;

})(this);
