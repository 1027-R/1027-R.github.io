
// 반복문에서의 while문과 for문

// function fun_while(int_num){
//     let i = 0;
//     while(i < int_num){
//         console.log("나는 지금 그만 공부하고싶어");
//         i++;
//     }
// }

// function fun_for(int_num){
//     // for([초기화할 변수],[반복문을 수행할 조건],[반복문을 수행한 후 수행할 조건])
//     for(i = 0; i < int_num; i++){
//         console.log("나는 지금 그만 공부하고싶어!!!");
//     }
// }


// //fun_while(3);
// fun_for(5);


// function fun_date(para_date) {
//     if(para_date == 29) {
//         console.log("오늘 날짜는 "+ 29 + "일 입니다");
//         return para_date;
//     }
//     else{
//         console.log("오늘 날짜가 아닙니다");
//         return para_date;
//     }
// }

// let date = fun_date(30);
// console.log(date);

// 함수를 활용한 조건문


// 함수를 활용한 반복문



// function fun_add(a,b){
//     let result = a + b;
//     return result;
// }

// const sudong = 4 + 6;
// console.log(sudong);

// const auto = fun_add(4,6);
// console.log(auto);



//함수를 실행시키는 명령어
// 함수명();

//함수를 실행시키고 return값을 저장하기 위해서는 아래 구문
// 변수명 = 실행시킬함수(파라미터;


// 전역 영역 : 프로그램에서의 상단 영역
// 지역 영역 : 프로그램에서의 함수 안에있는 영역 
// 전역 변수 : 프로그램에서의 상단 영역에있는 변수로써 어느 공간에서든 사용가능한 변수
// 지역 변수 : 프로그램에서의 함수 안에있는 변수로써 그 함수내에서만 사용이 가능한 변수이다

// const str_name = "조계진";

// function fun_a() {
//     console.log(str_name);
//     const str_name2 = "김예린";
//     return str_name2;
// }

// const str_name2 = fun_a();

// console.log(str_name2);


function fun_while(int_num) {
    let i = 0;
    let add = 0;
    while(i < int_num) {
        add = add + int_num;
        i++;
    }
    return add;
}

function fun_for(int_num){
    let add = 0;
    for(i = 0; i < int_num; i++){
        add = add + int_num;
    }
    return add;
}
console.log(fun_for(50));
//console.log(fun_while(50));