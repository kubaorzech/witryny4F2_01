const rand = Math.random() * 15 + 1;
const pod = Math.floor(rand);
document.querySelector("#raz").innerHTML = pod;
console.log(pod)
switch (pod){
    case 1:
    case 2:
    case 3:
        document.querySelector("#czy").innerHTML="I Kwartal"
        break
    case 4:
    case 5:
    case 6:
        document.querySelector("#czy").innerHTML="II Kwartal"
        break
    case 7:
    case 8:
    case 9:
        document.querySelector("#czy").innerHTML="III Kwartal"
        break
    case 10:
    case 11:
    case 12:
        document.querySelector("#czy").innerHTML="IV Kwartal"
        break
    case 13:
    case 14:
    case 15:
        document.querySelector("#czy").innerHTML="bledny numer miesiaca"
}
