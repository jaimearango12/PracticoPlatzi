const somethingWillHappen = () => {
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('hey');
        } else {
            reject('whops');
        }
    }) ;
};

somethingWillHappen()
.then(response => console.log(response))
.catch(err=> console.error(err));