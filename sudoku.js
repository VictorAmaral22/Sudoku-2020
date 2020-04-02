clean(1);

let z = 0;
let counter = 0;
var tamSudoku = 9;
if (tamSudoku <= 4) {
    document.getElementById('table').className = 'small';
}
if (tamSudoku > 4 && tamSudoku <= 6) {
    document.getElementById('table').className = 'medium';
}
if (tamSudoku > 6 && tamSudoku <= 9 || tamSudoku > 9) {
    document.getElementById('table').className = 'big';
}


/*             SETTING BUTTONS                                   */
const buttonEASY = document.querySelector('a:nth-of-type(1)');
buttonEASY.addEventListener('click', game);

const buttonCHECK = document.querySelector('a:nth-of-type(3)');
buttonCHECK.addEventListener('click', check);

const buttonRETRY = document.querySelector('a:nth-of-type(4)');
buttonRETRY.addEventListener('click', function(e) {
    clean(2);
});

/*             CREATING THE TR AND TD                 */
var table = document.getElementById('table');
for (let c = 1; c <= tamSudoku; c++) {
    var tr = document.createElement('tr');
    table.appendChild(tr);
    for (let c1 = 1; c1 <= tamSudoku; c1++) {
        var td = document.createElement('td');
        tr.appendChild(td);
        let local = document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')');
        local.addEventListener('mouseover', function(event) {
            local.setAttribute('id', 'viewed');
        });
        local.addEventListener('mouseout', function(event) {
            local.removeAttribute('id');
        });
    }
}

/*             CLEAN                                   */
function clean(num) {
    if (num == 1) {
        for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')'); c++) {
            for (let c1 = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'); c1++) {
                document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').textContent = '+';
                document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').classList.remove('fixo');
            }
        }
    }
    if (num == 2) {
        for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')'); c++) {
            for (let c1 = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'); c1++) {
                if (document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').classList != 'fixo') {
                    document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').textContent = '+';
                }
                document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').classList.remove('wrong');
            }
        }
    }
}

/*             SETTING EVENT LISTENERS                      */
for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')'); c++) {
    for (let c1 = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'); c1++) {
        let local = document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')');
        local.addEventListener('wheel', function(e) {
            var y = e.deltaY;
            if (document.getElementById('viewed').className != 'fixo') {
                if (y < 0) {
                    z = z + 1;
                    if (z >= (tamSudoku + 1)) {
                        z = 1;
                    }
                }
                if (y > 0) {
                    z = z - 1;
                    if (z <= 0) {
                        z = tamSudoku;
                    }
                }
                document.getElementById('viewed').textContent = z;
            }

        });

        local.addEventListener('click', function(e) {
            if (document.getElementById('viewed').className != 'fixo') {
                z = z + 1;
                if (z >= (tamSudoku + 1)) {
                    z = 1;
                }
                document.getElementById('viewed').textContent = z;
            }

        });
    }
}

