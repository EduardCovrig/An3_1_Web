let sayHello = (name) => `Hello, ${name}`;

console.log(sayHello(process.argv[2]));

let arrowFun = (arr) =>
 {
    return arr.join(' ')
 };
console.log(arrowFun(['Salut!','Aici e arrow', 'function']));