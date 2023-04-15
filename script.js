const mainDiv = document.querySelector(".sketch-box");
const resetButton = document.querySelector(".new-grid");

function createGrid (x) {
    let width = 480/x;
    let height = 480/x;
    console.log(width);
    const testDiv = document.createElement("div");
    testDiv.classList.add("test-div");
    testDiv.style.width = width + "px";
    testDiv.style.height = height + "px";
    testDiv.style.background = "white";
    mainDiv.appendChild(testDiv);
};



function gridLoop (x) {
    let pixels = x*x
    let i = 0;
    while (i < pixels) {
        i++;
        createGrid(x);
    }
}


gridLoop(pixelPrompt());

const boxes = document.querySelectorAll(".test-div");
boxes.forEach(box => box.addEventListener("mouseover", function (e) {
    if (e.shiftKey) {
        box.style.background = "white";
    } else {
        box.style.background = "black";
    };
}))



function pixelPrompt () {
    const pixelInput = prompt("Enter number of pixels:");
    if (pixelInput > 64) {
        alert("Too many pixels. Enter a number less than 64.");
        pixelPrompt();
    } else {
        return pixelInput;
    }
}

