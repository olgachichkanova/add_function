"use strict";

function add() {
    const x = Number(document.getElementById('first_number').value);
    const y = Number(document.getElementById('second_number').value);

    document.getElementById('first_number').defaultValue = 0.1;
    document.getElementById('second_number').defaultValue = 0.2;

    document.getElementById('result').innerHTML = x+y;
    return false;
}

document.getElementById('add_button').addEventListener('click', add);

