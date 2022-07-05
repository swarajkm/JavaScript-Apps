let countScooter = 0;
let countCar = 0;
let countTruck = 0;
let countTotal = 0;

let ScooterCount = document.getElementById("scooter-count");
let CarCount = document.getElementById("car-count");
let TruckCount = document.getElementById("truck-count");
let prevRecord = document.getElementById("last-entry");

function Scooter() {
  countScooter += 1;
  ScooterCount.textContent = countScooter;
}
function Car() {
  countCar += 1;
  CarCount.textContent = countCar;
}
function Truck() {
  countTruck += 1;
  TruckCount.textContent = countTruck;
}
function Total() {
  countTotal = countScooter + countCar + countTruck;
  let TotalCount = document.getElementById("total-count");
  TotalCount.textContent = countTotal;
  ScooterCount.textContent = 0;
  CarCount.textContent = 0;
  TruckCount.textContent = 0;
  countScooter = 0;
  countCar = 0;
  countTruck = 0;
  showPrevEntries();
}

function showPrevEntries() {
  let time = new Date().toDateString();
  prevRecord.textContent += time + "    " + count;
  countTotal = 0;
}
