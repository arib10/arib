

document.getElementById('copytext').innerHTML += new Date().getFullYear() + ".";

//variables

var matrixOperation, matrixNumber, matrixOrder, goBtn, inpBtn, ftds, i, a, x, delBtn, two2by2,three2by2, fa1, fa2, fa11, fa12, fa21, fa22, 
operator, btnDiv, answerBtn, ans11, ans12, ans21, ans22, answerBox22, answerBox23, determinantAns, determAns, ordchilds, modal, fdata11, fdata12, fdata21, fdata22, sdata11, sdata12, sdata21, sdata22, comment, comment1, comment2, comment3;

//declaration of variables values
matrixOperation = document.getElementById('matrixOperation');
matrixNumber = document.getElementById('matrixNumber');
matrixOrder = document.getElementById('matrixOrder');
goBtn = document.getElementById('gobtn');
delBtn = document.getElementById('delBtn');
numchilds = document.querySelectorAll('#matrixNumber option');
ordchilds = document.querySelectorAll('#matrixOrder option');
btnDiv = document.getElementsByClassName('btnDiv')[0];
answerBtn = document.getElementById('myanswer');
answerBox22 = document.getElementsByClassName('answersBox22')[0];
determinantAns = answerBox22.getElementsByTagName('p')[0];
comment = document.getElementById('comm');
comment1 = document.getElementById('comm1');
comment2 = document.getElementById('comm2');
comment3 = document.getElementById('comm3');

comment.style.fontWeight = "bold";
comment1.style.fontWeight = "bold";
comment2.style.fontWeight = "bold";
comment3.style.fontWeight = "bold";

//modal answer pop up
modal = document.getElementsByClassName('mymodal')[1];

//two 2by2 tables
two2by2 = document.getElementsByClassName('two2by2')[0];

two2by2Table1 = document.querySelectorAll('.two2by2 .table')[0];
two2by2Table1tr1 = two2by2Table1.getElementsByTagName('tr')[0];
two2by2Table1tr2 = two2by2Table1.getElementsByTagName('tr')[1];

fdata11 = two2by2Table1tr1.getElementsByTagName('td')[0];
fdata12 = two2by2Table1tr1.getElementsByTagName('td')[1];

fdata21 = two2by2Table1tr2.getElementsByTagName('td')[0];
fdata22 = two2by2Table1tr2.getElementsByTagName('td')[1];

two2by2Table2 = document.querySelectorAll('.two2by2 .table')[1];
two2by2Table2tr1 = two2by2Table2.getElementsByTagName('tr')[0];
two2by2Table2tr2 = two2by2Table2.getElementsByTagName('tr')[1];

sdata11 = two2by2Table2tr1.getElementsByTagName('td')[0];
sdata12 = two2by2Table2tr1.getElementsByTagName('td')[1];

sdata21 = two2by2Table2tr2.getElementsByTagName('td')[0];
sdata22 = two2by2Table2tr2.getElementsByTagName('td')[1];
//two 2by2 variable declaration ends here;


//three 2by2
three2by2 = document.getElementsByClassName('three2by2')[0];


three2by2Table1 = document.querySelectorAll('.three2by2 .table')[0];
three2by2Table1tr1 = three2by2Table1.getElementsByTagName('tr')[0];
three2by2Table1tr2 = three2by2Table1.getElementsByTagName('tr')[1];

ftdata11 = three2by2Table1tr1.getElementsByTagName('td')[0];
ftdata12 = three2by2Table1tr1.getElementsByTagName('td')[1];

ftdata21 = three2by2Table1tr2.getElementsByTagName('td')[0];
ftdata22 = three2by2Table1tr2.getElementsByTagName('td')[1];

three2by2Table2 = document.querySelectorAll('.three2by2 .table')[1];
three2by2Table2tr1 = three2by2Table2.getElementsByTagName('tr')[0];
three2by2Table2tr2 = three2by2Table2.getElementsByTagName('tr')[1];

stdata11 = three2by2Table2tr1.getElementsByTagName('td')[0];
stdata12 = three2by2Table2tr1.getElementsByTagName('td')[1];

stdata21 = three2by2Table2tr2.getElementsByTagName('td')[0];
stdata22 = three2by2Table2tr2.getElementsByTagName('td')[1];

three2by2Table3 = document.querySelectorAll('.three2by2 .table')[2];
three2by2Table3tr1 = three2by2Table3.getElementsByTagName('tr')[0];
three2by2Table3tr2 = three2by2Table3.getElementsByTagName('tr')[1];

ttdata11 = three2by2Table3tr1.getElementsByTagName('td')[0];
ttdata12 = three2by2Table3tr1.getElementsByTagName('td')[1];

ttdata21 = three2by2Table3tr2.getElementsByTagName('td')[0];
ttdata22 = three2by2Table3tr2.getElementsByTagName('td')[1];


//two by three varaibles...

//one 2by3
one2by3 = document.getElementsByClassName('one2by3')[0];
one2by3Tab = one2by3.getElementsByTagName('table')[0];

one2by3val1 = one2by3Tab.getElementsByTagName('tr')[0]
one2by3val11 = one2by3val1.firstElementChild;
one2by3val12 = document.getElementById('one2by3mid1');
one2by3val13 = one2by3val1.lastElementChild;

one2by3val2 = one2by3Tab.getElementsByTagName('tr')[1]
one2by3val21 = one2by3val2.firstElementChild;
one2by3val22 = document.getElementById('one2by3mid2');
one2by3val23 = one2by3val2.lastElementChild;



// two 2by3
two2by3 = document.getElementsByClassName('two2by3')[0];

//first table
two2by3Taba = two2by3.getElementsByTagName('table')[0];

two2by3vala1 = two2by3Taba.getElementsByTagName('tr')[0]
two2by3vala11 = two2by3vala1.firstElementChild;
two2by3vala12 = document.getElementById('two2by3mid1');
two2by3vala13 = two2by3vala1.lastElementChild;

two2by3vala2 = two2by3Taba.getElementsByTagName('tr')[1]
two2by3vala21 = two2by3vala2.firstElementChild;
two2by3vala22 = document.getElementById('two2by3mid2');
two2by3vala23 = two2by3vala2.lastElementChild;

//second table
two2by3Tabb = two2by3.getElementsByTagName('table')[1];

two2by3valb1 = two2by3Tabb.getElementsByTagName('tr')[0]
two2by3valb11 = two2by3valb1.firstElementChild;
two2by3valb12 = document.getElementById('two2by3mid3');
two2by3valb13 = two2by3valb1.lastElementChild;

two2by3valb2 = two2by3Tabb.getElementsByTagName('tr')[1]
two2by3valb21 = two2by3valb2.firstElementChild;
two2by3valb22 = document.getElementById('two2by3mid4');
two2by3valb23 = two2by3valb2.lastElementChild;




// three 2by3
three2by3 = document.getElementsByClassName('three2by3')[0];

//first table
three2by3Taba = three2by3.getElementsByTagName('table')[0];

three2by3vala1 = three2by3Taba.getElementsByTagName('tr')[0]
three2by3vala11 = three2by3vala1.firstElementChild;
three2by3vala12 = document.getElementById('three2by3mid1');
three2by3vala13 = three2by3vala1.lastElementChild;

three2by3vala2 = three2by3Taba.getElementsByTagName('tr')[1]
three2by3vala21 = three2by3vala2.firstElementChild;
three2by3vala22 = document.getElementById('three2by3mid2');
three2by3vala23 = three2by3vala2.lastElementChild;

//second table
three2by3Tabb = three2by3.getElementsByTagName('table')[1];

three2by3valb1 = three2by3Tabb.getElementsByTagName('tr')[0]
three2by3valb11 = three2by3valb1.firstElementChild;
three2by3valb12 = document.getElementById('three2by3mid3');
three2by3valb13 = three2by3valb1.lastElementChild;

three2by3valb2 = three2by3Tabb.getElementsByTagName('tr')[1]
three2by3valb21 = three2by3valb2.firstElementChild;
three2by3valb22 = document.getElementById('three2by3mid4');
three2by3valb23 = three2by3valb2.lastElementChild;

//third table
three2by3Tabc = three2by3.getElementsByTagName('table')[2];

three2by3valc1 = three2by3Tabc.getElementsByTagName('tr')[0]
three2by3valc11 = three2by3valc1.firstElementChild;
three2by3valc12 = document.getElementById('three2by3mid5');
three2by3valc13 = three2by3valc1.lastElementChild;

three2by3valc2 = three2by3Tabc.getElementsByTagName('tr')[1]
three2by3valc21 = three2by3valc2.firstElementChild;
three2by3valc22 = document.getElementById('three2by3mid6');
three2by3valc23 = three2by3valc2.lastElementChild;




//three by two variable goes here...


//one 3by2
one3by2 = document.getElementsByClassName('one3by2')[0];

one3by2Tab = one3by2.getElementsByTagName('table')[0];

one3by2val1 = one3by2Tab.getElementsByTagName('tr')[0]
one3by2val11 = one3by2val1.firstElementChild;
one3by2val12 = one3by2val1.lastElementChild;

one3by2val2 = one3by2Tab.getElementsByTagName('tr')[1]
one3by2val21 = one3by2val2.firstElementChild;
one3by2val22 = one3by2val2.lastElementChild;

one3by2val3 = one3by2Tab.getElementsByTagName('tr')[2]
one3by2val31 = one3by2val3.firstElementChild;
one3by2val32 = one3by2val3.lastElementChild;


