(()=>{
   const calTotal = (prices:number[]) => {
      let total = 0;
      prices.forEach((item)=>{
         total += item;
      })
      return total;
   }
   
   const printTotal=(prices : number[]) =>{
      const rta = calTotal(prices);
      console.log(`El total es ${rta}`);
      
   }
   
   //aca es tipo void poruqe la funcion no retorna nada
   const rta=  printTotal([1,2,2,3,3,5])
   console.log(rta);
   
})()