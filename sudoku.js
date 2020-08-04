clean(1);

/*             SETTING BUTTONS                                   */
const div = document.getElementById('div-top');

// Problems here
const buttonPlay = document.getElementById('play');
buttonPlay.addEventListener('click', game);

const buttonCHECK = document.getElementById('check');
buttonCHECK.addEventListener('click', check);

const buttonRETRY = document.getElementById('retry');
buttonRETRY.addEventListener('click', function(e) {
    clean(2);
});

const buttonDIF = document.getElementById('dif');
buttonDIF.addEventListener('click', function(e){
    document.getElementById('div-dif').style.display = 'flex';
    document.getElementById('div-top').style.display = 'none';
    document.getElementById('div-table').style.display = 'none';
});

/*              DIFFICULTIES                    */
//Problems here
const buttonE = document.getElementById('button-easy');
buttonE.addEventListener('click', function(e){
    document.getElementById('div-dif').style.display = 'none';
    document.getElementById('div-top').style.display = 'flex';
    document.getElementById('div-table').style.display = 'flex';
    var tamSudoku = 6;
    var div = document.getElementById('div-table');
    var table = document.getElementById('table');
    div.removeChild(table);
    table = document.createElement('table');
    table.setAttribute('id', 'table');
    div.appendChild(table);
    createTable(tamSudoku);
    eventListeners(tamSudoku)
    var num = parseInt((tamSudoku ** 2) / 2) - parseInt((tamSudoku ** 2) / 9);
    game(num, tamSudoku);
});
const buttonM = document.getElementById('button-medium');
buttonM.addEventListener('click', function(e){
    document.getElementById('div-dif').style.display = 'none';
    document.getElementById('div-top').style.display = 'flex';
    document.getElementById('div-table').style.display = 'flex';
    var tamSudoku = 6;
    var div = document.getElementById('div-table');
    var table = document.getElementById('table');
    div.removeChild(table);
    table = document.createElement('table');
    table.setAttribute('id', 'table');
    div.appendChild(table);
    createTable(tamSudoku);
    eventListeners(tamSudoku)
    var num = parseInt((tamSudoku ** 2) / 2) - parseInt((tamSudoku ** 2) / 9);
    game(num, tamSudoku);

});
const buttonH = document.getElementById('button-hard');
buttonH.addEventListener('click', function(e){
    document.getElementById('div-dif').style.display = 'none';
    document.getElementById('div-top').style.display = 'flex';
    document.getElementById('div-table').style.display = 'flex';
    var tamSudoku = 9;
    var div = document.getElementById('div-table');
    var table = document.getElementById('table');
    div.removeChild(table);
    table = document.createElement('table');
    table.setAttribute('id', 'table');
    div.appendChild(table);
    createTable(tamSudoku);
    eventListeners(tamSudoku)
    var num = parseInt((tamSudoku ** 2) / 2) - parseInt((tamSudoku ** 2) / 9);
    game(num, tamSudoku);

});
const buttonG = document.getElementById('button-god');
buttonG.addEventListener('click', function(e){
    document.getElementById('div-dif').style.display = 'none';
    document.getElementById('div-top').style.display = 'flex';
    document.getElementById('div-table').style.display = 'flex';
    var tamSudoku = 6;
    var div = document.getElementById('div-table');
    var table = document.getElementById('table');
    div.removeChild(table);
    table = document.createElement('table');
    table.setAttribute('id', 'table');
    div.appendChild(table);
    createTable(tamSudoku);
    eventListeners(tamSudoku)
    var num = parseInt((tamSudoku ** 2) / 2) - parseInt((tamSudoku ** 2) / 9);
    game(num, tamSudoku);

});

