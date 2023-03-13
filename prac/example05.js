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

let { carname, carPh } = car;
console.log(carname, carPh);
