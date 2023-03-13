let car1 = {
  carname: "sonata",
  carPh: 130,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let car2 = {
  carname: "bmw",
  carPh: 200,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let car3 = {
  carname: "fiat",
  carPh: 90,
  start: function () {
    console.log("engine start");
  },
  stop: () => {
    console.log("engine stop");
  },
};

let cars = [car1, car2, car3];

//Work2: 배열을 순회(돌면서) 하면서 searchValue 에 입력된 값이 나오면 해당 자동차에 상세정보와 start 메서드를 실행시켜 주세요
//array.map 을 활용해주세요
//if({condition}){수행 기능}
// if(name === ""){
// }

let searchValue = "bmw";

//여기서부터 작성 바랍니다.
