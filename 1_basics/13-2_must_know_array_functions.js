/**
 * Array Functions(Method) Part.2
 */

let iveMembers = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];

// concat()
console.log(iveMembers.concat("코드팩토리")); //언뜻 보면 push와 같아보인다.
console.log(iveMembers); //그러나 다시 출력시, 추가된 코드팩토리가 없어져있다.
//concat? -> 새로운 배열을 만들어서 반환해준다. why? -> 새로운 메모리 공간에 저장 후 값이 반환, ive 배열에는 영향이 없었다.
//중요한 점 : 기존의 배열을 변경하는지, 안하는지
console.log("---------------------------------");

// slice()
console.log(iveMembers.slice(0, 3)); //첫번째 어떤 인덱스부터, 두번째는 몇번 인덱스까지 삭제할지
//예를 들어서, ['안유진', '가을', '레이'] 까지만 출력하고 싶다. (0~2번까지) 0,1,2 -> 즉 3
console.log(iveMembers);
//concat과 마찬가지로 원래 배열에 영향이 없다. 위의 2개의 함수를 대표적으로 기존 배열을 변경하지 않고, 새로운 배열을 만들어내는 방법이다.\
console.log("---------------------------------");

// spread operator
let iveMembers2 = [
  ...iveMembers, // ...-> spread이다
];
console.log(iveMembers2); //그래서 이거 왜 쓰고, ...(spread)안넣으면 어떻게 되는데?
console.log("---------------------------------");

let iveMember3 = [iveMembers];
console.log(iveMember3);
// [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ] -> list안에 list가 들어간다. 왜? -> iveMember3에 iveMember 리스트를 넣으라고 지시했으니까
//따라서 0번 인덱스가 list가 된다 -> 그래서 ...(spread)를 넣게 되면서 리스트를 벗겨내고, 상위 리스트에다가 펼쳐서 값을 집어 넣는다.
console.log("---------------------------------");

let iveMember4 = iveMembers;
console.log(iveMember4);
console.log("---------------------------------");
//그럼 위의 방법은 왜 정상적으로 출력되는지? -> iveMember4에다가 iveMembers 를 저정하겠다고 했으니까 당연하다~
console.log(iveMember4 === iveMembers); //true

//console.log([...iveMembers] === iveMembers);
// false가 나온다. why? -> 스프레드를 이용해 배열을 펼치면, 완전히 새로운 array가 탄생 => 메모리 공간이 다르다 -> immutable 프로그래밍을 할 때 이 spread operator를 많이 사용함
console.log("---------------------------------");

/**
 * 유용하고 압도적으로 많이 사용하는 것들
 */

// join()
console.log(iveMembers.join()); //콤마 기준으로 스트링으로 반환된다. -> 안유진,가을,레이,장원영,리즈,이서
console.log(typeof iveMembers.join()); //string
//, 콤마기준으로 모든 값을 합친다.
console.log(iveMembers.join(`/`)); //argument 입력 가능 -> 뭘 입력해? : 나누는 기준이 되는 문자를 넣는다. -> 안유진/가을/레이/장원영/리즈/이서
console.log(iveMembers.join(`, `));
console.log("---------------------------------"); //따라서, join은 모든 값들을 string으로 엮을 때 굉장히 많이사용

// sort() -> 오름차순으로 정렬
iveMembers.sort(); //sort 같은 경우 반환값이 없다. -> 원래의 배열이 변경된다.
console.log(iveMembers); //[ '가을', '레이', '리즈', '안유진', '이서', '장원영' ] -> ㄱ~ㅈ까지 오름차순으로 정렬
console.log("---------------------------------");

// reverse() -> 정렬이 된 함수를 반환
console.log(iveMembers.reverse()); //[ '장원영', '이서', '안유진', '리즈', '레이', '가을' ] -> 거꾸로 정렬
console.log("---------------------------------");

let numbers = [1, 9, 7, 5, 3];
console.log(numbers);
console.log("---------------------------------");

