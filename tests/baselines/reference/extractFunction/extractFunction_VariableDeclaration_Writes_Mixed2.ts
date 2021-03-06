// ==ORIGINAL==

function f() {
    let a = 1;
    /*[#|*/var x = 1;
    let y = 2;
    a++;/*|]*/
    a; x; y;
}
// ==SCOPE::Extract to inner function in function 'f'==

function f() {
    let a = 1;
    var { x, y } = /*RENAME*/newFunction();
    a; x; y;

    function newFunction() {
        var x = 1;
        let y = 2;
        a++;
        return { x, y };
    }
}
// ==SCOPE::Extract to function in global scope==

function f() {
    let a = 1;
    var x;
    let y;
    ({ x, y, a } = /*RENAME*/newFunction(a));
    a; x; y;
}

function newFunction(a: number) {
    var x = 1;
    let y = 2;
    a++;
    return { x, y, a };
}
