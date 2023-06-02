const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 5, 2]
const shippingCost = 50

let totalCart = 0;

for (let i = 0; i < prices.length; i++) {
  totalCart = totalCart + prices[i]
}

let utenteCheEffettuaLAcquisto = amy

if (utenteCheEffettuaLAcquisto.isAmbassador) {
  totalCart *= 0.7;
}

if (totalCart < 100) {
  totalCart += shippingCost;
}

console.log(totalCart);

let users = [];

users.push(marco, paul, amy);

let ambassadors = [];

for(let i = 0; i < users.length; i++) {
  const user = users[i];

  if(user.isAmbassador) {
  console.log(`${user.name} ${user.lastName} è un ambassador`);
  ambassadors.push(user);
} else {
  console.log(`${user.name} ${user.lastName} non è un ambassador`);
}
}