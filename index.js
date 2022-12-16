// 실습) 구구단을 출력하는 함수에서 변수 num이 2와 9사이의 수일 경우 구구단을 출력하고, 그렇지 않은 경우 2와 9사이의 숫자를 입력해 달라는 메시지를 콘솔에 출력하도록 코드를 완성하세요.
// hint: if ~ else문을 사용하세요.

let num = 9;
if (num >= 2 && num <= 9) {
  console.log(num * 1);
  console.log(num * 2);
  console.log(num * 3);
  console.log(num * 4);
  console.log(num * 5);
  console.log(num * 6);
  console.log(num * 7);
  console.log(num * 8);
  console.log(num * 9);
} else {
  console.log('2와 9사이의 수를 입력하세요.');
}
