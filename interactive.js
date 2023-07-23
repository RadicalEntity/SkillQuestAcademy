// Randomly generate hallway for html, css, or js 

// Pick from list of basic html, css, and js questions and prompt answer

// If correct answer is submitted play sound effect and animation going down hallway 
// then through door. +10xp for html questions, +15xp for css questions, +20xp for js questions

// Update score and level after validating

// If wrong play sound effect and prompt start over, reset statusbar
let gameBackground = document.createElement("VIDEO");
gameBackground.style.width = "150%";
gameBackground.style.height = "110%";
gameBackground.style.position = "relative";
gameBackground.style.left = "-350px";
gameBackground.style.top = "-100px";
gameBackground.style.zIndex = "-1";
let level = 1;
let score = 0;
let flag = 0;

const htmlQuestions = [
    ["Choose the correct HTML element for the largest heading:", "<h1>", "<h6>", "<heading>", "<head>", "a"],
    ["What is the correct HTML for making a checkbox?", "<checkbox>", "<input type='check'>", "<check>", "<input type='checkbox'>", "d"],
    ["Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", "src", "title", "alt", "longdesc", "c"],
    ["The HTML <canvas> element is used to:", "display database records", "draw graphics", "manipulate data in MySQL", "create draggable elements", "b"],
    ["Which HTML element is used to specify a header for a document or section?", "<section>", "<header>", "<head>", "<top>", "b"]
];

