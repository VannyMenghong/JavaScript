function myfunction() {
    var inputNum = document.getElementById("input").value;
    if (inputNum !== '') {

        var arr = inputNum.split(",");
        arr.sort(Sort);

        function Sort(a, b) {
            return a - b;
        }
        //this is out put 
        document.getElementById("output").innerHTML = "Result : " + "arr = [" + arr.join(" , ") + " ] ;";
    }
    else {
        document.getElementById("output").innerHTML = "Please input a number";
    }
}