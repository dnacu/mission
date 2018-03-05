var size = 5, i, j;
var cell = document.getElementById("board");
var st = document.getElementById("start");
var wb;
sizing();
// default board size = 5

document.getElementById("size").addEventListener("input", function(event) {
        size = this.value;
        sizing();
});     // resizing when user input number

var play;

st.addEventListener("click", function() {
    if(st.getAttribute("value") == "Start"){
        st.setAttribute("value", "Stop");
        play = setInterval(next_sit, 500);
    }else{
        st.setAttribute("value", "Start");
        clearInterval(play);
    }

});



var result;
function next_sit(event){
    var m = new Array(size);
    for(var i=0; i<size; i++){
        m[i] = new Array(size);
    }

    for(var i =0; i<size; i++){
        for(var j=0; j<size; j++){
            m[i][j] = Number(wb[i*size + j].getAttribute("data-x"));
        }
    }
    result = life(size, m);
                //console.log(result);
    for(var i =0; i<size; i++){
        for(var j=0; j<size; j++){
            wb[i*size + j].setAttribute("data-x", String(result[i][j]));
        }
    }
}
document.getElementById("next").addEventListener("click", next_sit);


function sizing(){
    while(cell.hasChildNodes()){
        cell.removeChild(cell.firstChild);
    }
    for (i = 0; i < size; i++) {
        var b = document.createElement('div');
        b.setAttribute("class", "rows");
        b.setAttribute("data-row", i);
        for(j=0; j<size; j++){
            var div = document.createElement('div');
//                    div.setAttribute("data-row", i);
//                    div.setAttribute("data-col", j);
            div.setAttribute("data-x", 0);
            div.setAttribute("class", "cells");
            b.appendChild(div);
        }
        cell.appendChild(b);
    }
    wb = document.getElementsByClassName("cells");
    //console.log(wb);
    for(var i=0; i<wb.length; i++){
        wb[i].addEventListener("click", function(){
            if(this.getAttribute("data-x") == 0){
                //this.style.backgroundColor = "black";
                this.setAttribute("data-x", 1);
            }else{
                //this.style.backgroundColor = "white";
                this.setAttribute("data-x", 0);
            }
        });
    }
}


//  Life of Game Algorithm
function life(size, board) {
    var i, j, k; // iterator
    var count; // counting live cell
    var dx = [0, 1, 1, 1, 0, -1, -1, -1],
        dy = [1, 1, 0, -1, -1, -1, 0, 1]; // direction
    var tx, ty; // temp value

    var tboard = new Array(size);
    for (i = 0; i < size; i++) {
        tboard[i] = new Array(size);
    }

    for (i = 0; i < size; i++) {
        for (j = 0; j < size; j++) {
            count = 0;
            for (k = 0; k < 8; k++) {
                tx = i + dx[k];
                ty = j + dy[k];
                if (tx < 0 || tx > size - 1 || ty < 0 || ty > size - 1) {
                    continue;
                }
                if (board[tx][ty] == 1) {
                    count++;
                }
            }
            tboard[i][j] = (count == 3 || (count + board[i][j]) == 3) ? 1 : 0;
        }
    }
    return tboard;
}