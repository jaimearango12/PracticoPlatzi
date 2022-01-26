const doSomething = () => {
    return new promise ((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve (' Do something'),3000)
        : reject ( new Error('Test Error'))
    });
}

const doSomething1 = async () => {
    const something = await doSomething();
    console.log(something);
}

console.log('before');
doSomething1();
console.log('After');