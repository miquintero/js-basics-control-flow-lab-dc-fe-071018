function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return "This one is on me!";
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity(city) {
  let destination = city === "NYC" ? "Ok, sounds good." : "No, go."
  return destination;
}

function switchOnCharmFromTip(tip) {
  console.log("== switchOnCharmFromTip ==");
  let tip;
  switch (amount) {
    case "stingy":
      tip <= 2;
      break;
    case "reasonable":
      tip >= 7;
      break;
    case "generous":
      tip > 11;
      break;

  }


  }
}
