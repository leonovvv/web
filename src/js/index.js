var input = document.getElementById("search-field");
input.oninput = function() {
    if(input.value==1)
    {
        document.getElementsByClassName('row1')[0].style=("grid-row: 3 / 4");
        document.getElementsByClassName('row3')[0].style=("grid-row: 1 / 2");
    }else if(input.value==2){
        document.getElementsByClassName('row3')[0].style=("grid-row: 4 / 5");
        document.getElementsByClassName('row4')[0].style=("grid-row: 3 / 4");
    }
    else
    {
        document.getElementsByClassName('row1')[0].style=("grid-row: 1 / 2");
        document.getElementsByClassName('row3')[0].style=("grid-row: 3 / 4");
        document.getElementsByClassName('row4')[0].style=("grid-row: 4 / 5");

    }
};