console.log('day7 code');
function printFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
  }
  console.log(printFullName('Asabeneh', 'Yetayeh'));
  //level1

  function fullName(){
      console.log("printing full name")
  }
  fullName();
  function addNumbers(num1,num2){
      return num1+num2
  }
  console.log(addNumbers(3,2));
  function areaOfCircle(radius){
      return(Math.PI*radius*radius);
  }
  console.log(areaOfCircle(7));


  function bmi(weight,height){
      let bmi=weight/(height*height);
      console.log(bmi)
      if(bmi<18.5){
          console.log('under weight')
      }
      else if(18.5<bmi<24.9){
          console.log('Normal weight')
      }
      else if(25<bmi<29.9){
          console.log('overweight')
      }
      else{
          console.log('obese')
      }
  }
  bmi(53,15.3);

  let array1 = [2,3,4,5,6];
  function printArray(array){
      console.log(array)
  }
  printArray(array1)

  function sum(){
      let sum1=0;
      for(let i=0;i<arguments.length;i++){
          sum1+=arguments[i]
      }
      console.log(sum1)
  }
  sum(2,4,5)

  function modifyArray(){
      //console.log(arguments.length)
      //console.log(arguments[0])
      if(arguments[0].length<5){
        //   return 'not found'
      }

    else{
        let array=arguments[0];
        //console.log(array[4].toUpperCase())
        array[4]= array[4].toUpperCase();
        return array;
    }
}
    console.log(modifyArray(['cherry','berry','melon','apple','banana','orange']))
    console.log(modifyArray(['cherry','berry','melon','apple']))
  

