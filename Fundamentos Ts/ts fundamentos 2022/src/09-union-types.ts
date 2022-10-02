(()=>{
    let userId : string | number;

    function  greeting (mru: string | number){
        if (typeof mru === 'string'){
            console.log(`string  ${mru.toLowerCase()}`);
        }else{
            console.log(`number ${mru.toFixed(1)}`)
        }
    }

    greeting(132456);
    greeting('hHI');
})()