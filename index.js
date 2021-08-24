let a = 0;
let op = 0;
let inp1 = null;
let inp2 = null;
let ope = 'a';
function fn0() {
    a = a * 10;
    if (inp1 == null) {
        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;
        document.getElementById('output3').innerHTML = a;
    }
};
function fn1() {
    a = a * 10 + 1;
    if (inp1 == null) {
        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;
        document.getElementById('output3').innerHTML = a;
    }
};
function fn2() {
    a = a * 10 + 2;
    if (inp1 == null) {
        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn3() {
    a = a * 10 + 3;
    if (inp1 == null) {
        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn4() {
    a = a * 10 + 4;
    if (inp1 == null) {
        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn5() {
    a = a * 10 + 5;
    if (inp1 == null) {

        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn6() {
    a = a * 10 + 6;
    if (inp1 == null) {

        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn7() {
    a = a * 10 + 7;
    if (inp1 == null) {

        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn8() {
    a = a * 10 + 8;
    if (inp1 == null) {

        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
function fn9() {
    a = a * 10 + 9;
    if (inp1 == null) {

        document.getElementById('output1').innerHTML = a;
    }
    else {
        document.getElementById('output2').innerHTML = ope;

        document.getElementById('output3').innerHTML = a;
    }
};
// function fn16() {
//     a = (a * 10 + 1) / 10;
//     // fn15();
//     if (inp1 == null) {

//         document.getElementById('output1').innerHTML = a;
//     }
//     else {
//         document.getElementById('output3').innerHTML = a;
//     }
// };
// function fn15() {

//     let b = a % 10;
//     a = (a - b) / 10;

//     if (inp1 == null) {
//         document.getElementById('output1').innerHTML = a;
//     }
//     else {
//         document.getElementById('output3').innerHTML = a;
//     }
// };
function fn10() {
    inp1 = a;
    a = 0;
    ope = '+';
    document.getElementById('output1').innerHTML = inp1;
    document.getElementById('output2').innerHTML = ope;
};
function fn11() {
    inp1 = a;
    a = 0;
    ope = '-';
    document.getElementById('output1').innerHTML = inp1;
    document.getElementById('output2').innerHTML = ope;
};
function fn12() {
    inp1 = a;
    a = 0;
    ope = '*';
    document.getElementById('output1').innerHTML = inp1;
    document.getElementById('output2').innerHTML = ope;
};
function fn13() {
    inp1 = a;
    a = 0;
    ope = '/';
    document.getElementById('output1').innerHTML = inp1;
    document.getElementById('output2').innerHTML = ope;
};
function fn14() {
    inp2 = a;
    if (ope == '+') {
        inp1 = inp1 + inp2;
        document.getElementById('output1').innerHTML = inp1;
        document.getElementById('output2').innerHTML = " ";
        document.getElementById('output3').innerHTML = " ";
        a=inp1;
    }
    if (ope == '-') {
        inp1 = inp1 - inp2;
        document.getElementById('output1').innerHTML = inp1;
        document.getElementById('output2').innerHTML = " ";
        document.getElementById('output3').innerHTML = " ";
        a=inp1;
        // inp1=d;
    }
    if (ope == '*') {
        inp1 = inp1 * inp2;
        document.getElementById('output1').innerHTML = inp1;
        document.getElementById('output2').innerHTML = " ";
        document.getElementById('output3').innerHTML = " ";
        a=inp1;
        // inp1=d;
    }
    if (ope == '/') {
        inp1 = inp1 / inp2;
        document.getElementById('output1').innerHTML = inp1;
        document.getElementById('output2').innerHTML = " ";
        document.getElementById('output3').innerHTML = " ";
        a=inp1;
        // inp1=d;
    }
    if (ope == 'a') {
        document.getElementById('output1').innerHTML = "Enter numbers first";
    }
    // a=inp1;
}
function fnc() {
    a = 0;
    inp1 = null;
    inp2 = null;
    ope = 'a';
    document.getElementById('output1').innerHTML = a;
    document.getElementById('output2').innerHTML = " ";
    document.getElementById('output3').innerHTML = " ";
}
