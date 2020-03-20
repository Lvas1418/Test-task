let inputCopies = document.getElementById("inputCopies");
let resultSeconds = document.getElementById("resultSeconds");
let buttonResultCopies = document.getElementById("calculateSeconds");
buttonResultCopies.addEventListener('click', calculate);
let result=0;

function calculate() {

    let fast; //speed of fast Xerox machine
    let slow; //speed of slow Xerox machine
    let numberOfCopies;

    let arr=inputCopies.value.trim().split(' '); //Convert data to array

    numberOfCopies=arr.pop(); //Separate the number of copies from the speeds
    fast=Math.min(...arr);
    slow=Math.max(...arr);

    //if Jenifer doesn't need copieces - result in seconds will be "0"
    if (numberOfCopies<1){
        result=0;
        showResult();
        return;
    }

    //if Jenifer needs only one copy - she will make it in one step on a fast machine
    if (numberOfCopies===1){
        result=fast;
        showResult();
        return;
    }

    //if the speeds of machines  are equal, we divide the copies between the machines
    if (fast==slow){
        result=(numberOfCopies%2==0) ? (numberOfCopies-2)*slow/2+slow*2 : (numberOfCopies-1)*slow/2+slow ;
        showResult();
    }

    //if Jennifer needs copies and the speed of the machines is different.
    //We take into account how much time it will take to make copies on a fast machine,
    // and then transfer one copy after another to a second machine and compare the time.
    let timeOnFast=(numberOfCopies-1)*fast;
    let timeOnSlow=0;

    while (timeOnSlow+slow<=timeOnFast){
        timeOnFast-=fast;
        timeOnSlow+=slow;
    }

    result = Math.max(timeOnSlow,timeOnFast)+fast;
    showResult();
}

function showResult() {
    resultSeconds.innerText=`Наименьшее количество секунд: ${result}`;
    resultSeconds.style.visibility="visible";
}