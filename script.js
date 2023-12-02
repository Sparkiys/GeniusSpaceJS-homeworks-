// let name = "Ivan";
// let city = "Uman";
// city = name;
// console.log(city);

// let name = "Olga";
// console.log(`привіт ${1}`);
// console.log(`привіт ${"name"}`);
// console.log(`привіт ${name}`);

// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";

// console.log(typeof Number(a));
// console.log(typeof parseInt(b));
// console.log(typeof parseFloat(c));

// console.log((0.1 * 10 + 0.2 * 10) / 10);

// console.log(Math.max(20, 10, 50, 40));

// console.log(Math.random() * (4 - 2) + 2);

// const message = "Welcome to Bahamas!";
// console.log(message.length);

// console.log(message.toUpperCase());

let user = {};

user.name = "Yevhenii";
user.age = 25;
user.city = "Uman";
// console.log(user);
delete user.city;
user["like flowers"] = true;
// console.log(user);

for (key in user) {
  console.log(key);
  console.log(user[key]);
}
