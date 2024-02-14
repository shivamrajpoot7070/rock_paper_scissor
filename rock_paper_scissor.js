let you=0;
let comp=0;


const choicess=document.querySelectorAll(".option");

const value=document.querySelector(".decision");
const score=document.querySelector(".finalscore");
const score_1=document.querySelector(".finalscore_1");

const gencompchoice=()=>{

    const modes=["rock","paper","scissor"];

    const idx=Math.floor(Math.random()*3);
    return modes[idx];

}

const winner=(userwin,computerchoice,userchoice)=>{

    if(userwin){
        you++;
        console.log("you win!!");
        value.innerText=`You win the game ${userchoice} beats ${computerchoice}`;
        value.style.backgroundColor="green";
        score.innerText=you;
    }

    else{
        comp++;
        console.log("you lose");

        value.innerText=`You lost the game ${computerchoice} beats ${userchoice}`;
        value.style.fontsize="43px";
        value.style.backgroundColor="red";
        score_1.innerText=comp;
    }
}

const playgame=(userchoice)=>{
    console.log(userchoice);

    const computerchoice=gencompchoice();
    console.log(computerchoice);

    

    if(userchoice===computerchoice){
        console.log("draw");
        value.innerText="You have drawn the game";
        value.style.backgroundColor="pink";

    }
    else{
        var userwin=true;
        

        if(userchoice==="rock"){
            //scissor or paper
            userwin=computerchoice==="paper"?false:true;
        }

        else if(userchoice==="paper"){
            //scissor or rock
            userwin=computerchoice==="scissor"?false:true;
        }

        else{
            //paper or scissor
            userwin=computerchoice==="rock"?false:true;
            //computer liya rock or scissor ko toda or user ko false kr diya
        }

        winner(userwin,computerchoice,userchoice);
    }
};

choicess.forEach((option) => {

    console.log(option);

    option.addEventListener("click",()=>{

        const userchoice=option.getAttribute("id");

        //console.log("choice clicked",userchoice);

        playgame(userchoice);

    })


    
});