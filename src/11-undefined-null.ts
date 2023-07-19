(()=>
{
  // let myNumber:number;
  // let myString:string;
  let myNull:null = null;
  let myUndefined:undefined=undefined;

  let myNumber:number | null = null;
  myNumber=12;
  let myString:string|undefined=undefined;
  myString='With Data'

  function hi(name:string | null){
    let hello: string = 'Hi ';
    if(name){
      hello += name
    }else {
      hello += 'Nobody'
    }
    console.log(hello);

  }

  function hiBetterVersion(name:string | null){
    let hello: string = 'Hi ';
    hello += name?.toLowerCase() || 'Nobody';
    console.log(hello);
  }

    hiBetterVersion('Anibal');
    hiBetterVersion(null);
  }
)();
