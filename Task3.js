let inputFriends = document.getElementById("inputFriends");
let resultFriends = document.getElementById("resultFriends");
let buttonCalculateFriends = document.getElementById("calculateFriends");
buttonCalculateFriends.addEventListener('click', CalculateFriends);
let arrOfFriends=[];
let arrOfPeople=[];

function CalculateFriends() {

    let arr=inputFriends.value.trim().split(' '); //Convert data to array
    let person=arr.pop(); //Separate separate the person from the matrix

    arrOfFriends=[person-1];
    arrOfPeople=arr.map((item,i,arr)=>item.split(',').map((item)=>+item));
    findFriends(person-1);
    showNumberOfFriends(arrOfFriends.length-1);
}
function  findFriends(row){
    for(let i=0; i<=arrOfPeople.length-1; i++){

        if (arrOfPeople[row][i]===1 && arrOfFriends.every((item)=>item!==i)) {
            arrOfFriends.push(i);
            findFriends(i);
        }
    }
}

function showNumberOfFriends(result) {
    resultFriends.innerText=`Количество друзей: ${result}`;
    resultFriends.style.visibility="visible";
}