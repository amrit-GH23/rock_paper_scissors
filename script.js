
let p=document.getElementById("para");
let p2=document.getElementById("para2");
let div=document.getElementById("output");


function rps(user) {
    div.style.display = "block";
            div.style.backgroundColor="white";
    p2.style.color="black";
    let arr=["r","p","s"];
    let rand = Math.floor(Math.random() * 3);

    let cpu=arr[rand];
    let flag=0;
    if(user==cpu){
        p.innerHTML="Match Draw!!!";
        div.style.backgroundColor="Black";
        p.style.color="white";
        p2.style.color="white";
    }
    else if(user=="s"&&cpu=="p"){
        p.innerHTML="You Win!!!";
        p.style.color="Green";
    }
    else if(user=="s"&&cpu=="r"){
        p.innerHTML="You lose!!!";
        p.style.color="red";
    }
    else if(user=="p"&&cpu=="r"){
        p.innerHTML="You Win!!!";
        p.style.color="green";
    }
    else if(user=="p"&&cpu=="s"){
        p.innerHTML="You lose!!!";
        p.style.color="red";
    }
    else if(user=="r"&&cpu=="p"){
        p.innerHTML="You lose!!!";
        p.style.color="red";
    }
    else if(user=="r"&&cpu=="s"){
        p.innerHTML="You Win!!!";
        p.style.color="green";
    }
    else {
        p.innerHTML="Invalid Input";
    }
    if(cpu=='s'){
        cpu="scissor"
    }
    else if(cpu=='r'){
        cpu="rock"
    }
    else{
        cpu="paper"
    }
    p2.innerHTML=`CPU choose ${cpu}`
}