//two 3by2
two3by2 = document.getElementsByClassName('two3by2')[0];

//first table
two3by2Taba = two3by2.getElementsByTagName('table')[0];

two3by2vala1 = two3by2Taba.getElementsByTagName('tr')[0]
two3by2vala11 = two3by2vala1.firstElementChild;
two3by2vala12 = two3by2vala1.lastElementChild;

two3by2vala2 = two3by2Taba.getElementsByTagName('tr')[1]
two3by2vala21 = two3by2vala2.firstElementChild;
two3by2vala22 = two3by2vala2.lastElementChild;

two3by2vala3 = two3by2Taba.getElementsByTagName('tr')[2]
two3by2vala31 = two3by2vala3.firstElementChild;
two3by2vala32 = two3by2vala3.lastElementChild;


//second table
two3by2Tabb = two3by2.getElementsByTagName('table')[1];

two3by2valb1 = two3by2Tabb.getElementsByTagName('tr')[0]
two3by2valb11 = two3by2valb1.firstElementChild;
two3by2valb12 = two3by2valb1.lastElementChild;

two3by2valb2 = two3by2Tabb.getElementsByTagName('tr')[1]
two3by2valb21 = two3by2valb2.firstElementChild;
two3by2valb22 = two3by2valb2.lastElementChild;

two3by2valb3 = two3by2Tabb.getElementsByTagName('tr')[2]
two3by2valb31 = two3by2valb3.firstElementChild;
two3by2valb32 = two3by2valb3.lastElementChild;



//three 3by2
three3by2 = document.getElementsByClassName('three3by2')[0];

//first table
three3by2Taba = three3by2.getElementsByTagName('table')[0];

three3by2vala1 = three3by2Taba.getElementsByTagName('tr')[0]
three3by2vala11 = three3by2vala1.firstElementChild;
three3by2vala12 = three3by2vala1.lastElementChild;

three3by2vala2 = three3by2Taba.getElementsByTagName('tr')[1]
three3by2vala21 = three3by2vala2.firstElementChild;
three3by2vala22 = three3by2vala2.lastElementChild;

three3by2vala3 = three3by2Taba.getElementsByTagName('tr')[2]
three3by2vala31 = three3by2vala3.firstElementChild;
three3by2vala32 = three3by2vala3.lastElementChild;


//second table
three3by2Tabb = three3by2.getElementsByTagName('table')[1];

three3by2valb1 = three3by2Tabb.getElementsByTagName('tr')[0]
three3by2valb11 = three3by2valb1.firstElementChild;
three3by2valb12 = three3by2valb1.lastElementChild;

three3by2valb2 = three3by2Tabb.getElementsByTagName('tr')[1]
three3by2valb21 = three3by2valb2.firstElementChild;
three3by2valb22 = three3by2valb2.lastElementChild;

three3by2valb3 = three3by2Tabb.getElementsByTagName('tr')[2]
three3by2valb31 = three3by2valb3.firstElementChild;
three3by2valb32 = three3by2valb3.lastElementChild;


//third table
three3by2Tabc = three3by2.getElementsByTagName('table')[2];

three3by2valc1 = three3by2Tabc.getElementsByTagName('tr')[0]
three3by2valc11 = three3by2valc1.firstElementChild;
three3by2valc12 = three3by2valc1.lastElementChild;

three3by2valc2 = three3by2Tabc.getElementsByTagName('tr')[1]
three3by2valc21 = three3by2valc2.firstElementChild;
three3by2valc22 = three3by2valc2.lastElementChild;

three3by2valc3 = three3by2Tabc.getElementsByTagName('tr')[2]
three3by2valc31 = three3by2valc3.firstElementChild;
three3by2valc32 = three3by2valc3.lastElementChild;




// three by three variables...

//one 3by3 
one3by3 = document.getElementsByClassName('one3by3')[0];

one3by3Tab = one3by3.getElementsByTagName('table')[0];

one3by3val1 = one3by3Tab.getElementsByTagName('tr')[0]
one3by3val11 = one3by3val1.firstElementChild;
one3by3val12 = document.getElementById('one3by3mid1');
one3by3val13 = one3by3val1.lastElementChild;

one3by3val2 = one3by3Tab.getElementsByTagName('tr')[1]
one3by3val21 = one3by3val2.firstElementChild;
one3by3val22 = document.getElementById('one3by3mid2');
one3by3val23 = one3by3val2.lastElementChild;

one3by3val3 = one3by3Tab.getElementsByTagName('tr')[2]
one3by3val31 = one3by3val3.firstElementChild;
one3by3val32 = document.getElementById('one3by3mid3');
one3by3val33 = one3by3val3.lastElementChild;





//two 3by3
two3by3 = document.getElementsByClassName('two3by3')[0];


//first table
two3by3Taba = two3by3.getElementsByTagName('table')[0];

two3by3vala1 = two3by3Taba.getElementsByTagName('tr')[0]
two3by3vala11 = two3by3vala1.firstElementChild;
two3by3vala12 = document.getElementById('two3by3mid1');
two3by3vala13 = two3by3vala1.lastElementChild;

two3by3vala2 = two3by3Taba.getElementsByTagName('tr')[1]
two3by3vala21 = two3by3vala2.firstElementChild;
two3by3vala22 = document.getElementById('two3by3mid2');
two3by3vala23 = two3by3vala2.lastElementChild;

two3by3vala3 = two3by3Taba.getElementsByTagName('tr')[2]
two3by3vala31 = two3by3vala3.firstElementChild;
two3by3vala32 = document.getElementById('two3by3mid3');
two3by3vala33 = two3by3vala3.lastElementChild;


//second table
two3by3Tabb = two3by3.getElementsByTagName('table')[1];

two3by3valb1 = two3by3Tabb.getElementsByTagName('tr')[0]
two3by3valb11 = two3by3valb1.firstElementChild;
two3by3valb12 = document.getElementById('two3by3mid4');
two3by3valb13 = two3by3valb1.lastElementChild;

two3by3valb2 = two3by3Tabb.getElementsByTagName('tr')[1]
two3by3valb21 = two3by3valb2.firstElementChild;
two3by3valb22 = document.getElementById('two3by3mid5');
two3by3valb23 = two3by3valb2.lastElementChild;

two3by3valb3 = two3by3Tabb.getElementsByTagName('tr')[2]
two3by3valb31 = two3by3valb3.firstElementChild;
two3by3valb32 = document.getElementById('two3by3mid6');
two3by3valb33 = two3by3valb3.lastElementChild;




//three 3by3
three3by3 = document.getElementsByClassName('three3by3')[0];



//first table
three3by3Taba = three3by3.getElementsByTagName('table')[0];

three3by3vala1 = three3by3Taba.getElementsByTagName('tr')[0]
three3by3vala11 = three3by3vala1.firstElementChild;
three3by3vala12 = document.getElementById('three3by3mid1');
three3by3vala13 = three3by3vala1.lastElementChild;

three3by3vala2 = three3by3Taba.getElementsByTagName('tr')[1]
three3by3vala21 = three3by3vala2.firstElementChild;
three3by3vala22 = document.getElementById('three3by3mid2');
three3by3vala23 = three3by3vala2.lastElementChild;

three3by3vala3 = three3by3Taba.getElementsByTagName('tr')[2]
three3by3vala31 = three3by3vala3.firstElementChild;
three3by3vala32 = document.getElementById('three3by3mid3');
three3by3vala33 = three3by3vala3.lastElementChild;


//second table
three3by3Tabb = three3by3.getElementsByTagName('table')[1];

three3by3valb1 = three3by3Tabb.getElementsByTagName('tr')[0]
three3by3valb11 = three3by3valb1.firstElementChild;
three3by3valb12 = document.getElementById('three3by3mid4');
three3by3valb13 = three3by3valb1.lastElementChild;

three3by3valb2 = three3by3Tabb.getElementsByTagName('tr')[1]
three3by3valb21 = three3by3valb2.firstElementChild;
three3by3valb22 = document.getElementById('three3by3mid5');
three3by3valb23 = three3by3valb2.lastElementChild;

three3by3valb3 = three3by3Tabb.getElementsByTagName('tr')[2]
three3by3valb31 = three3by3valb3.firstElementChild;
three3by3valb32 = document.getElementById('three3by3mid6');
three3by3valb33 = three3by3valb3.lastElementChild;


//third table
three3by3Tabc = three3by3.getElementsByTagName('table')[2];

three3by3valc1 = three3by3Tabc.getElementsByTagName('tr')[0]
three3by3valc11 = three3by3valc1.firstElementChild;
three3by3valc12 = document.getElementById('three3by3mid7');
three3by3valc13 = three3by3valc1.lastElementChild;

three3by3valc2 = three3by3Tabc.getElementsByTagName('tr')[1]
three3by3valc21 = three3by3valc2.firstElementChild;
three3by3valc22 = document.getElementById('three3by3mid8');
three3by3valc23 = three3by3valc2.lastElementChild;

three3by3valc3 = three3by3Tabc.getElementsByTagName('tr')[2]
three3by3valc31 = three3by3valc3.firstElementChild;
three3by3valc32 = document.getElementById('three3by3mid9');
three3by3valc33 = three3by3valc3.lastElementChild;



//answers display for two-by-two
fans1 = document.querySelectorAll('table.twoby2answer tr')[0];
ans11 = fans1.firstElementChild;
ans12 = fans1.lastElementChild;

