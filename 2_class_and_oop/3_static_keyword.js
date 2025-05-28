/**
 * Static Keyword : 우리가 정의했던 모든 프로퍼티들은 인스턴스(객체)에 직접적으로 귀속되었지만, static 키워드를 사용하면 클래스에 귀속되게 할 수 있다.
 */

// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     //함수로 선언 가능
//     static returnGroupName() {
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);
// console.log('-------------------');

//1. groupname을 지정 후 출력했지만, 인스턴스에 존재하지 않는다. (객체에 귀속 되지 않는다.)

//static은 언제쓰냐?
//1. IdolModel 크래스에 공통된 그룹 이름을 지정하고 싶을 때.

// console.log(IdolModel.groupName); //undefined 이지만, 2. 기본값을 '아이브' 라고 설정한다면?
//아이브 -> groupName이 정상적으로 출력되었다.
//static 키워드는 = 클래스 자체에 귀속, 인스턴스 귀속X

// console.log(IdolModel.returnGroupName()); //솔직히 별로 유용해 보이지 않음 -> static 키워드 어디서? 어떻게? 쓸건데

/**
 * factory constructor
 */

class IdolModel {
  name;
  year;

  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  //object로부터 IdolModel 클래스의 인스턴스를 만들겠다.
  static fromObject(object) {
    //object에 name/year의 키가 존재한다면
    return new IdolModel(object.name, object.year);
    //name / year의 값을 object에서 받아 IdolModel에다가 넣는다.
  }

  //list로부터 아이돌 모델을 만들 수 있는 방법을 또 만들고 싶은 경우
  static fromList(list) {
    return new IdolModel(list[0], list[1]);
  }
}

const yuJin2 = new IdolModel("안유진", 2003); //이전에는 이렇게 정의를 해왔다.

//하지만 static으로 바꾼다면 아이돌모델에 직접 실행
const yuJin3 = IdolModel.fromObject({
  name: "안유진",
  year: 2003,
});
console.log(yuJin3); //아이돌모델이 생성 되었다. new를 사용하지 않았는데 어쨰서 객체가 생성되었는가?
//fromObject라는 함수에서 새로 아이돌 모델을 만들어서 반환하기 때문이다.
//static 키워드를 사용해서 클래스에서 직접 factory constructor 형태의 스태틱 함수를 만드는 경우가 종종 있다.

//list로 받아오기
const wonYoung = IdolModel.fromList(
  //list로 받아야하니, 리스트 형식으로 작성
  ["장원영", 2003]
);

console.log(wonYoung);    //IdolModel { name: '장원영', year: 2003 } -> 정상 출력

//static 함수를 사용해, factory constructor 형태를 구현하게 되면 단순히 하나의 생성자 형태로만 인스턴스를 반환받지 않고,
//미리 어떤 데이터를 입력받아서, 인스턴스를 만들지 정의를 해놓을 수가 있는 장점이 있다.
//위의 패타턴을 기역후 OOP에서 유용하게 사용하자!