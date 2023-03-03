document.querySelector("#poka").addEventListener("click", function (){
    const myLink = document.querySelector("#poka");
    console.log(myLink.dataset.robak)
    myPre1.style.visibility = 'none';
    if(myPre1.style.display == 'none')
    {
        myPre1.style.display = 'block';
    }
    else
    {
        myPre1.style.display = 'none';
    }

});