console.log(/a/.test('A'));
console.log(/a/i.test('A')); //i为忽略大小写


console.log('hello hell hoo'.match(/h.*?\b/g));
console.log('python php javscript'.match(/p.*?\b/g)); //g为匹配多个

console.log('aa\naa'.match(/^aa$/g));
console.log('aa\naa'.match(/^aa$/gm)); //m为每行匹配

console.log('python php javscript'.match(/p.*?\b/)); //不带g，会出现更详细信息
console.log('```aa\nbb\ndddd```'.match(/```.*```/)); //不能匹配到换行
console.log('```aa\nbb\ndddd```'.match(/```[\s\S]*```/)); //可以匹配包括换行符
console.log('```aa\nbb\ndddd```'.match(/```[^]*```/)); //与\s\S一样


