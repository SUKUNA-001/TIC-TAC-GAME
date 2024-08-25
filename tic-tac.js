let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn")
let msgcontainer = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg")

let turnO = true;

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame =() =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked!"); 
    if(turnO){ //PLAYER(O)
        box.innerText = "O";
        turnO = false;
    }else{           //PLAYER (X)
        box.innerText="X";
        turnO = true;
    }   
    box.disabled = true; 

    checkwinner();

    });   
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for(let box of boxes){
        box.enableBoxes = false;
        box.innerText = "";
    }
};

const showinner = (winner) => {
    msg.innerText = `Congrats! The winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkwinner = () =>{
    for( let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if (pos1val===pos2val && pos2val === pos3val){
                console.log("winner!",pos1val);
                showinner(pos1val);
            }
        }
    }
}

newgamebtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
