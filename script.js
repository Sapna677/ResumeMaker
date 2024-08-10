function addNewWEField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter your Work Experience");
    newNode.setAttribute("rows", "4");
    let weAddButton = document.getElementById("weAddButton");
    let weFieldContainer = document.getElementById("weFieldContainer");
    weAddButton.before(newNode);
    weFieldContainer.insertBefore(newNode, weAddButton);

}
function addNewEQField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter your Education");
    newNode.setAttribute("rows", "4");
    let eqAddButton = document.getElementById("eqAddButton");
    let eqFieldContainer = document.getElementById("eqFieldContainer");
    eqAddButton.before(newNode);
    eqFieldContainer.insertBefore(newNode, eqAddButton);
}

function addNewHOField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hoField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter your Hobbies");
    newNode.setAttribute("rows", "2");
    let hoAddButton = document.getElementById("hoAddButton");
    let hoFieldContainer = document.getElementById("hoFieldContainer");
    hoAddButton.before(newNode);
    hoFieldContainer.insertBefore(newNode, hoAddButton);
}   

function addNewPRField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("prField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter your Projects");
    newNode.setAttribute("rows", "2");
    let prAddButton = document.getElementById("prAddButton");
    let prFieldContainer = document.getElementById("prFieldContainer");
    prAddButton.before(newNode);
    prFieldContainer.insertBefore(newNode, prAddButton);
}   


function addNewSKField() {
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter your Skills");
    newNode.setAttribute("rows", "2");  
    let skAddButton = document.getElementById("skAddButton");
    let skFieldContainer = document.getElementById("skFieldContainer");
    skAddButton.before(newNode);
    skFieldContainer.insertBefore(newNode, skAddButton);
}   

//Generate Resume
function generateResume() {
    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField; 

//Direct

let nameT2=document.getElementById("nameT2").innerHTML=nameField;
let contactT=document.getElementById("contactT").innerHTML=document.getElementById("contactField").value;
let emailT=document.getElementById("emailT").innerHTML=document.getElementById("emailField").value;

let addressT=document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

let igT=document.getElementById("igT").innerHTML=document.getElementById("igField").value;
let gitT=document.getElementById("gitT").innerHTML=document.getElementById("gitField").value;
let llT=document.getElementById("liT").innerHTML=document.getElementById("llField").value;

document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

//WE
let wes=document.getElementsByClassName("weField");
let st='';
for(let e of wes)
{
    st=st+`<li>${e.value}</li>`;
}
document.getElementById("weT").innerHTML=st;

//EQ
let eqs=document.getElementsByClassName("eqField");
let st1='';
for(let e of eqs)
{
    st1=st1+`<li>${e.value}</li>`;
}
document.getElementById("eqT").innerHTML=st1;

//HO
let hos=document.getElementsByClassName("hoField");
let st2='';
for(let e of hos)
{
    st2=st2+`<li>${e.value}</li>`;
}
document.getElementById("hoT").innerHTML=st2;

//PR
let prs=document.getElementsByClassName("prField");
let st3='';
for(let e of prs)
{
    st3=st3+`<li>${e.value}</li>`;
}
document.getElementById("prT").innerHTML=st3;

//SK        
let sks=document.getElementsByClassName("skField");
let st4='';
for(let e of sks)
{
    st4=st4+`<li>${e.value}</li>`;
}
document.getElementById("skT").innerHTML=st4;

//Set The Image
let file=document.getElementById("imgField").files[0];
let reader=new FileReader();
reader.readAsDataURL(file);
reader.onloadend=function() 
{
    document.getElementById("imgTemplate").src=reader.result;
};




    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}

function printResume() {
    window.print();
}   
