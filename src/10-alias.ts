(()=>{
  type UserID = string|number;
  // let userId:string|number | boolean;
  let userId:UserID;
  //Literal Types
    // let shirtSize:string;
    // shirtSize='M';
    // shirtSize='L';
    // shirtSize='S';
    let shirtSize: 'S' | 'M' | 'L' | 'XS';
    shirtSize='M';

    //ALIAS
    type Sizes= 'S' | 'M' | 'L' | 'XS';
    let globeSize:Sizes;
    globeSize='XS';
  function greetings(myText:UserID, size:Sizes){
    if(typeof myText ==='string'){
      console.log(`string ${myText.toLowerCase()}`);
    }
    // else{
    //   console.log(`number ${myText.toFixed(1)}`)
    // }

greetings('AECS', 'M');




  }
})();
