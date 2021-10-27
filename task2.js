function myfunction() {
    var num = document.getElementById("input").value;
    if (num > 0) {
        document.getElementById("output").innerHTML = "Positive (+) Numbber ."
    }
    else if (num == "") {
        document.getElementById("output").innerHTML = "Please input  Numbber ...!."
    }
    else if (num == 0) {
        document.getElementById("output").innerHTML = "Zero Number ."
    }
    else if (isNaN(num)) {
        document.getElementById("output").innerHTML = num + ": is not a Numbber ..!."
    }

    else {
        document.getElementById("output").innerHTML = "Negative(-) Numbber ."
    }

}