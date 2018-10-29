import $ from 'jquery';
import showTime from './module/time';
import showTable from './module/table';
import './scss/style.scss';

$(document).ready(function(){
    //----------Боковое меню
    $('.open').on('click', function(){
        $('.content__nav').addClass('openNav').removeClass('closeNav');
        $(this).hide();

    });
    $('.content__nav-close').on('click', function(){
        $('.open').show().css('z-index', '1');
        $('.content__nav').addClass('closeNav').removeClass('openNav');
    });
    //----------Переключаем табы
    $('ul.content__nav-list').on('click', 'li:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.content').find('main.content__body div.content__body-item')
            .removeClass('active').eq($(this).index()).addClass('active');
    });
//======================================================================================================================
    //ShowTime
    showTime();

    //showTable;
    showTable();


//======================================================================================================================
    //----------create table
    document.querySelector('.content__body-btn').onclick = function(){

        let container = document.getElementsByClassName('content__body-container')[0];
        let row = document.getElementsByClassName('content__body-input')[0].value;
        let column = document.getElementsByClassName('content__body-input')[1].value;
        let i = 0;
        let cloneTr;
        let cloneTd;
        console.log(row, column);
        //create table
        let table = document.createElement('table');
        table.className = 'content__body-table';
        table.style.borderSpacing = `1px`;
        table.style.border = `1px solid grey`;
        container.appendChild(table);

        //create row
        let tr = document.createElement('tr');
        tr.className = 'content__body-tr';
         //table.appendChild(tr);


        //crete column
        let td = document.createElement('td');
        td.className = 'content__body-td';
        td.style.width = `70px`;
        td.style.height = `30px`;
        //tr.appendChild(td);

        cloneTr = tr.cloneNode(true);
        cloneTd = td.cloneNode(true);

        // table.appendChild(cloneTr);
        // cloneTr.appendChild(cloneTd);
};

//======================================================================================================================


});

