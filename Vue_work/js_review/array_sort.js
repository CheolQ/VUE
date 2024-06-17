/* array_sort.js */

let fruit = ['banana', '오렌지', '망고','apple']
// fruit.sort((a,b)=> b.length - a.length );
fruit.sort((a,b)=> {
    if ( a > b ) return -1;
    else if ( a == b ) return 0;
    else return 1;
})
console.log(fruit);

// 객체배열 정렬
let arrEmp = [
    { empName : 'scott', dept: '개발', hireDate : '2019-11-01', score : 90 },
    { empName : 'hong', dept: '기획', hireDate : '2018-11-01', score : 95 },
    { empName : 'choi', dept: '총무', hireDate : '2017-11-01', score : 100 }
]

//이름(문자)
arrEmp.sort((a,b) => {
    if ( a.empName > b.empName ) return 1;
    else if ( a.empName == b.empName ) return 0;
    else return -1;
})
console.log('이름순: ',arrEmp);

// score(숫자) : 내림차순
arrEmp.sort((a,b)=> b.score - a.score )
console.log('성적순: ',arrEmp);

// 필터
let result = arrEmp.find( emp => emp.score >= 95 );
console.log('개발부서: ',result);

