/**
 * Class Keyword - 기본적으로 이해하고 있어야 하는 중요한 이론
 */

//class 키워드 이후 class명 작성 -> class는 무조건 대문자로 시작(권징)
class IdolModel {
    //name = '안유진';
    //year = '2003';
    //1. 그 이후 변수 이름을 작성
    //2. 임의로 값 작성(예시)

    //3. 기본 값으로 다시 작성
    name;
    year;
    //class에 입력되는 값들은 property(프로퍼티) 라고 한다. => 나중에 함수도 입력할텐데, 함수/변수 프로퍼티라고 얘기함.

    //name과 year를 따로 클래스 안에다가 정의를 하지 않아도 그대로 사용가능, 처음정의한 IdolModel의 name,year를 주석처리 한다면? = 그래도 출력이 정상적으로 된다.
    //그래도 어떤 프로퍼티가 존재하는지 정의를 해줘야하는게 서로 소통도 편하고 좋기때문에, 웬만하면 정의하자!! (미리 정의하는 습관을 길러놓자)

    //생성자 : 파라미터를 받는 것 처럼 동일하게 순서대로 작성
    constructor(name, year) {
        //name, year 라는 값을 받겠다. 라고 정의 그렇다면 이것을 어떻게 저장을 하냐? -> this 키워드 사용(this? : 현재 인스턴스)
        this.name = name;
        this.year = year;
        //외부에서 입력을 받으면 this.name에다가 외부입력 받는 네임을 저장
        //this.name = IdolModel의 name, = name 은 입력받는 name

    }
};

//인스턴스로 만드는 법
const yuJin = new IdolModel();
console.log(yuJin);
console.log('------------------------')
//IdolModel { name: '안유진', year: '2003' } - 클래스 타입 출력 후 객체가 나옴 -> 왜 객체로 나오는지는 다음섹션
//클래스로 인스턴스를 생성 -> 클래스에 해당되는 객체가 생성

//그러나, 진행하고 싶은 건 안유진과, 2003년도를 갖고 있는 인스턴스만 만드는게 아닌, 매번 바꿔서 생성하고 싶다. 위에 생성한것은, 함수를 정의하고 파라미터를 하나도 받지않는 것
//클래스에서 인스턴스화를 할 떄 파라미터를 받는것처럼, 무언가 추가를 해줄 수 있나? -> 가능하다! 그런 기능을 Constructor 혹은 생성자라고한다.
//다시 출력을 진행하면 -> IdolModel { name: undefined, year: undefined } -> undefined이유 : name,year를 입력받아 저장하기로 했지만 입력을 하지 않았기 떄문

const yuJin2 = new IdolModel('안유진2', 2003);
console.log(yuJin2);
//값을 입력받게 후 출력하면 -> IdolModel { name: '안유진2', year: 2003 }

//그렇다면 Constructor를 사용하는 엄청난 장점 -> 빵틀을 만들어 놓으면 무한정으로 생성가능
const gauel = new IdolModel('가을', 2002)
console.log(gauel);
const ray = new IdolModel('레이', 2004)
console.log(ray);
const wonYoung = new IdolModel('장원영', 2004)
console.log(wonYoung);
const liz = new IdolModel('리즈', 2004)
console.log(liz);
const eseo = new IdolModel('이서', 2007)
console.log(eseo);

/** 6개의 모든 인스턴스가 잘 정의되어 출력
    IdolModel { name: '안유진2', year: 2003 }
    IdolModel { name: '가을', year: 2002 }
    IdolModel { name: '레이', year: 2004 }
    IdolModel { name: '장원영', year: 2004 }
    IdolModel { name: '리즈', year: 2004 }
    IdolModel { name: '이서', year: 2007 }
 */

    //코드를 줄이고, 쉽게 인스턴스를 만들 수 있는 이유는, 클래스에 원하는 속성, 프로퍼티들을 정리해놨기 때문이다.


//js에서는 인스턴스와, 객체를 같이 부른다고 말했다.
//객체에서 값을 가져올 때 처럼, 인스턴스도 객체처럼 값을 가져올 수 있는지 확인해보자.
console.log(yuJin2.name, +yuJin2.year);
//1) yuin2 에서 .이후, name / year가 자동완성으로 나오며, property라고 적혀있다.
//2) 정상적으로 '안유진2 , 2003' name과 year가 출력된다. => 따라서, 실제로 객체처럼 사용 할 수 있다.

//여기서, 그럼 객체쓰지 왜 클래스 사용하나요? -> 객체를 사용하는 이유는 차차 반복적으로 이유를 학습 할 예정
//다른 언어에서는 프로퍼티를 직접 입력하는게 익숙할 것이다. 그러나 js 는 박살난(?) 언어이다. 예시를 보자


