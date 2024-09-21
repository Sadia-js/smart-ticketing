// hide page using element id
function hidePageByElementId(elementId){
    //homepage hidden
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// show page using element id
function showPageByElementId(elementId){
    //showing pharibahan area using element id
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}
// setting count for seat
function setCountingByElementId(elementId){
     const element = document.getElementById(elementId);
     const elementText = element.innerText;
     const number = parseInt(elementText);
     return number;
}
// set value by id
function setTextValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}