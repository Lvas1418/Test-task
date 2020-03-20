
    let inputFruits = document.getElementById("inputFruits");
    let resultFruits = document.getElementById("resultFruits");
    let button = document.getElementById("calculate");
    button.addEventListener('click', printResult);

    function printResult() {
        let result=0;

        let sum;
        let max;
        let min;
        let medium;

        let maximumAmountOfMax;
        let maximumAmountOfMin;
        let maximumAmountOfMedium;


        let arr=inputFruits.value.trim().split(' '); //Convert data to array

        sum=arr.pop(); //Separate the final weight
        arr.sort((a,b)=>a-b); //Sort an array
        [min,medium,max]=[...arr]; //Initialize the variables of maximum, minimum and medium weight of fruits

        //Determine the maximum amount of each fruit
        (max>0) ?  maximumAmountOfMax=Math.floor(sum / max ): maximumAmountOfMax=0;
        (min>0) ? maximumAmountOfMin=Math.floor(sum / min ): maximumAmountOfMin=0;
        (medium>0) ? maximumAmountOfMedium=Math.floor(sum / medium ): maximumAmountOfMedium=0;

        //Summarize the weight of various combinations of fruits and compare it with the total weight
        //The amount of each fruit can be from zero to maximum
        for (let i=0;i<=maximumAmountOfMax; i++){
            for (let j=0;j<=maximumAmountOfMedium; j++){
                for (let k=0;k<=maximumAmountOfMin; k++){
                    let tempSum=max*i+medium*j+min*k;
                    if (tempSum>sum) break;
                    if (tempSum==sum) { //If the weight matches - increase the counter
                        result++;
                        //console.log(max,'*',i,' ',medium,'*',j,' ',min,'*',k);
                    }
                }
            }
        }
        resultFruits.innerText=`Количество способов набрать подарок: ${result}`;
        resultFruits.style.visibility="visible";
    }


