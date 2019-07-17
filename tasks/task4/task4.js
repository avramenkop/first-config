let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let firstElement;
let secondElement;


function sum12 () {
    for (let i = 0; i < array.length; i++) {
        firstElement = Math.floor(Math.random()* array.length);
        // console.log(firstElement);
    }

    for (let j = array.length-1; j >= 0; j--) {
        secondElement = Math.floor(Math.random()* array.length);
        // console.log(secondElement);
    }

    if(firstElement + secondElement === 12) {
        console.log(firstElement, secondElement)
    } else {
        console.log("Oops. Try again later")
    }
}

sum12();

