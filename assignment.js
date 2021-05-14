

// kilometer to meter


function kilometerToMeter(kilometer) {
    if (kilometer < 0 || typeof kilometer !== "number") {
      return "Please provide valid input";
    }
  
    return kilometer * 1000;
}
var meter = kilometerToMeter('hey');
console.log(meter);




// budgetCalculator (watch 50, phone 100, laptop 500)


function budgetCalculator(watch, phone, laptop) {
    if (
      watch < 0 || typeof watch !== "number" || phone < 0 || typeof phone !== "number" || laptop < 0 || typeof laptop !== "number"
    ) {
      return "Please provide valid input";
    }
  
    let prices = { watch: 50, phone: 100, laptop: 500,};
    let totalPrice = watch * prices.watch + phone * prices.phone + laptop * prices.laptop;
  
    return totalPrice;
  }

  var amount = budgetCalculator(3, 2, 4);
  console.log(amount);


  // hotelCost (1st 10 days= 100; next 10 days 80 tk; after 20 days 50)


  function hotelCost(duration){
    var cost = 0;

    if(duration <= 10){
      cost = duration * 100;
    }

    else if(duration <= 20){
      var firstDuration = 10 * 100;
      var remainingDays = duration - 10;
      var secondDuration = remainingDays * 80;
      cost = firstDuration + secondDuration;
    }
    
    else{
      var firstDuration = 10 * 100;
      var secondDuration = 10 * 80;
      var remainingDays = duration - 20;
      var thirdDuration = remainingDays * 50;
      cost = firstDuration + secondDuration + thirdDuration;
    }
    
    return cost;
  }

  var costAmount = hotelCost(32);
  console.log (costAmount);



// megaFriend



function megaFriend(friends) {
  if (typeof friends !== "object" || friends.length === 0) {
    return "Please enter a valid input";
  }

  let friend = friends[0];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > friend.length) {
      friend = friends[i];
    }
  }

  return friend;
}

var myFriends = ['jannat', 'joy', 'joya', 'choity', 'rafikul'];
var mega = megaFriend(myFriends);
console.log(mega);