/*             CREATING THE TR AND TD                 */
function createTable(tamSudoku) {
    if (tamSudoku <= 4) {
        document.getElementById('table').className = 'small';
    }
    if (tamSudoku > 4 && tamSudoku <= 6) {
        document.getElementById('table').className = 'medium';
    }
    if (tamSudoku > 6 && tamSudoku <= 9 || tamSudoku > 9) {
        document.getElementById('table').className = 'big';
    }
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
function eventListeners(tamSudoku) {
    let z = 0;
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
}

/*             CHECK                      */
function check(mode) {
    var incorrect = 0;

    //HORIZONTAL
    for (let rowNum = 1; document.querySelector('tr:nth-of-type(' + rowNum + ')'); rowNum++) {
        for (let dataNum = 1; document.querySelector('tr:nth-of-type(' + rowNum + ')>td:nth-of-type(' + dataNum + ')'); dataNum++) {
            for (let dataNum2 = 1; document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')'); dataNum2++) {
                if (dataNum != dataNum2 && document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum + ')').textContent == document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')').textContent && document.querySelector('tr:nth-of-type(' + rowNum + ') > td:nth-of-type(' + dataNum2 + ')').textContent != '+') {
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
                if (vrow2 != vrow3 && document.querySelector('tr:nth-of-type(' + vrow2 + ') > td:nth-of-type(' + hdata + ')').textContent == document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').textContent && document.querySelector('tr:nth-of-type(' + vrow3 + ') > td:nth-of-type(' + hdata + ')').textContent != '+') {
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

    //GRID

    if( document.querySelector('tr:nth-of-type(7)') ){
        // 1 - 3 => VERTICAL
        if(true){
        // 1 - 3 => HORIZONTAL
        let armGrid = [];
        for(let c = 1; c <= 3; c++){
            for(let c1 = 1;c1 <= 3; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')').textContent,c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0] && armGrid[c1][0] != '+'){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }
        if(true){
        // 4 - 6 => HORIZONTAL
        let armGrid = [];
        for(let c = 1; c <= 3; c++){
            for(let c1 = 4;c1 <= 6; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }
        if(true){
        // 7 - 9 => HORIZONTAL
        let armGrid = [];
        for(let c = 1; c <= 3; c++){
            for(let c1 = 7;c1 <= 9; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }

        // 4 - 6 => VERTICAL
        if(true){
        // 1 - 3 => HORIZONTAL
        let armGrid = [];
        for(let c = 4; c <= 6; c++){
            for(let c1 = 1;c1 <= 3; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }
        if(true){
        // 4 - 6 => HORIZONTAL
        let armGrid = [];
        for(let c = 4; c <= 6; c++){
            for(let c1 = 4;c1 <= 6; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }
        if(true){
        // 7 - 9 => HORIZONTAL
        let armGrid = [];
        for(let c = 4; c <= 6; c++){
            for(let c1 = 7;c1 <= 9; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }

        // 7 - 9 => VERTICAL
        if(true){
        // 1 - 3 => HORIZONTAL
        let armGrid = [];
        for(let c = 7; c <= 9; c++){
            for(let c1 = 1;c1 <= 3; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }
        if(true){
        // 4 - 6 => HORIZONTAL
        let armGrid = [];
        for(let c = 7; c <= 9; c++){
            for(let c1 = 4;c1 <= 6; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
            }        
        }
        }
        if(true){
        // 7 - 9 => HORIZONTAL
        let armGrid = [];
        for(let c = 7; c <= 9; c++){
            for(let c1 = 7;c1 <= 9; c1++){
                armGrid[armGrid.length] = [document.querySelector('tr:nth-of-type(' + c + ') > td:nth-of-type(' + c1 + ')'),c,c1];
            }
        }
        for(let c = 0;c < armGrid.length;c++){
            for(let c1 = 0;c1 < armGrid.length;c1++){
                if(c != c1 && armGrid[c][0] == armGrid[c1][0]){
                    //console.log('Onde c é '+c+' '+armGrid[c][0]+' - Onde c1 é '+c1+' '+armGrid[c1][0]);
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c][1] + ') > td:nth-of-type(' + armGrid[c][2] + ')').setAttribute('class', 'wrong');
                    }
                    if (document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').classList != 'fixo') {
                        document.querySelector('tr:nth-of-type(' + armGrid[c1][1] + ') > td:nth-of-type(' + armGrid[c1][2] + ')').setAttribute('class', 'wrong');
                    }
                    incorrect++;
                }
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

function colRowCheck(numValores, posit, tamSudoku) {
    while (posit < numValores) {
        let randomNum = [
            (parseInt(Math.random() * tamSudoku) + 1),
            (parseInt(Math.random() * tamSudoku) + 1)
        ];
        while (document.querySelector('tr:nth-of-type(' + randomNum[0] + ') > td:nth-of-type(' + randomNum[1] + ')').classList == 'fixo') {
            randomNum[0] = (parseInt(Math.random() * tamSudoku) + 1);
            randomNum[1] = (parseInt(Math.random() * tamSudoku) + 1);
        }
        let problem = 0;
        let contador = 0;
        while (problem != 2 && contador != 25) {
            problem = 0;
            randomNum[2] = (parseInt(Math.random() * tamSudoku) + 1);
            contador++;
            //  ON SAME COLUMN
            for (let c = 1; document.querySelector('tr:nth-of-type(' + c + ')') && problem != 1; c++) {
                if (c != randomNum[0] && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + randomNum[1] + ')').textContent == randomNum[2]) {
                    problem = 1;
                }
            }

            //  ON SAME ROW
            for (let c = 1; document.querySelector('tr:nth-of-type(' + randomNum[0] + ')>td:nth-of-type(' + c + ')') && problem != 1; c++) {
                if (c != randomNum[1] && document.querySelector('tr:nth-of-type(' + randomNum[0] + ')>td:nth-of-type(' + c + ')').textContent == randomNum[2]) {
                    problem = 1;
                }
            }

            //  ON GRID
            //      1 - 3 => VERTICAL
            if( randomNum[0] <= 3){
                //      1 - 3 => HORIZONTAL
                if( randomNum[1] <= 3){
                    for(let c = 1; c <= 3 && problem != 1; c++){
                        for(let c1 = 1;c1 <= 3; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }

                }
                //      4 - 6 => HORIZONTAL
                if(randomNum[1] >= 4 && randomNum[1] <= 6){
                    for(let c = 1; c <= 3 && problem != 1; c++){
                        for(let c1 = 4;c1 <= 6; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }
                }  
                //      7 - 9 => HORIZONTAL  
                if(randomNum[1] >= 7 && randomNum[1] <= 9){
                    for(let c = 1; c <= 3 && problem != 1; c++){
                        for(let c1 = 7;c1 <= 9; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }
                }
            }
            
            //      4 - 6 => VERTICAL
            if( randomNum[0] >= 4 && randomNum[0] <= 6){
                //      1 - 3 => HORIZONTAL
                if( randomNum[1] <= 3){
                    for(let c = 4; c <= 6 && problem != 1; c++){
                        for(let c1 = 1;c1 <= 3; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }

                }
                //      4 - 6 => HORIZONTAL
                if(randomNum[1] >= 4 && randomNum[1] <= 6){
                    for(let c = 4; c <= 6 && problem != 1; c++){
                        for(let c1 = 4;c1 <= 6; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }
                }  
                //      7 - 9 => HORIZONTAL  
                if(randomNum[1] >= 7 && randomNum[1] <= 9){
                    for(let c = 4; c <= 6 && problem != 1; c++){
                        for(let c1 = 7;c1 <= 9; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }
                }
            }

            //      7 - 9 => VERTICAL
            if( randomNum[0] >= 7 && randomNum[0] <= 9){
                //      1 - 3 => HORIZONTAL
                if( randomNum[1] <= 3){
                    for(let c = 7; c <= 9 && problem != 1; c++){
                        for(let c1 = 1;c1 <= 3; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }

                }
                //      4 - 6 => HORIZONTAL
                if(randomNum[1] >= 4 && randomNum[1] <= 6){
                    for(let c = 7; c <= 9 && problem != 1; c++){
                        for(let c1 = 4;c1 <= 6; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }
                }  
                //      7 - 9 => HORIZONTAL  
                if(randomNum[1] >= 7 && randomNum[1] <= 9){
                    for(let c = 7; c <= 9 && problem != 1; c++){
                        for(let c1 = 7;c1 <= 9; c1++){
                            if(randomNum[0] != c && randomNum[1] != c1 && document.querySelector('tr:nth-of-type(' + c + ')>td:nth-of-type(' + c1 + ')').textContent == randomNum[2]){
                                problem = 1;
                            }
                        }
                    }
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
                clean(1);
                posit = 0;
            }
        }

    }
}

/*                  GAME MODES                      */
function game(numValores, tamSudoku) {
    clean(1);
    var posit = 0;
    colRowCheck(numValores, posit, tamSudoku);
}