const cssQuestions = [
    ["What does CSS stand for?", "Computer Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "c"],
    ["Which HTML attribute is used to define inline styles?", "styles", "style", "font", "class", "c"],
    ["How do you insert a comment in a CSS file?", "// this is a comment //", "' this is a comment", "/* this is a comment */", "// this is a comment", "d"],
    ["How do you select elements with class name 'test'?", "*test", "#test", ".test", "test", "c"],
    ["Which CSS property controls the text size?", "font-size", "font-style", "text-size", "text-style", "a"]
];

const jsQuestions = [
    ["Inside which HTML element do we put the JavaScript?", "<script>", "<scripting>", "<javascript>", "<js>", "a"],
    ["How do you write 'Hello World' in an alert box?", "msgBox('Hello World');", "alertBox('Hello World');", "msg('Hello World');", "alert('Hello World');", "d"],
    ["How do you write an IF statement in JavaScript?", "if i = 5", "if i == 5 then", "if (i==5)", "if i = 5 then", "c"],
    ["How does a FOR loop start?", "for (i=0; i<=5)", "for i = 1 to 5", "for (i<=5; i++)", "for (i=0; i<=5; i++)", "d"],
    ["Which event occurs when the user clicks on an HTML element?", "onmouseover", "onclick", "onchange", "onmouseclick", "b"]
];

let questionFormat = document.querySelector("div.game-container.question").innerHTML;

function pickHTML() {
    let x = document.createElement("div");
    x.innerHTML = questionFormat;
    document.querySelector(".stats").appendChild(x);
    document.querySelector(".question p").innerText = htmlQuestions[0][0];
    document.getElementById(".answer1 label").innerText = htmlQuestions[0][1];
    document.getElementById(".answer2 label").innerText = htmlQuestions[0][2];
    document.getElementById(".answer3 label").innerText = htmlQuestions[0][3];
    document.getElementById(".answer4 label").innerText = htmlQuestions[0][4];
    document.getElementById('htmlQuestions[5]').value = 1;
    htmlQuestions.shift();
} 

function pickCSS() {
    let x = document.createElement("div");
    x.innerHTML = questionFormat;
    document.querySelector(".stats").appendChild(x);
    document.querySelector(".question p").innerText = cssQuestions[1][0];
    document.getElementById(".answer1 label").innerText = cssQuestions[1][1];
    document.getElementById(".answer2 label").innerText = cssQuestions[1][2];
    document.getElementById(".answer3 label").innerText = cssQuestions[1][3];
    document.getElementById(".answer4 label").innerText = cssQuestions[1][4];
    document.getElementById('cssQuestions[5]').value = 1;
    cssQuestions.shift();
}

function pickJS() {
    let x = document.createElement("div");
    x.innerHTML = questionFormat;
    document.querySelector(".stats").appendChild(x);
    document.querySelector(".question p").innerText = jsQuestions[2][0];
    document.getElementById(".answer1 label").innerText = jsQuestions[2][1];
    document.getElementById(".answer2 label").innerText = jsQuestions[2][2];
    document.getElementById(".answer3 label").innerText = jsQuestions[2][3];
    document.getElementById(".answer4 label").innerText = jsQuestions[2][4];
    document.getElementById('jsQuestions[5]').value = 1;
    jsQuestions.shift();
}

function generateRoom() {
    let roomIndex = Math.floor(Math.random() * 3);
    if (roomIndex == 0) {
        flag = roomIndex;
        generateHTML();
    }
    else if (roomIndex == 1) {
        flag = roomIndex;
        generateCSS();
    }
    else if (roomIndex == 2) {
        flag = 2;
        generateJS();
    }
}

function generateHTML() {
    gameBackground.setAttribute("src", "html-room-enter.mp4");
    gameBackground.play();
    setTimeout(() => { pickHTML(); }, 4000);
}

function generateCSS() {
    gameBackground.setAttribute("src", "css-room-enter.mp4");
    gameBackground.play();
    setTimeout(() => { pickCSS(); }, 4000);
}

function generateJS() {
    gameBackground.setAttribute("src", "js-room-enter.mp4");
    gameBackground.play();
    setTimeout(() => { pickJS(); }, 4000);
}

function validateForm() {
     let a = document.getElementById("a").value;
     let b = document.getElementById("b").value;
     let c = document.getElementById("c").value;
     let d = document.getElementById("d").value;

     if (a == 1 && document.getElementById("a").checked) {
        document.getElementById("correctSound").play();
        document.querySelector(".question").remove();
        nextLevel();
        return true;
     }
     else if (b == 1 && document.getElementById("b").checked) {
        document.getElementById("correctSound").play();
        document.querySelector(".question").remove();
        nextLevel();
        return true;
     }
     else if (c == 1 && document.getElementById("c").checked) {
        document.getElementById("correctSound").play();
        document.querySelector(".question").remove();
        nextLevel();
        return true;
     }
     else if (d == 1 && document.getElementById("d").checked) {
        document.getElementById("correctSound").play();
        document.querySelector(".question").remove();
        nextLevel();
        return true;
     }
     else {
        gameOver();
     }
}

function nextLevel() {
    document.querySelector(".game-container").style.backgroundImage = "none";
    document.querySelector(".game-container").style.border = "none";

    level += 1;
    document.getElementById("level").innerText = "Level " + level; 
    if (flag == 0) {
        score +=10;
        document.getElementById("score").innerText = "Score " + score;
    }
    else if (flag == 1) {
        score += 15;
        document.getElementById("score").innerText = "Score " + score;
    }
    else {
        score += 20;
        document.getElementById("score").innerText = "Score " + score;
    }
    roomAnimation();
}

function roomAnimation() {
    if (flag == 0) {
        gameBackground.setAttribute("src", "html-room-leave.mp4");
        document.querySelector(".game-container").appendChild(gameBackground);
        gameBackground.play();
        setTimeout(() => { generateRoom(); }, 5000);
    }
    else if (flag == 1) {
        gameBackground.setAttribute("src", "css-room-leave.mp4");
        document.querySelector(".game-container").appendChild(gameBackground);
        gameBackground.play();
        setTimeout(() => { generateRoom(); }, 5000);
    }
    else {
        gameBackground.setAttribute("src", "js-room-leave.mp4");
        document.querySelector(".game-container").appendChild(gameBackground);
        gameBackground.play();
        setTimeout(() => { generateRoom(); }, 5000);
    }
}

function gameOver() {
    wrongSound.volume = .4;
    wrongSound.play();
    score = 0;
    level = 1;
    generateRoom();
}
