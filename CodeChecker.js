let arr = [];
let freq = [];
let freqcount = [];
let val;
let val2;
let val3;
let flag = 0;
let flag2 = 0;
let res = [];
let res2 = [];
let col = [];
function add() {
    val = document.getElementById("Value").value;
    frequency = document.getElementById("freq").value;
    if (val.length > 0 && frequency.length > 0) {
        document.getElementById("Value").value = '';
        document.getElementById("freq").value = '';
        freq.push(frequency);
        arr.push(val);
        document.getElementById("data").innerHTML = arr.map(item => {
            return item + '<br>';
        }).join("<br>")
        document.getElementById("number").innerHTML = freq.map(item => {
            return item + '<br>';
        }).join("<br>")
        document.getElementById("number2").innerHTML = '';
        var set1 = document.getElementById('data');
        var set2 = document.getElementById('number');
        var set3 = document.getElementById('number2');
        set1.className = 'black'
        set2.className = 'black'
        set3.className = 'black'
    }
    else if (val.length == 0) {
        alert("Please Enter The Tag");
    }
    else if (frequency.length == 0) {
        alert("Please Enter Number");
    }
}
function check() {
    //for code input field
    val2 = document.getElementById("Code").value;
    val3 = document.getElementById("files").value;
    res.length = 0;
    res2.length = 0;
    freqcount.length = 0;
    col.length = 0;
    flag = 0;
    for (let i = 0; i < arr.length; i++) {
        function countOccurences(string, word) {
            return string.split(word).length - 1;
        }
        var count = countOccurences(val2, "<" + arr[i]);
        freqcount.push(count);
    }
    if (arr.length > 0 && val2.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (val2.search("<" + arr[i]) < 0) {
                // alert(" Code is wrong " + "<" + arr[i] + ">" + " is not present in the code");
                flag = 1;
                let resval3 = arr[i];
                res.push(resval3);
                resval3 = "0" + " ✘"
                res2.push(resval3);
                col.push("1");
            }
            else {
                if (freq[i] != freqcount[i]) {
                    flag = 1;
                    let resval = arr[i];
                    res.push(resval);
                    resval = freqcount[i] + " ✘"
                    res2.push(resval);
                    col.push("1");
                }
                else {
                    let resval2 = arr[i];
                    res.push(resval2);
                    resval2 = freqcount[i] + " ✓"
                    res2.push(resval2);
                    col.push("2");
                }
            }
        }
        console.log(col);
        document.getElementById("data").innerHTML = res.map(item => {
            return item + '<br>';
        }).join("<br>")
        document.getElementById("number2").innerHTML = res2.map(item => {
            return item + '<br>';
        }).join("<br>")
        col.map((item,index) => {  
                       console.log(item,index);
                //     if (item == "1") {
                //     // var set1 = document.getElementById('data');
                //     // var set2 = document.getElementById('number');
                //     var set3 = document.getElementById('number2');
                //     // set1.className = 'red'
                //     // set2.className = 'red'
                //     set3.className = 'red'
                //  }
                //  else if (item == "2") {
                //     // var set1 = document.getElementById('data');
                //     // var set2 = document.getElementById('number');
                //     var set3 = document.getElementById('number2');
                //     // set1.className = 'green'
                //     // set2.className = 'green'
                //     set3.className = 'green'
                //  }
            
        })

        if (flag == 0) {
            alert("Code is correct");
        }
    }
    else {
        alert("Please enter the both fields")
    }
}
