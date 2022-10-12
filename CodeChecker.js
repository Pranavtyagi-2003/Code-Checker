let arr = [];
let freq = [];
let freqcount = [];
let val;
let val2;
let val3;
let flag = 0;
let flag2 = 0;
function add() {
    val = document.getElementById("Value").value;
    frequency = document.getElementById("freq").value;
    if (val.length > 0 && frequency.length > 0) {
        document.getElementById("Value").value = '';
        document.getElementById("freq").value = '';
        freq.push(frequency);
        arr.push(val);
        // console.log(arr);
        // console.log(freq);
        document.getElementById("data").innerHTML = arr.map(item => {
            return item + '<br>';
        }).join("<br>")
        document.getElementById("number").innerHTML = freq.map(item => {
            return item + '<br>';
        }).join("<br>")
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


        for(let i=0;i<arr.length;i++){
        function countOccurences(string, word) {
            return string.split(word).length - 1;
         }
         var count=countOccurences(val2,"<"+arr[i]);
         freqcount.push(count);
        }
        console.log(freqcount);
    
    if (arr.length > 0 && val2.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (val2.search("<" + arr[i]) < 0) {
                alert(" Code is wrong " + "<" + arr[i] + ">" + " is not present in the code");
                freqcount.length = 0;
                flag = 1;
                break;
            }
            else{
                 if(freq[i]!=freqcount[i]){
                    console.log(freqcount);
                    alert("Count of " + arr[i] + " is " + freqcount[i] + " is wrong");
                    freqcount.length = 0;
                    flag = 1;
                    break;
                 }
                 else{
                    flag = 0;
                 }
            }
        }
        if (flag == 0) {
            alert("Code is correct");
            freqcount.length = 0;
        }
    }
    else {
        alert("Please enter the both fields")
    }


    // for file upload field

}
