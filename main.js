const str = `
010-1234-568
theabc@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

// g의 역할
console.log(str.match(/the/)); // ["the", index: 14, 생략]
console.log(str.match(/the/g)); // ["the", "the"]

// i의 역할
console.log(str.match(/the/gi)); // ["the", "The", "the"]

// m의 역할, 여러 줄 일치(각 줄마다 끊어서 보기) + ^ab, ab$ 패턴 연습
console.log(str.match(/d$/g)); // null
console.log(str.match(/d$/gm)); // ["d"]
console.log(str.match(/^t/gi)); // null
console.log(str.match(/^t/gim)); // ["t", "T"]

// . 패턴 연습
console.log(str.match(/h..p/g)); // ["http"]

// a|b 패턴 연습
console.log(str.match(/fox|dog/g)); // ["fox", "dog"]

// ab? 패턴 연습
console.log(str.match(/https/g)); // ["https"]
console.log(str.match(/https?/g)); //["https", "http"]

// {} 패턴 연습
console.log(str.match(/d{2}/g)); // ["dd", "dd"]
console.log(str.match(/d{3}/g)); // ["ddd"]

// [abc] 패턴 연습
console.log(str.match(/[fox]/g)); // ["o", "o", "o", "f", 생략]
// [-] 패턴 연습
console.log(str.match(/[0-9]/g)); // ["0", "1", "0", "1", 생략]
console.log(str.match(/[0-9]{1,}/g)); // ["010", "1234", "568", "7035", "60", "1234"]

// \w 패턴 연습
console.log(str.match(/\w{2,3}/g)); // 2-3글자로 이루어진 숫자or알파벳

// \b 패턴 연습
console.log(str.match(/\b\w{2,3}\b/g)); // 경계 사이의 2-3 글자로 이루어진 숫자or알파벳
console.log(str.match(/\bf\w{1,}\b/g)); // ["frozen", "fox"]

// \d 패턴 연습
console.log(str.match(/\d{1,}/g)); // ["010", "1234", "568", "7035", "60", "1234"]

// \s 패턴 연습
const h = `
   hello      w
  orld   !`;
console.log(h.replace(/\s/g, '')); // helloWorld!

// (?=기준패턴) 패턴 연습
console.log(str.match(/.(?=@)/g)); // ["c"]
console.log(str.match(/.{1,}(?=@)/g)); // ["theabc"]

// (?=>기준패턴) 패턴 연습
console.log(str.match(/(?<=@)./g)); // ["g"]
console.log(str.match(/(?<=@).{1,}/g)); // ["gmail.com"]
