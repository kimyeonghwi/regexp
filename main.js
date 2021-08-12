// github에 정리 되어있다. 

const str = `
010-1234-5678
pwrkim12@naver.com
https://www.omdbapi.com/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)