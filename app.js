

let h2 = document.querySelector("h2");
let quesinput = document.querySelectorAll(".options");
let box = document.querySelector(".box");

const questions = [{
    'que': "Which of the following is a client site language?",
    'a': "Java",
    'b': "C",
    'c': "Python",
    'd': "JavaScript",
    'correct': "d",
},
{
    'que': "What does HTML stand for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "a",
},
{
    'que': "What year was JavaScript launched?",
    'a': "1996",
    'b': "1995",
    'c': "1994",
    'd': "none of the above",
    'correct': "b",
},
{
    'que': "What does CSS stands for?",
    'a': "Hypertext Markup Language",
    'b': "Cascading Style Sheet",
    'c': "Jason Object Notation",
    'd': "Helicopters Terminals Motorboats Lamborginis",
    'correct': "b",
}
];

let total = questions.length;
let right=0;
let wrong=0;
let index=0;
const loadQuestion =()=>{
    if(index === total){
        return endquiz();
    }
    resetgame();
    const data = questions[index];
    h2.innerText = `${index+1}) ${data.que}`;
    quesinput[0].nextElementSibling.innerText = data.a;
    quesinput[1].nextElementSibling.innerHTML = data.b;
    quesinput[2].nextElementSibling.innerHTML = data.c;
    quesinput[3].nextElementSibling.innerHTML = data.d;

}

const resetgame = () =>{
    for(let input of quesinput){
        input.checked = false;
    }
}
const submitQuiz = () =>{
    const data = questions[index];
    const ans = getAnswer();
    console.log(ans,data.correct)
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    
    index++;
    loadQuestion();
    return;
}


const getAnswer = () =>{
    let answer;
    for(let input of quesinput){
        if(input.checked){
            answer = input.value;
        }
    }
    return answer;
}


const endquiz =()=>{
    box.innerHTML = `
    <h3 style="text-align:center">Thank for playing</h3>
    <h2 style="text-align:center">${right}/${total} are correct</h2>
    `
}

loadQuestion();