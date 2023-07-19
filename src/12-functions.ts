(()=>
{
  type Sizes= 'S' | 'M' | 'L' | 'XS';
  function createProductToJson(
    title: string,
    createdAt:Date,
    stock:number,
    size:Sizes
  ){
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product1 = createProductToJson('P1',new Date(), 12,'L');

  console.log(product1);
//con arrowfunction
  const createProductToJsonV2 =(
    title: string,
    createdAt:Date,
    stock:number,
    size?:Sizes
  ) =>
  {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const product2 = createProductToJsonV2('P2',new Date(), 12,'L');
  console.log(product2);
  const product3 = createProductToJsonV2('P3',new Date(), 12);
  console.log(product3);
}
)();
