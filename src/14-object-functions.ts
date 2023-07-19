(()=>
{
  type Sizes= 'S' | 'M' | 'L' | 'XS';

  const loginWIthParameters = (email:string, password:string)=>{
    console.log(email, password);

  }
 loginWIthParameters('anibal.corral@gmail.com', 'aecspwd');


 const loginWithObject = (data:{email:string, password:string})=>{
  console.log(data.email, data.password);

}
loginWithObject({email:'anibal.corral@gmail.com',password:'aecspw....'})

const products:any[] = [];

const addProduct = (data:{title:string, createdAt:Date,stock:number,size?:Sizes}
)=>
{
products.push(data);
}
addProduct({
  title:'Product 1',
  createdAt: new Date(),
  stock:12
});
addProduct({
  title:'Product 2',
  createdAt: new Date(),
  stock:100
});
console.log(products);



}
)();
