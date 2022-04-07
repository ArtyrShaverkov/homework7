function checkParity(arg) {
    if (arg % 2 === 0) {
        console.log('число:', arg, 'четное');
    } else {
        console.log('число:', arg, 'нечетное');
    }
}

function checkMin(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function checkMax(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function listNumFor(a, b) {
    const min = checkMin(a, b);
    for (let i = 1; i < min; i++) {
        console.log(i);
    }

}

function listNumWhile(a, b) {
    const min = checkMin(a, b);
    let i = 1;
    while (i < min) {
        console.log(i);
        i++
    }
}

function listNumDoWhile(a, b) {
    const min = checkMin(a, b)
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i < min)

}

function calcParityFor(a, b) {
    const max = checkMax(a, b);
    for (let i = 1; i < max; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function calcParityWhile(a, b) {
    const max = checkMax(a, b);
    let i = 1;
    while (i < max) {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    }
}

function calcParityDoWhile(a, b) {
    const max = checkMax(a, b);
    let i = 1;
    do {
        if (i % 2 === 0) {
            console.log(i);
        }
        i++;
    } while (i < max);

}

function calcNumFor(n, m) {
    for (let i = 1; i < n; i++) {
        if (((i * m) % 2) !== 0) {
            console.log(i * m);
        }
    }

}

function calcNumWhile(n, m) {
    let i = 1;
    while (i < n) {
        if (((i * m) % 2) !== 0) {
            console.log(i * m);
        }
        i++;
    }
}

function calcNumDoWhile(n, m) {
    let i = 1;
    do {
        if (((i * m) % 2) !== 0) {
            console.log(i * m);
        }
        i++;
    } while (i < n)
}

console.log('задание 1');
checkParity(3);
console.log('задание 2');
listNumFor(5,9);
console.log('задание 3');
calcParityFor(5,9);
console.log('задание 4');
calcNumFor(9,3);
