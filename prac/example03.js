let car = {
  carname: "sonata",
  carPh: 130,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

console.log(car.carname);
console.log(car.carPh);
console.log(car.start);
car.start();
