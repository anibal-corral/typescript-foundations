(()=>{
  let myDynamicVar:any;
  //Avoid using any!!!!!
  myDynamicVar = 'Hi';

  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 123;
  const r = (<number>myDynamicVar).toFixed();
  console.log(r);



  })();
