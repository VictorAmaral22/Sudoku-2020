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
    //clean all
    if (num == 1) {
        for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')'); c++) {
            for (let c1 = 1; document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'); c1++) {
                document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').textContent = '+';
                document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').classList.remove('fixo');
                document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').classList.remove('wrong');
            }
        }
    }
    //retry
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
    //HORIZONTAL
    for (let rowNum = 1; document.querySelector('tr:nth-of-type(' + rowNum + ')'); rowNum++) {
        for (let dataNum = 1; document.querySelector('tr:nth-of-type(' + rowNum + ')>td:nth-of-type(' + dataNum + ')'); dataNum++) {
            for (let dataNum2 = 1; document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')'); dataNum2++) {
                if (dataNum != dataNum2 && document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum + ')').textContent == document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')').textContent) {
                    if (document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')').setAttribute('class', 'wrong');
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
                    if (document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').setAttribute('class', 'wrong');
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

/*                  GAME MODES                      */
function game(e) {
    clean(1);
    let numValores = parseInt((tamSudoku ** 2) / 2) - parseInt((tamSudoku ** 2) / 6);
    //bug por aqui.
    //repete números
    //console.log('');
    let posit = 0;
    let invalid = 0;
    while (posit < numValores) {
        let randomNum = [
            (parseInt(Math.random() * tamSudoku) + 1),
            (parseInt(Math.random() * tamSudoku) + 1)
        ];
        while (document.querySelector('tr:nth-of-type(' + randomNum[0] + ') > td:nth-of-type(' + randomNum[1] + ')').classList == 'fixo') {
            console.log('repetiu lugar');
            randomNum[0] = (parseInt(Math.random() * tamSudoku) + 1);
            randomNum[1] = (parseInt(Math.random() * tamSudoku) + 1);
        }
        let problem = 0;
        let contador = 0;
        while (problem != 2 || contador == 3) {
            console.log('valo igual');
            problem = 0;
            randomNum[2] = (parseInt(Math.random() * tamSudoku) + 1);
            contador++;
            //na mesma coluna
            for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')') && problem != 1; c++) {
                if (c != randomNum[0] && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + randomNum[1] + ')').textContent == randomNum[2]) {
                    console.log('igual na mesma coluna');
                    problem = 1;
                }
            }
            //na mesma row
            for (let c = 1; document.querySelector('tr:nth-of-type(' + randomNum[0] + ')>td:nth-of-type(' + c + ')') && problem != 1; c++) {
                if (c != randomNum[1] && document.querySelector('tr:nth-of-type(' + randomNum[0] + ')>td:nth-of-type(' + c + ')').textContent == randomNum[2]) {
                    console.log('igual na mesma row');
                    problem = 1;
                }
            }
            if (problem != 1) {
                console.log('foi');
                document.querySelector('tr:nth-of-type(' + randomNum[0] + ') > td:nth-of-type(' + randomNum[1] + ')').textContent = randomNum[2];
                document.querySelector('tr:nth-of-type(' + randomNum[0] + ') > td:nth-of-type(' + randomNum[1] + ')').classList.add('fixo');
                posit++
                problem = 2;
            }
            if (contador == 3) {
                console.log('ultrapassou limite');
                clean(1);
                posit = 0;
            }
        }

    }
}

game();