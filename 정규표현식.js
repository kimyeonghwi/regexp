
const str = `
010-1234-5678
pwrkim12@naver.com
https://fastcampus.co.kr/courses/203720/clips/
The asdbv sdkliw lsdifu3l kl the djskfj slioow
abbcccdddd
`


// i 대소문자 구분 하지 안겠다 
// g 전부 검색하겠다 

//생성자 방식 
const regexp = new RegExp('the','gi' )
console.log(str.match(regexp))

const regexp = /the/gi
console.log(str.match(regexp))


//메소드 실습 내용 
const regexp = /fox/gi

console.log(regexp.test(str))
console.log(str)

str = str.replace(regexp, '강아지')
console.log(str)