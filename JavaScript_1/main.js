// Exercise One

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(string, names) {
    let found = false;
    for (let i = 0; i < names.length; i++) {
        if (string.toLowerCase().includes(names[i].toLowerCase())) {
            console.log("Matched " + names[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("No Matches");
    }
}

findWords(dog_string, dog_names);


// Exercise Two

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];
console.log(replaceEvens(arr));
