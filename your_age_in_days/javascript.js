function ageINdays(){
    var year_of_Birth =prompt("enter your birth year?")
    var diy=(2020-year_of_Birth)*365;
    console.log(diy)
    var h2=document.createElement('h2');
    var textanswer=document.createTextNode("you are "+diy+" days old")
    h2.setAttribute('id','ageINdays');
    h2.appendChild(textanswer);
    document.getElementById('meet-box-result').appendChild(h2);

}

function reset()
{
    document.getElementById('ageINdays').remove();
}
