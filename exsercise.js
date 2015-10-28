/**
 * Created by alex on 24.10.15.
 */
var x = 8;
var y = 8;
for (i = 0; i < x; i++) {
    for (j = 0; j < y; j++) {
        var elem = "<div class='inner' id='" + i + "." + j + "'></div>";
        document.writeln(elem);
    }
    document.writeln("<br>");
}
document.onkeydown = function (event) {
    //var document.getElementById(id.toString());
    switch (event.keyCode) {
        case 37:
            document.getElementById(id).style.borderColor = 'black';
            if (id % 10 == 0) {
                id += (x - 1);
            } else {
                id -= 1
            }
            document.getElementById(id).style.borderColor = 'red';
            break;
        case 38:
            document.getElementById(id.toString()).style.borderColor = 'black';
            if (id < 20) {
                id += y * x;
            } else {
                id -= 10;
            }
            document.getElementById(id.toString()).style.borderColor = 'red';
            break;
        case 39:
            document.getElementById(id.toString()).style.borderColor = 'black';
            if (id % 10 == 8) {
                id -= 8
            } else {
                id += 1;
            }
            document.getElementById(id.toString()).style.borderColor = 'red';
            break;
        case 40:
            document.getElementById(id.toString()).style.borderColor = 'black';
            if (id > 88) {
                id -= 80;
            } else {
                id += 10;
            }
            document.getElementById(id.toString()).style.borderColor = 'red';
            break;
        case 32:
            if (document.getElementById(id.toString()).style.backgroundColor == "") {
                document.getElementById(id.toString()).style.backgroundColor = "gray";
            } else {
                document.getElementById(id.toString()).style.backgroundColor = "";
            }
            break;
    }
}
function getX(id) {

}