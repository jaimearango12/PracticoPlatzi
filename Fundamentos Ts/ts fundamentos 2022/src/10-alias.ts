(()=>{
    
    type UserId = string | number;
    
    let mru: UserId;

    function  greeting (mru: UserId){
        if (typeof mru === 'string'){
            console.log(`string  ${mru.toLowerCase()}`);
        }else{
            console.log(`number ${mru.toFixed(1)}`)
        }
    }

    //literal types
    let shirtSize: 'S' | 'M' | 'L';
    shirtSize = 'L';
    shirtSize = 'M';
    // shirtSize ='Cualquier otro valor da error'

    //se le puede asignar un alias
    type Size =  'S' | 'M' | 'L';

    let shirtSize2: Size;

})()