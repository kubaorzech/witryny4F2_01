const przycisk1 = document.querySelector("#przycisk");
console.log(przycisk1);
function bumper() {
    alert("Możesz być z siebie dumny");
}
przycisk1.addEventListener('click',()=> {
    bumper(alert("Możesz być z siebie dumny"));
})
console.log()

const przycisk2 = document.querySelector("#przycisk");
console.log(przycisk2);

function zderzaker() {
    let byk=confirm('aha');
    if (byk)
alert('kliknales se ok');
}
else
{
    alert('kliknales zeby jednak nie dawac ok');
}





