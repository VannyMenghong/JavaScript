function myfunction() {
    var inputNum = document.getElementById("input").value;
    if (inputNum !== '') {

        var arr = inputNum.split(",");
        arr.sort(Sort);

        function Sort(a, b) {
            return a - b;
        }
        document.getElementById("output").innerHTML = "Result : " + arr;
    }
    else {
        document.getElementById("output").innerHTML = "Please input a number";
    }
}