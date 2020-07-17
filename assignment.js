//convert feetToMile

function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}
var newmile = feetToMile(18530);
if(newmile > 0){
    console.log(newmile);
}
else{
    console.log("Distance always positive");
}



//wood calculator

function woodCalculator(chair,table,bed){
    if(chair < 0 || table < 0 || bed <0){
     console.log("Input one or more negative value");
}
    var tableWood = (table * 1);
    var chairWood = (chair * 3);
    var bedWood = (bed * 5);
    var totalResult = (tableWood + chairWood + bedWood);
    return totalResult;
}

var totalResult = woodCalculator(5,5,5);
console.log(totalResult);


//brickCalculator

function brickCalculator(level){
    height = 0;
    if(level > 20){
        height +=  ((level - 20)*10);
        level =  20;
    }
    if(level > 10){
        height +=  ((level - 10)*12);
        level = 10;
    }
    height += (level * 15);
    var totalbrick = height * 1000;
    return totalbrick;
}
var totalbrick = brickCalculator(5);
console.log(totalbrick);




//tinyFriend

function tinyFriend(name){
    var smallest = name[0];
    for(var i = 0; name[i];i++){
        if(smallest.length >= name[i].length){
            smallest = name[i];
        }
}
    return smallest;
    
}
var totalName = tinyFriend (['tonni','dip','ayshya','tamzide','nurjhan','jans']);
console.log(totalName);
