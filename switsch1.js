
let hour = 10;

switch (true) {
    // if hour is between 6am and 12pm: display Good Morning Greeting
    case (hour >=10 && hour < 12):
      console.log("Good Morning");
      break;
  
    // if hour is between 12pm and 6pm: display Good Day Greeting
    case (hour >= 12 && hour < 18):
      console.log("Good Day");
      break;
  
    // Otherwise: Good Evening
    default:
      console.log("Good Evening");
      
  }