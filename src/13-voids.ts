(()=>
{
  const calcTotal = (prices:number[])=>{
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total;
  }
  const rta = calcTotal([1,2,3,4,5,6]);
  // console.log(rta);

  const printTotal = (prices:number[])=>{
    const rta = calcTotal(prices);
  console.log('El total es', rta);

  }
  printTotal([1,2,3,4,5,6])

}
)();
