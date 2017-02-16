"use strict";
// journal model, variation 1. similar to the hero or pet or product object
var Journal = (function () {
    function Journal() {
        this.ID = 0;
        this.title = "";
        this.author = "";
        this.image = "";
        this.content = "";
        this.date = "";
        this.categories = [];
    }
    return Journal;
}());
exports.Journal = Journal;
//# sourceMappingURL=journal.js.map