fans2 = document.querySelectorAll('table.twoby2answer tr')[1];
ans21 = fans2.firstElementChild;
ans22 = fans2.lastElementChild;

answerBox22.style.display = "none";
determinantAns.style.display = "none";


//answers display for two by three
twoby3Ans = document.getElementsByClassName('answersBox23')[0];
twoby3AnsTab = twoby3Ans.getElementsByTagName('table')[0];
twoby3Ans.style.display = "none";

twoby3ans1 = twoby3AnsTab.getElementsByTagName('tr')[0];
twoby3ans11 = twoby3ans1.firstElementChild;
twoby3ans12 = document.getElementById('twoby3mid1');
twoby3ans13 = twoby3ans1.lastElementChild;

twoby3ans2 = twoby3AnsTab.getElementsByTagName('tr')[1];
twoby3ans21 = twoby3ans2.firstElementChild;
twoby3ans22 = document.getElementById('twoby3mid2');
twoby3ans23 = twoby3ans2.lastElementChild;




//answers display for three by two
threeby2Ans = document.getElementsByClassName('answersBox32')[0];
threeby2AnsTab = threeby2Ans.getElementsByTagName('table')[0];
threeby2Ans.style.display = "none";

threeby2ans1 = threeby2AnsTab.getElementsByTagName('tr')[0];
threeby2ans11 = threeby2ans1.firstElementChild;
threeby2ans12 = threeby2ans1.lastElementChild;

threeby2ans2 = threeby2AnsTab.getElementsByTagName('tr')[1];
threeby2ans21 = threeby2ans2.firstElementChild;
threeby2ans22 = threeby2ans2.lastElementChild;

threeby2ans3 = threeby2AnsTab.getElementsByTagName('tr')[2];
threeby2ans31 = threeby2ans3.firstElementChild;
threeby2ans32 = threeby2ans3.lastElementChild;



//answers display for three by three
threeby3Ans = document.getElementsByClassName('answersBox33')[0];
threeby3AnsTab = threeby3Ans.getElementsByTagName('table')[0];
threeby3Ans.style.display = "none";

threeby3ans1 = threeby3AnsTab.getElementsByTagName('tr')[0];
threeby3ans11 = threeby3ans1.firstElementChild;
threeby3ans12 = document.getElementById('threeby3mid1');
threeby3ans13 = threeby3ans1.lastElementChild;

threeby3ans2 = threeby3AnsTab.getElementsByTagName('tr')[1];
threeby3ans21 = threeby3ans2.firstElementChild;
threeby3ans22 = document.getElementById('threeby3mid2');
threeby3ans23 = threeby3ans2.lastElementChild;

threeby3ans3 = threeby3AnsTab.getElementsByTagName('tr')[2];
threeby3ans31 = threeby3ans3.firstElementChild;
threeby3ans32 = document.getElementById('threeby3mid3');
threeby3ans33 = threeby3ans3.lastElementChild;



//when operation changes, change the number of possible matrices
matrixOperation.onchange = function() {
    if (this.value == "transpose" || this.value == "determinant" || this.value == "inverse") {
        numchilds[1].innerHTML = "";
        numchilds[1].value = "";
        numchilds[2].innerHTML = "";
        numchilds[2].value = "";
        numchilds[0].innerHTML = "one";
        numchilds[0].value = "one";
        
        matrixNumber.value = "one";
    }else{
        numchilds[1].innerHTML = "two";
        numchilds[1].value = "two";
        numchilds[2].innerHTML = "three";
        numchilds[2].value = "three";
    }

    if(this.value == "determinant" || this.value == "product" || this.value == "inverse"){
        ordchilds[1].innerHTML = "";
        ordchilds[1].value = "";
        ordchilds[2].innerHTML = "";
        ordchilds[2].value = "";
    }else{
        ordchilds[1].innerHTML = "2 × 3";
        ordchilds[1].value = "two-by-three";
        ordchilds[2].innerHTML = "3 × 2";
        ordchilds[2].value = "three-by-two"; 
    }

    
    if(matrixOperation.value == "sum" || matrixOperation.value == "product" || matrixOperation.value == "difference" ){
        numchilds[0].innerHTML = "";
        numchilds[0].value = "";
        
        matrixNumber.value = "two";
    }

    
}




//get the tds
ftds = document.querySelectorAll('.table tr td');

for(i = 0; i < ftds.length; i++){
    ftds[i].onclick = function() {
        this.style.backgroundColor = "#f1f1f1";
        this.innerHTML = "";
        mycont = this;

        inpBtn = document.getElementsByClassName('inpBtn');
        for(a = 0; a < inpBtn.length; a++){
            inpBtn[a].onclick = function(){
                mycont.innerHTML += this.innerHTML;
            }
        }
        delBtn.onclick = function() {
            mycont.innerHTML = mycont.innerHTML.slice(0, -1);
        }
    }
}



fa1 = document.querySelectorAll('div.one2by2 table tr')[0];
fa11 = fa1.firstElementChild;
fa12 = fa1.lastElementChild;


fa2 = document.querySelectorAll('div.one2by2 table tr')[1];
fa21 = fa2.firstElementChild;
fa22 = fa2.lastElementChild;
operator = document.getElementsByClassName('operator');
my2by2 = document.getElementsByClassName('one2by2')[0];





