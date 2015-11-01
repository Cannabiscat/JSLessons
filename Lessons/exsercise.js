/**
 * Created by alex on 24.10.15.
 */
function chessTable(x,y) {
    this.rows = x;
    this.cols = y;
    this.getCell = function() {

    };
    this.setCell = function() {

    };
    this.createTable = function() {
        for (i = 0; i< this.rows; i++) {
            for (j = 0; j < this.cols; j++) {
                document.writeln("<div>1</div>");
            }
        }
    };

}