// sort는 마음대로 지정, 함수를 작성
/**
 * a, b를 비교했을때
 *  1. a를 b보다 나중에 정렬하려면 (뒤에두려면) 0 보다 큰 숫자를 반환
 *  2. a를 b보다 먼저 정렬하려면 (앞에두려면) 0 보다 작은 숫자를 반환
 *  3. 원래 순서를 그대로 두려면 0을 반환
 */
numbers.sort((a, b) => {
  return a > b ? 1 : -1;
  //a가 b보다 크면 1을 반환, 작다면 -1을 반환해라
});
console.log(numbers); //1 3 5 7 9 오름차순으로 정렬
console.log("---------------------------------");

// 반대로 진행
numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers); //9 7 5 3 1 내림차순으로 정렬
console.log("---------------------------------");

// map() : 배열에 있는 모든 값을 순회하면서 그 각각의 값들을 변형하는 역할 => map은 반환값이 있다.
// map 함수는 원래의 배열을 변형하지 않는다.
console.log(iveMembers.map((x) => x)); //파라미터를 하나 받는 함수 입력가능하며, 값을 반환해줘야햔다. (변화없이 받는경우)
//0 ~ n번 인덱스까지 실행하면서, 순서대로 x값에 들어간다.
//그럴때, 함수가 반환해주는 값이 각각의 값들을 변경한 값이 된다.
console.log(iveMembers.map((x) => `아이브: ${x}`)); //[ '아이브: 장원영', '아이브: 이서', '아이브: 안유진', '아이브: 리즈', '아이브: 레이', '아이브: 가을' ]
console.log("---------------------------------");

//조건별로 원하는 값만 변경
console.log( iveMembers.map((x) => {
    if (x === "안유진") {
      return `아이브: ${x}`;
    } else {
      return x;
    }
  }));
console.log(iveMembers);  //기존 배열에 영향 없음 
console.log("---------------------------------");

// filter()
numbers = [1, 8, 7, 6, 3];
//true일 경우 반환값에 들어가고, false일 경우 반환값에 안들어간다
console.log(numbers.filter((x) => true));   //모든값이 들어간다.
console.log(numbers.filter((x) => false));  //어떠한 값도 들어가지 않는다.
console.log(numbers.filter((x) => x % 2 === 0));    //짝수 필터링 [8, 6] 만 들어왔다.
console.log("---------------------------------");

// find() -> filter와 비슷하지만, filter는 true에 해당하는 모든 값을 찾지만, find는 순서대로 보다가 해당되는 첫번째 값만 반환
console.log(numbers.find((x) => x % 2 === 0));  //첫번째로 해당된 값인 8이 반환되며, 배열도 아니다. 
console.log("---------------------------------");

// findIndex() -> find와 같지만 Index를 반환
console.log(numbers.findIndex((x) => x % 2 === 0)); //1번째 index 위치를 반환
console.log("---------------------------------");

// reduce(), 줄이다
console.log(numbers.reduce((p, n) => p + n, 5));
console.log("---------------------------------");   //25가 반환

/**
 * reduce(파라미터) 안에 argument를 2개 넣는다.
 *  - 2번째 argument 같은 경우, 시작하고 싶은 값 => 예시로 0부터 시작이라 가정
 *  - 1번째는 함수를 기입, 반환해줘야함, (p, n => prev, next 뜻)
 *  - number에서 1~3 까지 5개의 인덱스가 n(두번째 파라미터)에 하나씩 들어간ㄴㄴ다.
 *  - 함수가 실행(Loop)될 떄마다, 기존 Loop에 반환한 값이 p에 들어가고, 다음 값이 n으로 간다.
 *  - 맨처음 함수가 실행 할 때는, 배열을 처음 반복할때 반환값이 없으니, 2번째 파라미터의 넣은 0의 숫자가 p에 들어간다.
 *  - p + n을 했을 떄, number의 모든 값을 더 할 수 있다.
 *  추가정리는 이미지를 통해
 */