function myfunction() {
    var number = document.getElementById("input").value;

    if (isNaN(number)) {
        document.getElementById("output").innerHTML = number + " :  is not a number ...!"
        document.getElementById("input").value = "";
    }
    else if (number == "") {
        document.getElementById("output").innerHTML = "Please Input number ..."

    }
    else {
        var result = "";
        for (var i = 0; i < number.length; i++) {
            var num = number[i];
            switch (num) {
                case '1': num = 'One' //do not use ; because case can be match again ";" mean after matching every thing will stop and return only one  first match 
                    break;
                case '2': num = 'Two'
                    break;
                case '3': num = 'Three'
                    break;
                case '4': num = 'Four'
                    break;
                case '5': num = 'Five'
                    break;
                case '6': num = 'Six'
                    break;
                case '7': num = 'Seven'
                    break;
                case '8': num = 'Eight'
                    break;
                case '9': num = 'Nine'
                    break;
            }
            result += num;
            document.getElementById("output").innerHTML = result;
        }
        document.getElementById("input").value = "";
    }
}