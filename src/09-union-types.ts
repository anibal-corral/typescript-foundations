(()=>{

  let myDynamicVar: string|number;


  function greetings(myText:string|number){
    if(typeof myText ==='string'){
      console.log(`string ${myText.toLowerCase()}`);

    }else{
      console.log(`number ${myText.toFixed(1)}`)
    }
  }
greetings('Anibal');
greetings(12.29929292);


  })();
