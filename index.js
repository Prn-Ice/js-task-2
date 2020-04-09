// Create an object with keys: principal and time
function createObject(principal, time) {
  return {
    principal: principal,
    time: time,
  };
}

// Create an object with keys: principal, rate, time and interest
function createInterestData(principal, rate, time, interest) {
  return {
    principal: principal,
    rate: rate,
    time: time,
    interest: interest,
  };
}

// Calculate principal using a list of [createObject]
function principalCalculator(array) {
  let rate = 1;
  let interestsData = [];

  array.forEach((element) => {
    if (element.principal >= 2500) {
      if (element.time > 1 && element.time < 3) {
        rate = 3;
      } else if (element.time >= 3) {
        rate = 4;
      }
    }
    if (element.principal < 2500 || element.time <= 1) {
      rate = 2;
    }

    let interest = (element.principal * rate * element.time) / 100;
    interestsData.push(
      createInterestData(element.principal, rate, element.time, interest)
    );
  });

  console.log(interestsData);
  return interestsData;
}

let data = [
  createObject(2500, 1.8),
  createObject(1000, 5),
  createObject(3000, 1),
  createObject(2000, 3),
];

principalCalculator(data);
