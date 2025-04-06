/**
 * if and switch
 */

let number = 5;     //짝수인지 홀수인지 알아보는 if문을 작성

//괄호안에 false나 true 값을 반환해주는 무언가를 넣는다 
if (number % 2 === 0) {
    console.log('number 변수는 짝수입니다.');    
    //그러나 아무것도 출력되지 않음 => 짝수가 아니기에(나머지가 0이 아니기에)    
}else {
    console.log('number 변수는 홀수입니다.');
    //else => if의 조건이 아닐경우, 만약 number 가 짝수였다면 if문의 log가 출력
}
console.log("-------------------------------------");


//  if & else문은 어떤 한 조건과 아닐 경우만 작성을 할 수 있는게 아니다.
//  아래와 같이 중간 로직을 추가가능
if (number % 2 === 0) {
    console.log('2의 배수입니다.');   
} else if(number % 3 === 0) {
    console.log('3의 배수입니다.');   
} else if(number % 4 === 0) {
    console.log('4의 배수입니다.');
    //... 무한정 추가 가능
} else if (number % 5 === 0) {
    console.log('5의 배수입니다.');
    
} else {    
    console.log('2, 3, 4,5  의 배수가 아닙니다' );
    //모든 else-if의 조건이 아닐 경우
}
console.log("-------------------------------------");

//switch 는 무엇인가?
const englishDay = monday;
let koreanDay;

//괄호안에 조건으로 사용할 값을 작성
switch(englishDay) {    //englishDay가 어떤값들이 될건지 작성        
    case 'monday' :     //englishDay가 Monday인 경우 의미
        koreanDay = '월요일';        
        break;  //switch 문을 빠져나온다. = 우리가 해당되는 값을 찾았으니, 더 이상 케이스문을 보지말고 나와라 

    case 'tuesday' :
        koreanDay = '화요일';
        break;

    case 'wednesday' :
        koreanDay = '수요일';
        break;

    case 'thursday' :
        koreanDay = '목요일';
        break;

    case 'friday' :
        koreanDay = '금요일';
        break;           
        //case는 원하다면 무한으로 추가 가능

    default :   //if문의 else 역할
        koreanDay = '주말';
        break
}

console.log(koreanDay);
