export default function showTable(){
    let row;
    let col;

//get element content__body-item
let contentItem = document.getElementsByClassName('content__body-item')[0];

//create element divWrapper
    let divWrapper = document.createElement('div');
    divWrapper.className = 'table__divWrapper';
    contentItem.appendChild(divWrapper);

//create element input rows
    let tableRows = document.createElement('input');
    tableRows.className = 'table__input table__rows';
    tableRows.setAttribute('type', 'text');
    tableRows.setAttribute('value', '');
    tableRows.setAttribute('placeholder', 'enter value rows');
    tableRows.onchange = getValueRow;
    divWrapper.appendChild(tableRows);

//create element input columns
    let tableColumns = document.createElement('input');
    tableColumns.className = 'table__input table__columns';
    tableColumns.setAttribute('type', 'text');
    tableColumns.setAttribute('value', '');
    tableColumns.setAttribute('placeholder', 'enter value columns');
    tableColumns.onchange = getValueCol;
    divWrapper.appendChild(tableColumns);

//create element button
    let buttonAddTable = document.createElement('button');
    buttonAddTable.className = 'table__btn';
    buttonAddTable.innerHTML = 'create';
    buttonAddTable.onclick = findTable;
    divWrapper.appendChild(buttonAddTable);

//create element divWrapTable
    let divWrapTable = document.createElement('div');
    divWrapTable.className = 'table__divWrapTable';
    contentItem.appendChild(divWrapTable);

//create element text error
    let textError = document.createElement('span');
    textError.className = 'table__textError';
    textError.innerHTML = 'Enter number, please';


    function getValueRow(e){
        row = tableRows.value;
        row = +row;
    }
    function getValueCol(e){
        col = tableColumns.value;
        col = +col;
    }

    function toCreateTable(){

        if(isNaN(row) || isNaN(col)){
            console.log('1');
            divWrapTable.appendChild(textError);
        }else{
            textError.remove();
        }
        let tr, td;
        //clear value input
        tableRows.value = '';
        tableColumns.value = '';
        //create element table
        let table = document.createElement('table');
        table.className = 'table';
        divWrapTable.appendChild(table);
        for( let i = 0; i < row; i++ ) {
            tr = document.createElement('tr');
            for (let j = 0; j < col; j++) {
                td = document.createElement('td');
                td.className = 'table__col';
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        row = 0;
        col = 0;
    }

    function toRemoveTable(){
        let table = document.querySelector('table');
        table.remove();
    }

    function findTable(){
        let table = document.querySelector('table');
        if(!table){
            toCreateTable();
        }else{
            toRemoveTable();
            toCreateTable();
        }
    }

}
