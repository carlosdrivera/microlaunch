const mySelect = document.querySelector("#mySelect");
const myNumber = document.querySelector("#myNumber");
const myButton = document.querySelector("#myButton");
const myPicks = document.querySelector("#myPicks");

myButton.addEventListener("click", doTheThing);

function generate(amount, poolSize) {
    let pool = [];
    let i = 0;
    while (i < amount){
        let add = true;
        let random = Math.ceil(Math.random() * poolSize);
        for (let x = 0; x < pool.length; x++) {
            if(pool[x] === random) {
                add = false;
            };
        };
        if(add) {
            pool.push(random);
            i++;
        };
    };
    console.log(pool);
    return pool;
};

function printToHtml(picks) {
    let listItem = document.createElement("li");
    let listText = document.createTextNode(picks);
    listItem.append(listText);
    myPicks.append(listItem);
}

function sort(anArray) {
    let arrayCopy = anArray;
    for (let i = 0; i < arrayCopy.length; i++) {
        for (let x = i + 1; x < arrayCopy.length; x++) {
            if (arrayCopy[i] > arrayCopy[x]) {
                let smaller = arrayCopy[x];
                arrayCopy[x] = arrayCopy[i];
                arrayCopy[i] = smaller;
            }
        }
    };
    return arrayCopy;
}

function doTheThing () {
    let lottery = mySelect.value;
    let number = parseInt(myNumber.value);
    myPicks.innerHTML = "";
    switch (lottery) {
        case "Powerball":
            for (let i = 0; i < number; i++) {
                let pool1 = sort(generate(5, 69));
                let pool2 = generate(1, 26);

                printToHtml(pool1 + " " + pool2);
            };
            break;
        case "Mega Millions":
            for (let i = 0; i < number; i++) {
                let pool1 = sort(generate(5, 70));
                let pool2 = generate(1, 25);
                
                printToHtml(pool1 + " " + pool2);
}
                 break;
        case "Super Lotto":
            for (let i = 0; i < number; i++) {
                let pool1 = sort(generate(5, 48));
                let pool2 = generate(1, 28);
                
                printToHtml(pool1 + " " + pool2);
            };

             case "EuroMillions":
            for (let i = 0; i < number; i++) {
                let pool1 = sort(generate(5, 51));
                let pool2 = generate(1, 13);
                
                printToHtml(pool1 + " " + pool2);
            };
            break;
        default:
            console.log("wat");
    };
};