function check(mode) {
    var incorrect = 0;

    if (mode != 1) {
        //HORIZONTAL
        for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')'); c++) {
            for (let tdC = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC + ')'); tdC++) {
                for (let tdC1 = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')'); tdC1++) {
                    if (tdC != tdC1 && document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC + ')').textContent == document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')').textContent) {
                        let a = document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC + ')');
                        let b = document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')');
                        if (a.classList != 'fixo') {
                            a.setAttribute('class', 'wrong');
                        }
                        if (b.classList != 'fixo') {
                            b.setAttribute('class', 'wrong');
                        }
                        incorrect++;
                    }
                }

            }
        }

        //VERTICAL
        for (let vrow = 1, hdata = 1; document.querySelector('tr:nth-of-type(' + vrow + ') > td:nth-of-type(' + hdata + ')'); hdata++) {
            for (let vrow2 = 1; document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')'); vrow2++) {
                for (let vrow3 = 1; document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')'); vrow3++) {
                    if (vrow2 != vrow3 && document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')').textContent == document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').textContent) {
                        let a = document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')');
                        let b = document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')');
                        if (a.classList != 'fixo') {
                            a.setAttribute('class', 'wrong');
                        }
                        if (b.classList != 'fixo') {
                            b.setAttribute('class', 'wrong');
                        }
                        incorrect++;
                    }
                }
            }
        }
        if (incorrect === 0) {
            alert('Você ganhou!');
        } else {
            alert('Você perdeu...');
        }
    }

    if (mode == 1) {
        //HORIZONTAL
        for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')'); c++) {
            for (let tdC = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC + ')'); tdC++) {
                for (let tdC1 = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')'); tdC1++) {
                    if (tdC != tdC1 && document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC + ')').textContent == document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')').textContent && document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')').textContent != '+') {
                        let a = document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC + ')');
                        let b = document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + tdC1 + ')');
                        if (a.classList != 'fixo') {
                            a.setAttribute('class', 'wrong');
                        }
                        if (b.classList != 'fixo') {
                            b.setAttribute('class', 'wrong');
                        }
                        incorrect++;
                    }
                }

            }
        }

        //VERTICAL
        for (let vrow = 1, hdata = 1; document.querySelector('tr:nth-of-type(' + vrow + ') > td:nth-of-type(' + hdata + ')'); hdata++) {
            for (let vrow2 = 1; document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')'); vrow2++) {
                for (let vrow3 = 1; document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')'); vrow3++) {
                    if (vrow2 != vrow3 && document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')').textContent == document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').textContent && document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').textContent != '+') {
                        let a = document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')');
                        let b = document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')');
                        if (a.classList != 'fixo') {
                            a.setAttribute('class', 'wrong');
                        }
                        if (b.classList != 'fixo') {
                            b.setAttribute('class', 'wrong');
                        }
                        incorrect++;
                    }
                }
            }
        }
        if (incorrect === 0) {
            return 0;
        } else {
            return 1;
        }
    }
}

/*                  GAME MODES                      */
function game(e) {
    clean(1);
    let numValores = parseInt((tamSudoku ** 2) / 2) - parseInt((tamSudoku ** 2) / 4);
    let dataBank = [];
    //bug por aqui.
    //repete números
    for (let posit = 0; posit < numValores; posit++) {
        let randomNum = [
            (parseInt(Math.random() * tamSudoku) + 1),
            (parseInt(Math.random() * tamSudoku) + 1),
            (parseInt(Math.random() * tamSudoku) + 1)
        ];
        dataBank[posit] = randomNum;
        for (let c = 0; c < dataBank.length; c++) {
            if (posit != c && dataBank[c][0] == randomNum[0]) {
                while (dataBank[c][1] == randomNum[1]) {
                    randomNum[1] = (parseInt(Math.random() * tamSudoku) + 1);
                    dataBank[posit] = randomNum;
                }
                while (dataBank[c][2] == randomNum[2]) {
                    randomNum[2] = (parseInt(Math.random() * tamSudoku) + 1);
                    dataBank[posit] = randomNum;
                }
            }
            if (posit != c && dataBank[c][1] == randomNum[1]) {
                while (dataBank[c][0] == randomNum[0]) {
                    randomNum[0] = (parseInt(Math.random() * tamSudoku) + 1);
                    dataBank[posit] = randomNum;
                }
                while (dataBank[c][2] == randomNum[2]) {
                    randomNum[2] = (parseInt(Math.random() * tamSudoku) + 1);
                    dataBank[posit] = randomNum;
                }
            }
        }
        document.querySelector('tr:nth-of-type(' + randomNum[0] + ') > td:nth-of-type(' + randomNum[1] + ')').textContent = randomNum[2];
        document.querySelector('tr:nth-of-type(' + randomNum[0] + ') > td:nth-of-type(' + randomNum[1] + ')').classList.add('fixo');
    }
}

game();