//whe the go button is clicked
goBtn.onclick = function() {
    
    if(matrixOperation.value == "sum" && matrixNumber.value == "one"){
        matrixNumber.value = "two";
    }
    
    
for(op = 0; op < operator.length; op++){
    if(matrixOperation.value == "sum" ){
        operator[op].innerHTML = "+";
    }
    if(matrixOperation.value == "difference" ){
        operator[op].innerHTML = "-";
    }
    if(matrixOperation.value == "product" ){
        operator[op].innerHTML = "×";
    }
}

    btnDiv.style.display = "block";
    answerBtn.style.display = "block";

//for two by two matrix operation
if(matrixOrder.value == "two-by-two"){

//for one
    if (matrixNumber.value == "one" ) {
    my2by2.style.display = "block";
    }else{
        my2by2.style.display = "none";
    }

//for two
    if (matrixNumber.value == "two") {
        two2by2.style.display = "flex";
    } else {
        two2by2.style.display = "none";
    }


//for three
if (matrixNumber.value == "three") {
    three2by2.style.display = "flex";
}else{
    three2by2.style.display = "none";
}

}else{
        three2by2.style.display = "none";
        two2by2.style.display = "none";
        my2by2.style.display = "none";
}
    

//for two by three matrices
if(matrixOrder.value == "two-by-three"){
    
    //for one two by three
    if(matrixNumber.value == "one"){
        one2by3.style.display = "block";
    }else{
        one2by3.style.display = "none";
    }
    
    //for two twobythree
    if(matrixNumber.value == "two"){
        two2by3.style.display = "flex";
    }else{
        two2by3.style.display = "none";
    }
    
    //for three twobythree
    if(matrixNumber.value == "three"){
        three2by3.style.display = "flex";
    }else{
        three2by3.style.display = "none";
    }
}else{
        three2by3.style.display = "none";
        two2by3.style.display = "none";
        one2by3.style.display = "none";
}    

//for three by two matrices
if(matrixOrder.value == "three-by-two"){
    
    //for one two by three
    if(matrixNumber.value == "one"){
        one3by2.style.display = "block";
    }else{
        one3by2.style.display = "none";
    }
    
    //for two twobythree
    if(matrixNumber.value == "two"){
        two3by2.style.display = "flex";
    }else{
        two3by2.style.display = "none";
    }
    
    //for three twobythree
    if(matrixNumber.value == "three"){
        three3by2.style.display = "flex";
    }else{
        three3by2.style.display = "none";
    }
}else{
        three3by2.style.display = "none";
        two3by2.style.display = "none";
        one3by2.style.display = "none";
}

    
    
    

//for three by three matrices
if(matrixOrder.value == "three-by-three"){
    
    //for one two by three
    if(matrixNumber.value == "one"){
        one3by3.style.display = "block";
    }else{
        one3by3.style.display = "none";
    }
    
    //for two twobythree
    if(matrixNumber.value == "two"){
        two3by3.style.display = "flex";
    }else{
        two3by3.style.display = "none";
    }
    
    //for three twobythree
    if(matrixNumber.value == "three"){
        three3by3.style.display = "flex";
    }else{
        three3by3.style.display = "none";
    }
}else{
        three3by3.style.display = "none";
        two3by3.style.display = "none";
        one3by3.style.display = "none";
}    
    



//when the answer button is clicked
answerBtn.onclick = function() {
modal.style.display = "block";



// if matix operation is two by two starts here...
if(matrixOrder.value == "two-by-two"){

//for two by two transpose
if(matrixOperation.value == "transpose"){
ans11.innerHTML = fa11.innerHTML;
ans12.innerHTML = fa21.innerHTML;
ans21.innerHTML = fa12.innerHTML;
ans22.innerHTML = fa22.innerHTML;
comment.innerHTML = "Transpose:"

answerBox22.style.display = "block";
}
    
answerBox22.getElementsByTagName('table')[0].style.display = "block";

//for two by two inverse
if(matrixOperation.value == "inverse"){
linv2 = document.getElementById('linv2');
    linv2.style.display = "block";
det = (Number(fa11.innerHTML) * Number(fa22.innerHTML)) - (Number(fa12.innerHTML) * Number(fa21.innerHTML));
    linv2.innerHTML = "<b>1" + "/" + det + "<b><span style='margin-left:10px;font-size:24px;'>×</span>";
ans11.innerHTML = fa22.innerHTML;
ans12.innerHTML = "-" + fa12.innerHTML;
ans21.innerHTML = "-" + fa21.innerHTML;
ans22.innerHTML = fa11.innerHTML;
    comment.style.display = "block";
if(isNaN(det)){
linv2.style.display = "none";
answerBox22.style.display = "block";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
    comment.style.color = "#ff0000";
comment.innerHTML = "Invalid input(s)";
}else{
comment.innerHTML = "Inverse of 2 × 2:";
    comment.style.color = "#0000ff";
answerBox22.style.display = "block";
}
    
}else{
    linv2.style.display = "none";
}

//for two by two determinant
if(matrixOperation.value == "determinant"){
    determAns = (Number(fa11.innerHTML) * Number(fa22.innerHTML)) - (Number(fa12.innerHTML) * Number(fa21.innerHTML));
    if (isNaN(Number(determAns))) {
        determinantAns.style.color = "#ff0000";
        determinantAns.style.display = "block";
        determinantAns.innerHTML = "Invalid input(s)";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
        answerBox22.style.display = "block";
    }else{
        determinantAns.style.color = "#0000ff";
        determinantAns.innerHTML = "Determinant = <b>" + determAns + "</b>";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
        determinantAns.style.display = "block";
        answerBox22.style.display = "block";
    }

}

    
//for two 2by2 addition
    if(matrixOperation.value == "sum" && matrixNumber.value == "two"){
        
ans11.innerHTML = Number(fdata11.innerHTML) + Number(sdata11.innerHTML);
ans12.innerHTML = Number(fdata12.innerHTML) + Number(sdata12.innerHTML);
ans21.innerHTML = Number(fdata21.innerHTML) + Number(sdata21.innerHTML);
ans22.innerHTML = Number(fdata22.innerHTML) + Number(sdata22.innerHTML);

        if(isNaN(Number(ans11.innerHTML)) || isNaN(Number(ans12.innerHTML)) || isNaN(Number(ans21.innerHTML)) || isNaN(Number(ans22.innerHTML))){
        determinantAns.style.display = "block";
        determinantAns.style.color = "#ff0000";
answerBox22.style.display = "block";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
        determinantAns.innerHTML = "Invalid input(s)";
        }
        else{
comment.innerHTML = "Sum of two '2 × 2':";
        comment.style.color = "#0000ff";
answerBox22.style.display = "block";
        }
    }

    
//for two 2by2 substraction...
    if(matrixOperation.value == "difference" && matrixNumber.value == "two"){
        
ans11.innerHTML = Number(fdata11.innerHTML) - Number(sdata11.innerHTML);
ans12.innerHTML = Number(fdata12.innerHTML) - Number(sdata12.innerHTML);
ans21.innerHTML = Number(fdata21.innerHTML) - Number(sdata21.innerHTML);
ans22.innerHTML = Number(fdata22.innerHTML) - Number(sdata22.innerHTML);
        
        if(isNaN(Number(ans11.innerHTML)) || isNaN(Number(ans12.innerHTML)) || isNaN(Number(ans21.innerHTML)) || isNaN(Number(ans22.innerHTML))){
        determinantAns.style.display = "block";
        determinantAns.style.color = "#ff0000";
answerBox22.style.display = "block";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
        determinantAns.innerHTML = "Invalid input(s)";
        }
        else{
comment.innerHTML = "Difference of two '2 × 2':";
        comment.style.color = "#0000ff";
answerBox22.style.display = "block";
        }
}

//for two 2by2 product calculation..
    if(matrixOperation.value == "product" && matrixNumber.value == "two"){
        
ans11.innerHTML = (Number(fdata11.innerHTML) * Number(sdata11.innerHTML)) + (Number(fdata12.innerHTML) * Number(sdata21.innerHTML));

ans12.innerHTML = (Number(fdata11.innerHTML) * Number(sdata12.innerHTML)) + (Number(fdata12.innerHTML) * Number(sdata22.innerHTML));
        
ans21.innerHTML = (Number(fdata21.innerHTML) * Number(sdata11.innerHTML)) + (Number(fdata22.innerHTML) * Number(sdata21.innerHTML));
        
ans22.innerHTML = (Number(fdata21.innerHTML) * Number(sdata12.innerHTML)) + (Number(fdata22.innerHTML) * Number(sdata22.innerHTML));
        
        if(isNaN(Number(ans11.innerHTML)) || isNaN(Number(ans12.innerHTML)) || isNaN(Number(ans21.innerHTML)) || isNaN(Number(ans22.innerHTML))){
            determinantAns.style.display = "block";
            determinantAns.style.color = "#ff0000";
            answerBox22.style.display = "block";
            answerBox22.getElementsByTagName('table')[0].style.display = "none";
            determinantAns.innerHTML = "Invalid input(s)";
        }
        else{
            comment.innerHTML = "Product of two '2 × 2':";
            comment.style.color = "#0000ff";
            answerBox22.style.display = "block";
        }
}
    

//for three 2by2 addition
    if(matrixNumber.value == "three" && matrixOperation.value == "sum"){
ans11.innerHTML = Number(ftdata11.innerHTML) + Number(stdata11.innerHTML) + Number(ttdata11.innerHTML);
ans12.innerHTML = Number(ftdata12.innerHTML) + Number(stdata12.innerHTML) + Number(ttdata12.innerHTML);
ans21.innerHTML = Number(ftdata21.innerHTML) + Number(stdata21.innerHTML) + Number(ttdata21.innerHTML);
ans22.innerHTML = Number(ftdata22.innerHTML) + Number(stdata22.innerHTML) + Number(ttdata22.innerHTML);

    if(isNaN(Number(ans11.innerHTML)) || isNaN(Number(ans12.innerHTML)) || isNaN(Number(ans21.innerHTML)) || isNaN(Number(ans22.innerHTML))){
        determinantAns.style.display = "block";
        determinantAns.style.color = "#ff0000";
answerBox22.style.display = "block";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
        determinantAns.innerHTML = "Invalid input(s)";
    }
    else{
    comment.innerHTML = "Sum of three '2 × 2':";
        comment.style.color = "#0000ff";
    answerBox22.style.display = "block";
    }
        
    }

//for three 2by2 subtraction
    if(matrixNumber.value == "three" && matrixOperation.value == "difference"){
ans11.innerHTML = Number(ftdata11.innerHTML) - Number(stdata11.innerHTML) - Number(ttdata11.innerHTML);
ans12.innerHTML = Number(ftdata12.innerHTML) - Number(stdata12.innerHTML) - Number(ttdata12.innerHTML);
ans21.innerHTML = Number(ftdata21.innerHTML) - Number(stdata21.innerHTML) - Number(ttdata21.innerHTML);
ans22.innerHTML = Number(ftdata22.innerHTML) - Number(stdata22.innerHTML) - Number(ttdata22.innerHTML);

    if(isNaN(Number(ans11.innerHTML)) || isNaN(Number(ans12.innerHTML)) || isNaN(Number(ans21.innerHTML)) || isNaN(Number(ans22.innerHTML))){
        determinantAns.style.display = "block";
        determinantAns.style.color = "#ff0000";
answerBox22.style.display = "block";
answerBox22.getElementsByTagName('table')[0].style.display = "none";
        determinantAns.innerHTML = "Invalid input(s)";
    }
    else{
    comment.innerHTML = "Difference of three consecutive '2 × 2':";
        comment.style.color = "#0000ff";
    answerBox22.style.display = "block";
    }
        
    }
    
    
//for three 2by2 prodct
    if(matrixNumber.value == "three" && matrixOperation.value == "product"){
sans11 = (Number(ftdata11.innerHTML) * Number(stdata11.innerHTML)) + (Number(ftdata12.innerHTML) * Number(stdata21.innerHTML));
sans12 = (Number(ftdata11.innerHTML) * Number(stdata12.innerHTML)) + (Number(ftdata12.innerHTML) * Number(stdata22.innerHTML));
sans21 = (Number(ftdata21.innerHTML) * Number(stdata11.innerHTML)) + (Number(ftdata22.innerHTML) * Number(stdata21.innerHTML));
sans22 = (Number(ftdata21.innerHTML) * Number(stdata12.innerHTML)) + (Number(ftdata22.innerHTML) * Number(stdata22.innerHTML));
        

ans11.innerHTML = (sans11 * Number(ttdata11.innerHTML)) + (sans12 * Number(ttdata21.innerHTML));
        
ans12.innerHTML = (sans11 * Number(ttdata12.innerHTML)) + (sans12 * Number(ttdata22.innerHTML));

ans21.innerHTML = (sans21 * Number(ttdata11.innerHTML)) + (sans22 * Number(ttdata21.innerHTML));
        
ans22.innerHTML = (sans21 * Number(ttdata12.innerHTML)) + (sans22 * Number(ttdata22.innerHTML));

    if(isNaN(Number(ans11.innerHTML)) || isNaN(Number(ans12.innerHTML)) || isNaN(Number(ans21.innerHTML)) || isNaN(Number(ans22.innerHTML))){
        determinantAns.style.display = "block";
        determinantAns.style.color = "#ff0000";
        answerBox22.style.display = "block";
        answerBox22.getElementsByTagName('table')[0].style.display = "none";
        determinantAns.innerHTML = "Invalid input(s)";
    }
    else{
    comment.innerHTML = "Product of three '2 × 2':";
    comment.style.color = "#000";
    answerBox22.style.display = "block";
    }
        
    }

}else{
    answerBox22.style.display = "none";
}
//matrix order two by two ends here...

    
    

//for operation of two by three matrices
    if(matrixOrder.value == "two-by-three"){
        
        if(matrixOperation.value == "product"){
    comment2.innerHTML = "Product of two '2 × 3' is not possible";
    comment2.style.color = "#ff0000";
    twoby3Ans.style.display = "block";
        twoby3Ans.getElementsByTagName('table')[0].style.visibility = "hidden";
            
        }
        
        if(matrixOperation.value == "Inverse"){
    comment2.innerHTML = "Inverse of '2 × 3' is not possible";
    comment2.style.color = "#ff0000";
    twoby3Ans.style.display = "block";
        twoby3Ans.getElementsByTagName('table')[0].style.visibility = "hidden";
            
        }

        twoby3Ans.getElementsByTagName('table')[0].style.display = "block";
        
        if(matrixOperation.value == "sum"){
    
            
        //sum of two two-by-three
        if(matrixNumber.value == "two"){
            twoby3ans11.innerHTML = Number(two2by3vala11.innerHTML) + Number(two2by3valb11.innerHTML);
            twoby3ans12.innerHTML = Number(two2by3vala12.innerHTML) + Number(two2by3valb12.innerHTML);
            twoby3ans13.innerHTML = Number(two2by3vala13.innerHTML) + Number(two2by3valb13.innerHTML);
            twoby3ans21.innerHTML = Number(two2by3vala21.innerHTML) + Number(two2by3valb21.innerHTML);
            twoby3ans22.innerHTML = Number(two2by3vala22.innerHTML) + Number(two2by3valb22.innerHTML);
            twoby3ans23.innerHTML = Number(two2by3vala23.innerHTML) + Number(two2by3valb23.innerHTML);

            
            
            
    if(isNaN(Number(twoby3ans11.innerHTML)) || isNaN(Number(twoby3ans12.innerHTML)) || isNaN(Number(twoby3ans13.innerHTML)) || isNaN(Number(twoby3ans21.innerHTML)) || isNaN(Number(twoby3ans22.innerHTML)) || isNaN(Number(twoby3ans23.innerHTML))  ){
        comment2.style.color = "#ff0000";
        twoby3Ans.style.display = "block";
        twoby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment2.innerHTML = "Invalid input(s)";
    }
    else{
    comment2.innerHTML = "Sum of two '2 × 3':";
    comment2.style.color = "#0000ff";
    twoby3Ans.style.display = "block";
    }
            
            
            
        }
                        
            
        //sum of three two-by-three
        if(matrixNumber.value == "three"){
            twoby3ans11.innerHTML = Number(three2by3vala11.innerHTML) + Number(three2by3valb11.innerHTML) + Number(three2by3valc11.innerHTML);
            twoby3ans12.innerHTML = Number(three2by3vala12.innerHTML) + Number(three2by3valb12.innerHTML) + Number(three2by3valc12.innerHTML);
            twoby3ans13.innerHTML = Number(three2by3vala13.innerHTML) + Number(three2by3valb13.innerHTML) + Number(three2by3valc13.innerHTML);
            twoby3ans21.innerHTML = Number(three2by3vala21.innerHTML) + Number(three2by3valb21.innerHTML) + Number(three2by3valc21.innerHTML);
            twoby3ans22.innerHTML = Number(three2by3vala22.innerHTML) + Number(three2by3valb22.innerHTML) + Number(three2by3valc22.innerHTML);
            twoby3ans23.innerHTML = Number(three2by3vala23.innerHTML) + Number(three2by3valb23.innerHTML) + Number(three2by3valc23.innerHTML);

            
                        
    if(isNaN(Number(twoby3ans11.innerHTML)) || isNaN(Number(twoby3ans12.innerHTML)) || isNaN(Number(twoby3ans13.innerHTML)) || isNaN(Number(twoby3ans21.innerHTML)) || isNaN(Number(twoby3ans22.innerHTML)) || isNaN(Number(twoby3ans23.innerHTML))  ){
        comment2.style.color = "#ff0000";
        twoby3Ans.style.display = "block";
        twoby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment2.innerHTML = "Invalid input(s)";
    }
    else{
            comment2.innerHTML = "Sum of three '2 × 3':";
        comment2.style.color = "#0000ff";
        twoby3Ans.style.display = "block";
    }
        }
            
        }
        
        
        //difference of two two-by-three
        if(matrixOperation.value == "difference" && matrixNumber.value == "two"){
            twoby3ans11.innerHTML = Number(two2by3vala11.innerHTML) - Number(two2by3valb11.innerHTML);
            twoby3ans12.innerHTML = Number(two2by3vala12.innerHTML) - Number(two2by3valb12.innerHTML);
            twoby3ans13.innerHTML = Number(two2by3vala13.innerHTML) - Number(two2by3valb13.innerHTML);
            twoby3ans21.innerHTML = Number(two2by3vala21.innerHTML) - Number(two2by3valb21.innerHTML);
            twoby3ans22.innerHTML = Number(two2by3vala22.innerHTML) - Number(two2by3valb22.innerHTML);
            twoby3ans23.innerHTML = Number(two2by3vala23.innerHTML) - Number(two2by3valb23.innerHTML);
                   
                                    
    if(isNaN(Number(twoby3ans11.innerHTML)) || isNaN(Number(twoby3ans12.innerHTML)) || isNaN(Number(twoby3ans13.innerHTML)) || isNaN(Number(twoby3ans21.innerHTML)) || isNaN(Number(twoby3ans22.innerHTML)) || isNaN(Number(twoby3ans23.innerHTML))  ){
        comment2.style.color = "#ff0000";
        twoby3Ans.style.display = "block";
        twoby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment2.innerHTML = "Invalid input(s)";
    }
    else{
            comment2.innerHTML = "Difference of two '2 × 3':";
            comment2.style.color = "#0000ff";
            twoby3Ans.style.display = "block";
    } 

        }
        
      
    }else{
            twoby3Ans.style.display = "none";
    }
    
    
    //for operations on three by two matrices
    if(matrixOrder.value == "three-by-two"){

                
        if(matrixOperation.value == "product"){
    comment1.innerHTML = "Product of two '3 × 2' is not possible";
    comment1.style.color = "#ff0000";
    threeby2Ans.style.display = "block";
        twoby3Ans.getElementsByTagName('table')[0].style.visibility = "hidden";
            
        }
        
        if(matrixOperation.value == "Inverse"){
    comment1.innerHTML = "Inverse of '3 × 2' is not possible";
    comment1.style.color = "#ff0000";
    threeby2Ans.style.display = "block";
        threeby2Ans.getElementsByTagName('table')[0].style.visibility = "hidden";
            
        }
        
        
        threeby2Ans.getElementsByTagName('table')[0].style.display = "block";
        
        // for sum
        if(matrixOperation.value == "sum"){
          
            //for two matrices
            if(matrixNumber.value == "two"){
        threeby2ans11.innerHTML = Number(two3by2vala11.innerHTML) + Number(two3by2valb11.innerHTML);
        threeby2ans12.innerHTML = Number(two3by2vala12.innerHTML) + Number(two3by2valb12.innerHTML);
        threeby2ans21.innerHTML = Number(two3by2vala21.innerHTML) + Number(two3by2valb21.innerHTML);
        threeby2ans22.innerHTML = Number(two3by2vala22.innerHTML) + Number(two3by2valb22.innerHTML);
        threeby2ans31.innerHTML = Number(two3by2vala31.innerHTML) + Number(two3by2valb31.innerHTML);
        threeby2ans32.innerHTML = Number(two3by2vala32.innerHTML) + Number(two3by2valb32.innerHTML);
                                   
                                    
    if(isNaN(Number(threeby2ans11.innerHTML)) || isNaN(Number(threeby2ans12.innerHTML)) || isNaN(Number(threeby2ans21.innerHTML)) || isNaN(Number(threeby2ans22.innerHTML)) || isNaN(Number(threeby2ans31.innerHTML)) || isNaN(Number(threeby2ans32.innerHTML))  ){
        comment1.style.color = "#ff0000";
        threeby2Ans.style.display = "block"; 
        threeby2Ans.getElementsByTagName('table')[0].style.display = "none";
        comment1.innerHTML = "Invalid input(s)";
    }
    else{
            comment1.innerHTML = "Sum of two '3 × 2':";
            comment1.style.color = "#0000ff";
            threeby2Ans.style.display = "block"; 
    } 
                
                 

        }
                      
            //for three matrices
            if(matrixNumber.value == "three"){
        threeby2ans11.innerHTML = Number(three3by2vala11.innerHTML) + Number(three3by2valb11.innerHTML) + Number(three3by2valc11.innerHTML);
        threeby2ans12.innerHTML = Number(three3by2vala12.innerHTML) + Number(three3by2valb12.innerHTML) + Number(three3by2valc12.innerHTML);
        threeby2ans21.innerHTML = Number(three3by2vala21.innerHTML) + Number(three3by2valb21.innerHTML) + Number(three3by2valc21.innerHTML);
        threeby2ans22.innerHTML = Number(three3by2vala22.innerHTML) + Number(three3by2valb22.innerHTML) + Number(three3by2valc22.innerHTML);
        threeby2ans31.innerHTML = Number(three3by2vala31.innerHTML) + Number(three3by2valb31.innerHTML) + Number(three3by2valc31.innerHTML);
        threeby2ans32.innerHTML = Number(three3by2vala32.innerHTML) + Number(three3by2valb32.innerHTML) + Number(three3by2valc32.innerHTML);

                                                    
    if(isNaN(Number(threeby2ans11.innerHTML)) || isNaN(Number(threeby2ans12.innerHTML)) || isNaN(Number(threeby2ans21.innerHTML)) || isNaN(Number(threeby2ans22.innerHTML)) || isNaN(Number(threeby2ans31.innerHTML)) || isNaN(Number(threeby2ans32.innerHTML))  ){
        comment1.style.color = "#ff0000";
        threeby2Ans.style.display = "block"; 
        threeby2Ans.getElementsByTagName('table')[0].style.display = "none";
        comment1.innerHTML = "Invalid input(s)";
    }
    else{
            comment1.innerHTML = "Sum of three '3 × 2':";
            comment1.style.color = "#0000ff";
            threeby2Ans.style.display = "block"; 
    }
                
        }
            
        }
        
        
                //for difference
        if(matrixOperation.value == "difference"){
            
//for two matrices
        if(matrixNumber.value == "two"){
        threeby2ans11.innerHTML = Number(two3by2vala11.innerHTML) - Number(two3by2valb11.innerHTML);
        threeby2ans12.innerHTML = Number(two3by2vala12.innerHTML) - Number(two3by2valb12.innerHTML);
        threeby2ans21.innerHTML = Number(two3by2vala21.innerHTML) - Number(two3by2valb21.innerHTML);
        threeby2ans22.innerHTML = Number(two3by2vala22.innerHTML) - Number(two3by2valb22.innerHTML);
        threeby2ans31.innerHTML = Number(two3by2vala31.innerHTML) - Number(two3by2valb31.innerHTML);
        threeby2ans32.innerHTML = Number(two3by2vala32.innerHTML) - Number(two3by2valb32.innerHTML);
                
                                                    
    if(isNaN(Number(threeby2ans11.innerHTML)) || isNaN(Number(threeby2ans12.innerHTML)) || isNaN(Number(threeby2ans21.innerHTML)) || isNaN(Number(threeby2ans22.innerHTML)) || isNaN(Number(threeby2ans31.innerHTML)) || isNaN(Number(threeby2ans32.innerHTML))  ){
        comment1.style.color = "#ff0000";
        threeby2Ans.style.display = "block"; 
        threeby2Ans.getElementsByTagName('table')[0].style.display = "none";
        comment1.innerHTML = "Invalid input(s)";
    }
    else{
            comment1.innerHTML = "Difference of two 3 × 2:";
            comment1.style.color = "#0000ff";
            threeby2Ans.style.display = "block"; 
    }

        }
                     
//for three matrices
        if(matrixNumber.value == "three"){
        threeby2ans11.innerHTML = Number(three3by2vala11.innerHTML) - Number(three3by2valb11.innerHTML) - Number(three3by2valc11.innerHTML);
        threeby2ans12.innerHTML = Number(three3by2vala12.innerHTML) - Number(three3by2valb12.innerHTML) - Number(three3by2valc12.innerHTML);
        threeby2ans21.innerHTML = Number(three3by2vala21.innerHTML) - Number(three3by2valb21.innerHTML) - Number(three3by2valc21.innerHTML);
        threeby2ans22.innerHTML = Number(three3by2vala22.innerHTML) - Number(three3by2valb22.innerHTML) - Number(three3by2valc22.innerHTML);
        threeby2ans31.innerHTML = Number(three3by2vala31.innerHTML) - Number(three3by2valb31.innerHTML) - Number(three3by2valc31.innerHTML);
        threeby2ans32.innerHTML = Number(three3by2vala32.innerHTML) - Number(three3by2valb32.innerHTML) - Number(three3by2valc32.innerHTML);
                
                                                                
    if(isNaN(Number(threeby2ans11.innerHTML)) || isNaN(Number(threeby2ans12.innerHTML)) || isNaN(Number(threeby2ans21.innerHTML)) || isNaN(Number(threeby2ans22.innerHTML)) || isNaN(Number(threeby2ans31.innerHTML)) || isNaN(Number(threeby2ans32.innerHTML))  ){
        comment1.style.color = "#ff0000";
        threeby2Ans.style.display = "block"; 
        threeby2Ans.getElementsByTagName('table')[0].style.display = "none";
        comment1.innerHTML = "Invalid input(s)";
    }
    else{
            comment1.innerHTML = "Difference of three consecutive 3 × 2:";
            comment1.style.color = "#0000ff";
            threeby2Ans.style.display = "block"; 
    }

        }
            
        }
        
        
    }else{
        threeby2Ans.style.display = "none";
    }
    //three by two matrices operation ends here...
            
    
    
// two-by-three and three-by-tw0 transpose matrics goes here

    if(matrixOperation.value == "transpose"){
            
        
    //for three by two only transpose
    if(matrixOperation.value == "transpose" && matrixOrder.value == "three-by-two"){
        twoby3ans11.innerHTML = one3by2val11.innerHTML;
        twoby3ans12.innerHTML = one3by2val21.innerHTML;
        twoby3ans13.innerHTML = one3by2val31.innerHTML;
        twoby3ans21.innerHTML = one3by2val12.innerHTML;
        twoby3ans22.innerHTML = one3by2val22.innerHTML;
        twoby3ans23.innerHTML = one3by2val32.innerHTML;
        comment2.style.display = "block";
        twoby3Ans.style.display = "block";
        comment2.innerHTML = "Transpose of '3 × 2':";
    }else{
        twoby3Ans.style.display = "none";
    }
        
            
    //for two by three only transpose
    if(matrixOperation.value == "transpose" && matrixOrder.value == "two-by-three"){
        
        threeby2ans11.innerHTML = one2by3val11.innerHTML;
        threeby2ans12.innerHTML = one2by3val21.innerHTML;
        threeby2ans21.innerHTML = one2by3val12.innerHTML;
        threeby2ans22.innerHTML = one2by3val22.innerHTML;
        threeby2ans31.innerHTML = one2by3val13.innerHTML;
        threeby2ans32.innerHTML = one2by3val23.innerHTML;
        comment1.style.display = "block";
        threeby2Ans.style.display = "block";
        comment1.innerHTML = "Transpose  of '2 × 3':";
    }else{
        threeby2Ans.style.display = "none";
    }
    }
 
    
    
    
    //three by three operations go here....
    if(matrixOrder.value == "three-by-three"){
        
        
        threeby3Ans.getElementsByTagName('table')[0].style.display = "block";
        
        //sum operations
        if(matrixOperation.value == "sum"){
            
        if(matrixNumber.value == "two"){
            
            threeby3ans11.innerHTML = Number(two3by3vala11.innerHTML) + Number(two3by3valb11.innerHTML);
            threeby3ans12.innerHTML = Number(two3by3vala12.innerHTML) + Number(two3by3valb12.innerHTML);
            threeby3ans13.innerHTML = Number(two3by3vala13.innerHTML) + Number(two3by3valb13.innerHTML);
            
            threeby3ans21.innerHTML = Number(two3by3vala21.innerHTML) + Number(two3by3valb21.innerHTML);
            threeby3ans22.innerHTML = Number(two3by3vala22.innerHTML) + Number(two3by3valb22.innerHTML);
            threeby3ans23.innerHTML = Number(two3by3vala23.innerHTML) + Number(two3by3valb23.innerHTML);

            threeby3ans31.innerHTML = Number(two3by3vala31.innerHTML) + Number(two3by3valb31.innerHTML);
            threeby3ans32.innerHTML = Number(two3by3vala32.innerHTML) + Number(two3by3valb32.innerHTML);
            threeby3ans33.innerHTML = Number(two3by3vala33.innerHTML) + Number(two3by3valb33.innerHTML);
            
                                                                            
    if(isNaN(Number(threeby3ans11.innerHTML)) || isNaN(Number(threeby3ans12.innerHTML)) || isNaN(Number(threeby3ans13.innerHTML)) || isNaN(Number(threeby3ans21.innerHTML)) || isNaN(Number(threeby3ans22.innerHTML)) || isNaN(Number(threeby3ans23.innerHTML)) || isNaN(Number(threeby3ans31.innerHTML)) || isNaN(Number(threeby3ans32.innerHTML)) || isNaN(Number(threeby3ans33.innerHTML))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment3.innerHTML = "Invalid input(s)";
    }
    else{
            comment3.innerHTML = "Sum of two '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }
        
        }
        
                
        //sum of three threebythree
        if(matrixNumber.value == "three"){
              
            threeby3ans11.innerHTML = Number(three3by3vala11.innerHTML) + Number(three3by3valb11.innerHTML) + Number(three3by3valc11.innerHTML);
            threeby3ans12.innerHTML = Number(three3by3vala12.innerHTML) + Number(three3by3valb12.innerHTML) + Number(three3by3valc12.innerHTML);
            threeby3ans13.innerHTML = Number(three3by3vala13.innerHTML) + Number(three3by3valb13.innerHTML) + Number(three3by3valc13.innerHTML);
            
            threeby3ans21.innerHTML = Number(three3by3vala21.innerHTML) + Number(three3by3valb21.innerHTML) + Number(three3by3valc21.innerHTML);
            threeby3ans22.innerHTML = Number(three3by3vala22.innerHTML) + Number(three3by3valb22.innerHTML) + Number(three3by3valc22.innerHTML);
            threeby3ans23.innerHTML = Number(three3by3vala23.innerHTML) + Number(three3by3valb23.innerHTML) + Number(three3by3valc23.innerHTML);

            threeby3ans31.innerHTML = Number(three3by3vala31.innerHTML) + Number(three3by3valb31.innerHTML) + Number(three3by3valc31.innerHTML);
            threeby3ans32.innerHTML = Number(three3by3vala32.innerHTML) + Number(three3by3valb32.innerHTML) + Number(three3by3valc32.innerHTML);
            threeby3ans33.innerHTML = Number(three3by3vala33.innerHTML) + Number(three3by3valb33.innerHTML) + Number(three3by3valc33.innerHTML);
            
                                                                                        
    if(isNaN(Number(threeby3ans11.innerHTML)) || isNaN(Number(threeby3ans12.innerHTML)) || isNaN(Number(threeby3ans13.innerHTML)) || isNaN(Number(threeby3ans21.innerHTML)) || isNaN(Number(threeby3ans22.innerHTML)) || isNaN(Number(threeby3ans23.innerHTML)) || isNaN(Number(threeby3ans31.innerHTML)) || isNaN(Number(threeby3ans32.innerHTML)) || isNaN(Number(threeby3ans33.innerHTML))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment3.innerHTML = "Invalid input(s)";
    }
    else{
            comment3.innerHTML = "Sum  of three '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }
        
        }
            
            
        }
        
        
        if(matrixOperation.value == "difference"){
            
                
        //difference of two threebythree
        if(matrixNumber.value == "two"){
              
            threeby3ans11.innerHTML = Number(two3by3vala11.innerHTML) - Number(two3by3valb11.innerHTML);
            threeby3ans12.innerHTML = Number(two3by3vala12.innerHTML) - Number(two3by3valb12.innerHTML);
            threeby3ans13.innerHTML = Number(two3by3vala13.innerHTML) - Number(two3by3valb13.innerHTML);
            
            threeby3ans21.innerHTML = Number(two3by3vala21.innerHTML) - Number(two3by3valb21.innerHTML);
            threeby3ans22.innerHTML = Number(two3by3vala22.innerHTML) - Number(two3by3valb22.innerHTML);
            threeby3ans23.innerHTML = Number(two3by3vala23.innerHTML) - Number(two3by3valb23.innerHTML);

            threeby3ans31.innerHTML = Number(two3by3vala31.innerHTML) - Number(two3by3valb31.innerHTML);
            threeby3ans32.innerHTML = Number(two3by3vala32.innerHTML) - Number(two3by3valb32.innerHTML);
            threeby3ans33.innerHTML = Number(two3by3vala33.innerHTML) - Number(two3by3valb33.innerHTML);
            
                                                                                                    
    if(isNaN(Number(threeby3ans11.innerHTML)) || isNaN(Number(threeby3ans12.innerHTML)) || isNaN(Number(threeby3ans13.innerHTML)) || isNaN(Number(threeby3ans21.innerHTML)) || isNaN(Number(threeby3ans22.innerHTML)) || isNaN(Number(threeby3ans23.innerHTML)) || isNaN(Number(threeby3ans31.innerHTML)) || isNaN(Number(threeby3ans32.innerHTML)) || isNaN(Number(threeby3ans33.innerHTML))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment3.innerHTML = "Invalid input(s)";
    }
    else{
            comment3.innerHTML = "Difference  of two '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }
            
        }
                    
                
        //difference of three threebythree
        if(matrixNumber.value == "three"){
              
            threeby3ans11.innerHTML = Number(three3by3vala11.innerHTML) - Number(three3by3valb11.innerHTML) - Number(three3by3valc11.innerHTML);
            threeby3ans12.innerHTML = Number(three3by3vala12.innerHTML) - Number(three3by3valb12.innerHTML) - Number(three3by3valc12.innerHTML);
            threeby3ans13.innerHTML = Number(three3by3vala13.innerHTML) - Number(three3by3valb13.innerHTML) - Number(three3by3valc13.innerHTML);
            
            threeby3ans21.innerHTML = Number(three3by3vala21.innerHTML) - Number(three3by3valb21.innerHTML) - Number(three3by3valc21.innerHTML);
            threeby3ans22.innerHTML = Number(three3by3vala22.innerHTML) - Number(three3by3valb22.innerHTML) - Number(three3by3valc22.innerHTML);
            threeby3ans23.innerHTML = Number(three3by3vala23.innerHTML) - Number(three3by3valb23.innerHTML) - Number(three3by3valc23.innerHTML);

            threeby3ans31.innerHTML = Number(three3by3vala31.innerHTML) - Number(three3by3valb31.innerHTML) - Number(three3by3valc31.innerHTML);
            threeby3ans32.innerHTML = Number(three3by3vala32.innerHTML) - Number(three3by3valb32.innerHTML) - Number(three3by3valc32.innerHTML);
            threeby3ans33.innerHTML = Number(three3by3vala33.innerHTML) - Number(three3by3valb33.innerHTML) - Number(three3by3valc33.innerHTML);
            
                                                                                                                
    if(isNaN(Number(threeby3ans11.innerHTML)) || isNaN(Number(threeby3ans12.innerHTML)) || isNaN(Number(threeby3ans13.innerHTML)) || isNaN(Number(threeby3ans21.innerHTML)) || isNaN(Number(threeby3ans22.innerHTML)) || isNaN(Number(threeby3ans23.innerHTML)) || isNaN(Number(threeby3ans31.innerHTML)) || isNaN(Number(threeby3ans32.innerHTML)) || isNaN(Number(threeby3ans33.innerHTML))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment3.innerHTML = "Invalid input(s)";
    }
    else{
            comment3.innerHTML = "Difference of three '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }
            
        }
            
        }
        
        
        //three by three transpose
        
        if(matrixOperation.value == "transpose" && matrixNumber.value == "one"){
            
            threeby3ans11.innerHTML = one3by3val11.innerHTML;
            threeby3ans12.innerHTML = one3by3val21.innerHTML;
            threeby3ans13.innerHTML = one3by3val31.innerHTML;
            
            threeby3ans21.innerHTML = one3by3val12.innerHTML;
            threeby3ans22.innerHTML = one3by3val22.innerHTML;
            threeby3ans23.innerHTML = one3by3val32.innerHTML;

            threeby3ans31.innerHTML = one3by3val13.innerHTML;
            threeby3ans32.innerHTML = one3by3val23.innerHTML;
            threeby3ans33.innerHTML = one3by3val33.innerHTML;
            
            comment3.innerHTML = "Transpose of '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
        }
        
        
        
        //three by three determinant
        if(matrixOperation.value == "determinant" && matrixNumber.value == "one"){
            tha11 = one3by3val11.innerHTML;
            tha12 = one3by3val12.innerHTML;
            tha13 = one3by3val13.innerHTML;
            tha21 = one3by3val21.innerHTML;
            tha22 = one3by3val22.innerHTML;
            tha23 = one3by3val23.innerHTML;
            tha31 = one3by3val31.innerHTML;
            tha32 = one3by3val32.innerHTML;
            tha33 = one3by3val33.innerHTML;
            
            
            threeby3det = ( tha11 * ( (tha22 * tha33) - (tha23 * tha32) ) )  +  ( ( (-1) * (tha12)) * ( (tha21 * tha33) - (tha23 * tha31) ) )  +  ( tha13 * ( (tha21 * tha32) - (tha22 * tha31) ) );
            
            
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
                        
                                                                                                                
    if(isNaN(Number(tha11)) || isNaN(Number(tha12)) || isNaN(Number(tha13)) || isNaN(Number(tha21)) || isNaN(Number(tha22)) || isNaN(Number(tha23)) || isNaN(Number(tha31)) || isNaN(Number(tha32)) || isNaN(Number(tha33))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        comment3.innerHTML = "Invalid input(s)";
    }else{
            comment3.innerHTML = "Determinant = " + threeby3det;
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }
            
        }//determinant of three-by-three ends here
        
        
        
        // three-by-three product
        if(matrixOperation.value == "product"){
            
        threeby3Ans.getElementsByTagName('table')[0].style.display = "block";
            
            //for two three-by-three product
            if(matrixNumber.value == "two"){
                fatha11 = two3by3vala11.innerHTML;
                fatha12 = two3by3vala12.innerHTML;
                fatha13 = two3by3vala13.innerHTML;
                fatha21 = two3by3vala21.innerHTML;
                fatha22 = two3by3vala22.innerHTML;
                fatha23 = two3by3vala23.innerHTML;
                fatha31 = two3by3vala31.innerHTML;
                fatha32 = two3by3vala32.innerHTML;
                fatha33 = two3by3vala33.innerHTML;
                
                
                satha11 = two3by3valb11.innerHTML;
                satha12 = two3by3valb12.innerHTML;
                satha13 = two3by3valb13.innerHTML;
                satha21 = two3by3valb21.innerHTML;
                satha22 = two3by3valb22.innerHTML;
                satha23 = two3by3valb23.innerHTML;
                satha31 = two3by3valb31.innerHTML;
                satha32 = two3by3valb32.innerHTML;
                satha33 = two3by3valb33.innerHTML;
                
                
            threeby3ans11.innerHTML = Number(fatha11 * satha11) + Number(fatha12 * satha21) + Number(fatha13 * satha31);
            threeby3ans12.innerHTML = Number(fatha11 * satha12) + Number(fatha12 * satha22) + Number(fatha13 * satha32);
            threeby3ans13.innerHTML = Number(fatha11 * satha13) + Number(fatha12 * satha23) + Number(fatha13 * satha33);
            
            threeby3ans21.innerHTML = Number(fatha21 * satha11) + Number(fatha22 * satha21) + Number(fatha23 * satha31);
            threeby3ans22.innerHTML = Number(fatha21 * satha12) + Number(fatha22 * satha22) + Number(fatha23 * satha32);
            threeby3ans23.innerHTML = Number(fatha21 * satha13) + Number(fatha22 * satha23) + Number(fatha23 * satha33);

            threeby3ans31.innerHTML = Number(fatha31 * satha11) + Number(fatha32 * satha21) + Number(fatha33 * satha31);
            threeby3ans32.innerHTML = Number(fatha31 * satha12) + Number(fatha32 * satha22) + Number(fatha33 * satha32);
            threeby3ans33.innerHTML = Number(fatha31 * satha13) + Number(fatha32 * satha23) + Number(fatha33 * satha33);
                
                                                                                                        
    if(isNaN(Number(threeby3ans11.innerHTML)) || isNaN(Number(threeby3ans12.innerHTML)) || isNaN(Number(threeby3ans13.innerHTML)) || isNaN(Number(threeby3ans21.innerHTML)) || isNaN(Number(threeby3ans22.innerHTML)) || isNaN(Number(threeby3ans23.innerHTML)) || isNaN(Number(threeby3ans31.innerHTML)) || isNaN(Number(threeby3ans32.innerHTML)) || isNaN(Number(threeby3ans33.innerHTML))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment3.innerHTML = "Invalid input(s)";
    }
    else{
            comment3.innerHTML = "Product  of two '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }
                
            }//product of two three-by-three ends here.
            
            
            //for three three-by-three product
            if(matrixNumber.value == "three"){
                
                fatha11 = three3by3vala11.innerHTML;
                fatha12 = three3by3vala12.innerHTML;
                fatha13 = three3by3vala13.innerHTML;
                fatha21 = three3by3vala21.innerHTML;
                fatha22 = three3by3vala22.innerHTML;
                fatha23 = three3by3vala23.innerHTML;
                fatha31 = three3by3vala31.innerHTML;
                fatha32 = three3by3vala32.innerHTML;
                fatha33 = three3by3vala33.innerHTML;
                
                
                satha11 = three3by3valb11.innerHTML;
                satha12 = three3by3valb12.innerHTML;
                satha13 = three3by3valb13.innerHTML;
                satha21 = three3by3valb21.innerHTML;
                satha22 = three3by3valb22.innerHTML;
                satha23 = three3by3valb23.innerHTML;
                satha31 = three3by3valb31.innerHTML;
                satha32 = three3by3valb32.innerHTML;
                satha33 = three3by3valb33.innerHTML;
                
                
                tatha11 = three3by3valc11.innerHTML;
                tatha12 = three3by3valc12.innerHTML;
                tatha13 = three3by3valc13.innerHTML;
                tatha21 = three3by3valc21.innerHTML;
                tatha22 = three3by3valc22.innerHTML;
                tatha23 = three3by3valc23.innerHTML;
                tatha31 = three3by3valc31.innerHTML;
                tatha32 = three3by3valc32.innerHTML;
                tatha33 = three3by3valc33.innerHTML;
                
                sub11 = Number(fatha11 * satha11) + Number(fatha12 * satha21) + Number(fatha13 * satha31);
                sub12 = Number(fatha11 * satha12) + Number(fatha12 * satha22) + Number(fatha13 * satha32);
                sub13 = Number(fatha11 * satha13) + Number(fatha12 * satha23) + Number(fatha13 * satha33);
            
                sub21 = Number(fatha21 * satha11) + Number(fatha22 * satha21) + Number(fatha23 * satha31);
                sub22 = Number(fatha21 * satha12) + Number(fatha22 * satha22) + Number(fatha23 * satha32);
                sub23 = Number(fatha21 * satha13) + Number(fatha22 * satha23) + Number(fatha23 * satha33);

                sub31 = Number(fatha31 * satha11) + Number(fatha32 * satha21) + Number(fatha33 * satha31);
                sub32 = Number(fatha31 * satha12) + Number(fatha32 * satha22) + Number(fatha33 * satha32);
                sub33 = Number(fatha31 * satha13) + Number(fatha32 * satha23) + Number(fatha33 * satha33);
                
                
                         
            threeby3ans11.innerHTML = Number(sub11 * tatha11) + Number(sub12 * tatha21) + Number(sub13 * tatha31);
            threeby3ans12.innerHTML = Number(sub11 * tatha12) + Number(sub12 * tatha22) + Number(sub13 * tatha32);
            threeby3ans13.innerHTML = Number(sub11 * tatha13) + Number(sub12 * tatha23) + Number(sub13 * tatha33);
            
            threeby3ans21.innerHTML = Number(sub21 * tatha11) + Number(sub22 * tatha21) + Number(sub23 * tatha31);
            threeby3ans22.innerHTML = Number(sub21 * tatha12) + Number(sub22 * tatha22) + Number(sub23 * tatha32);
            threeby3ans23.innerHTML = Number(sub21 * tatha13) + Number(sub22 * tatha23) + Number(sub23 * tatha33);

            threeby3ans31.innerHTML = Number(sub31 * tatha11) + Number(sub32 * tatha21) + Number(sub33 * tatha31);
            threeby3ans32.innerHTML = Number(sub31 * tatha12) + Number(sub32 * tatha22) + Number(sub33 * tatha32);
            threeby3ans33.innerHTML = Number(sub31 * tatha13) + Number(sub32 * tatha23) + Number(sub33 * tatha33);
                
                                                                                                                       
    if(isNaN(Number(threeby3ans11.innerHTML)) || isNaN(Number(threeby3ans12.innerHTML)) || isNaN(Number(threeby3ans13.innerHTML)) || isNaN(Number(threeby3ans21.innerHTML)) || isNaN(Number(threeby3ans22.innerHTML)) || isNaN(Number(threeby3ans23.innerHTML)) || isNaN(Number(threeby3ans31.innerHTML)) || isNaN(Number(threeby3ans32.innerHTML)) || isNaN(Number(threeby3ans33.innerHTML))  ){
        comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block"; 
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
        comment3.innerHTML = "Invalid input(s)";
        
    }
    else{
            comment3.innerHTML = "Product  of three '3 × 3':";
            comment3.style.color = "#0000ff";
            threeby3Ans.style.display = "block"; 
    }     
                
            }
            //product of three three-by-three ends here
            
        }
        
        //for three-by-three inverse
        if(matrixOperation.value == "inverse" && matrixNumber.value == "one"){
            
            tha11 = one3by3val11.innerHTML;
            tha12 = one3by3val12.innerHTML;
            tha13 = one3by3val13.innerHTML;
            tha21 = one3by3val21.innerHTML;
            tha22 = one3by3val22.innerHTML;
            tha23 = one3by3val23.innerHTML;
            tha31 = one3by3val31.innerHTML;
            tha32 = one3by3val32.innerHTML;
            tha33 = one3by3val33.innerHTML;
            
            
            threeby3det = ( tha11 * ( (tha22 * tha33) - (tha23 * tha32) ) )  +  ( ( (-1) * (tha12)) * ( (tha21 * tha33) - (tha23 * tha31) ) )  +  ( tha13 * ( (tha21 * tha32) - (tha22 * tha31) ) );
            
            c11 =  (tha22 * tha33) - (tha23 * tha32) ;
            c12 =  (-1) * ( (tha21 * tha33) - (tha23 * tha31) ) ;
            c13 =  (tha21 * tha32) - (tha22 * tha31) ;
            c21 =  (-1) * ( (tha33 * tha12) - (tha32 * tha13) ) ;
            c22 =  (tha33 * tha11) - (tha31 * tha13) ;
            c23 =  (-1) * ( (tha32 * tha11) - (tha31 * tha12) ) ;
            c31 =  (tha23 * tha12) - (tha22 * tha13) ;
            c32 =  (-1) * ( (tha23 * tha11) - (tha21 * tha13) ) ;
            c33 =  (tha22 * tha11) - (tha21 * tha12) ;
            
            
            
            linv3 = document.getElementById('linv3');
            linv3.innerHTML = 1 + "/" + threeby3det + "<b><span style='padding:5px;font-size:24px;'>×</span>";
            
            threeby3ans11.innerHTML = c11;
            threeby3ans12.innerHTML = c21;
            threeby3ans13.innerHTML = c31;
            
            threeby3ans21.innerHTML = c12;
            threeby3ans22.innerHTML = c22;
            threeby3ans23.innerHTML = c32;

            threeby3ans31.innerHTML = c13;
            threeby3ans32.innerHTML = c23;
            threeby3ans33.innerHTML = c33;
            
            if(isNaN(threeby3det)){
                comment3.innerHTML = "Invalid input(s)";
                comment3.style.color = "#ff0000";
        threeby3Ans.style.display = "block";
        threeby3Ans.getElementsByTagName('table')[0].style.display = "none";
            }else{
                linv3.style.display = "block";
        threeby3Ans.style.display = "block";
                comment3.style.color = "#0000ff";
                comment3.innerHTML = "Inverse of 3 × 3";
            }
            
        }else{
            linv3.style.display = "none";
        }
    
        
        
    }else{
        threeby3Ans.style.display = "none";
    }
    //three by three operations end here...

    
}
//when the answer button is clicked function ends here.


}
//when the go button is clicked function ends here



