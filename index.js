function priceCalc(age){
  
  var ticketPrice = 50;
  
  if(age >= 20 && age <= 40 ){
    return ticketPrice;
  }
  else if(age > 40 && age < 65){
    ticketPrice = ticketPrice - (ticketPrice / 4);
    return ticketPrice;
  }
  else{
    ticketPrice = ticketPrice / 2;
    return ticketPrice;
  }
  
}
document.write(priceCalc(70));