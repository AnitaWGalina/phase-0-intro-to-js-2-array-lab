// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat() {
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat() {
  cats.shift();
  return cats;
}

function appendCat(name) {
  let newCats = cats.slice();
  newCats.push(name);
  return newCats;
}

function prependCat(name) {
  let newCats = cats.slice();
  newCats.unshift(name);
  return newCats;
}

function removeLastCat() {
  let newCats = cats.slice();
  newCats.pop();
  return newCats;
}

function removeFirstCat() {
  let newCats = cats.slice();
  newCats.shift();
  return newCats;
}