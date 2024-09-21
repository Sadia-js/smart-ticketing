// hide the home page and show pharibahan-area

function hitting(){
    // hidePageByElementId('home-page');
    // showPageByElementId('pharibahan-area');
    // ticketSelecting();
}

// when you click on ticket number, will display the selected button green
// step-1: select random seat number

const buttons = document.querySelectorAll('.selected');
const assign = true; //selected
    buttons.forEach(button => {
     button.addEventListener('click', function(event){
     const targetText = event.target;
     targetText.style.backgroundColor = '#1DD100';   
    //  the tickets you have selected
     const selectedTicket = setCountingByElementId('counting');
     const restSeats = setCountingByElementId('rest-seat');
     const totalTicket = selectedTicket + 1;
     const leftSeats = restSeats - 1;

     setTextValueById('counting', totalTicket);
     setTextValueById('rest-seat', leftSeats);
     console.log(totalTicket);
    })
});


