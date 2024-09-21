const selectedSeat = document.querySelector('#selected-seat');
const seatCollected = document.getElementById('seat-collected');
const leftSeats = document.getElementById('rest-seat');
const totalCalculation = document.getElementById('total-calculation');
const totalAmount = document.getElementById('total-amount').innerText;
const couponInput = document.getElementById('coupon-input');
const couponBtn = document.getElementById('coupon-btn');
let grandTotal = document.getElementById('grand-total');
const nextBtn = document.getElementById('next-btn');
const passengerName = document.getElementById('passenger-name');
const phoneNumber = document.getElementById('phone-number');
const emailId = document.getElementById('email-id');


let reservedSeat = [];
let sum = 0;
function eventHandler(event){
    const eventValue = event.innerText;
    if(reservedSeat.includes(eventValue)){
        document.getElementById('booked-seat').innerText = 
        `
        ${eventValue} Seat is already booked
        `
        return;
    }
    else if(reservedSeat.length < 4){
        event.style.cssText = "background-color: #1DD100; color: white";
    seatCollected.className = 'hidden';
    reservedSeat.push(event.innerText);
    selectedSeat.innerText = reservedSeat.length;
    const availableSeats = leftSeats.innerText;
    const availableSeatsValue = Number(availableSeats);
    leftSeats.innerText = availableSeatsValue - 1;

    const ul = document.createElement('ul');
    ul.innerHTML = 
    `
          <li>${event.innerText}</li>
          <li>Economy</li>
          <li>550.00</li>
    `
    ul.style.cssText = "display: flex; justify-content: space-between; font-weight: 600";
    totalCalculation.appendChild(ul);
    sum = sum + 550

    document.getElementById('total-amount').innerText = sum.toFixed(2);
    if(reservedSeat.length > 3){
        document.getElementById('coupon-input').removeAttribute('disabled');
        document.getElementById('coupon-btn').removeAttribute('disabled');
    }
    }
    else{
        document.getElementById('max-seats').classList.remove('hidden');
        return;
    }
    
}

let couponSave = 0;

document.getElementById('coupon-btn').addEventListener('click', function(){
    const inputValue = couponInput.value;
    const wrongCoupon = document.getElementById('wrong-coupon');
    wrongCoupon.innerHTML = '';
    if(inputValue !== 'NEW50' && inputValue !== 'Couple 20'){
        wrongCoupon.innerHTML = 
        `
        <p class="text-lg text-red-500 font-semibold">Wrong Coupon</p>
        `
        return;
    }
    if(inputValue === 'NEW50'){
        couponSave = sum * .15;
        
    }
    else if(inputValue === 'Couple 20'){
        couponSave = sum * .20;   
    }
    const offerPart = document.getElementById('offer-part');
    offerPart.innerHTML =

    `
       <li>Discount :</li>
       <li></li>
       <li>- BDT : <span id="discount-money">${couponSave.toFixed(2)}</span></li>
    `

    const grandValue = sum - couponSave;
    grandTotal.innerHTML = 
    `
      <li>Grand Total</li>
      <li></li>
      <li>BDT : <span>${grandValue.toFixed(2)}</span></li>
    `
    passengerName.removeAttribute('disabled');
    phoneNumber.removeAttribute('disabled');
    emailId.removeAttribute('disabled');
    
})

document.getElementById('phone-number').addEventListener('input', function(event){
    event.preventDefault();
    const inputValue = phoneNumber.value;
    console.log(inputValue)
    if(inputValue.length >= 11){
        nextBtn.removeAttribute('disabled');
    }
})

document.getElementById('continue-btn').addEventListener('click',function(){
    window.location.reload();
})