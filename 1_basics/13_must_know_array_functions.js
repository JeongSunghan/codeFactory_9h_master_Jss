/**
 * Array Functions(Method)
 */

let iveMembers = ['안유진', '가을', '레이', '장원영', '리즈', '이서',]
console.log(iveMembers);
//기본적인 Array에서 간단하게 해본 내용, 그러나 여기에 여러가지 작업을 가능하게 할 수 있다.
console.log("---------------------------------"); 


// push() 함수
console.log(iveMembers.push('코드팩토리'));  //parameter안에 argument 작성
console.log(iveMembers);    //'iveMembers 배열에 코드팩토리가 추가됨
//원래 존재하던 iveMembers 배열을 직접적으로 변경했기에, iveMembers 배열이 변경된 것
//그렇다면 push의 리턴 값은 있나? -> 있다.
//log로 출력하면 7이 출력된다 -> iveMembers의 새로운 길이
//push :  Array에 새로운 값을 맨 끝에 추가, 반환 값은 추가한 다음의 길이를 알려준다
console.log("---------------------------------"); 

// pop() 함수
console.log(iveMembers.pop());  //pop은 파라미터를 넣을 필요가 없다 -> 코드팩토리 출력
console.log(iveMembers);    //코드팩토리가 배열에서 없어짐.
console.log("---------------------------------"); 
//pop -> 마지막 element를 삭제한다.

// shift() 함수
console.log(iveMembers.shift());    //안유진이 반환된다.
console.log(iveMembers);    //안유진이 배열에서 없어짐
console.log("---------------------------------"); 
//shift -> 첫번째 값을 반환 받고 삭제됨

// unshift() 함수    
console.log(iveMembers.unshift('안유진'));  //새로 변경된 배열의 길이를 반환
console.log(iveMembers);
console.log("---------------------------------"); 
//unshift -> shift의 반대

// splice() 함수
console.log(iveMembers.splice(0, 3));   //1번째에 넣는 값은 `몇번째 인덱스`인지, 2번째에 넣는 값은 `어디까지 지울것`인지?
console.log(iveMembers);
console.log("---------------------------------"); 
//안타깝게도, 지금까지 배운것은 웬만하면 사용하지 않는게 좋기는 하다 -> why? -> 기존 배열의 형태를 변경함.
//immutable programing -> 한번 선언한 변수는 변경하지 않는다.
//그러나 위의 개념을 알고가면서 새로운 다른 함수를 배워보자


















