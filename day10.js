import fetch from "node-fetch"

// const newSet= new Set()
// for(let i=0;i<11;i++){
//     newSet.add(i)
// }
// console.log(newSet)
// newSet.delete(10)
// console.log(newSet)
// newSet.clear()
// const countries = ['Finland', 'Sweden', 'Norway']
// const set1= new Set(countries)
// console.log(set1)
// const map1 = new Map()
// map1.set('finland','finland'.length)
// map1.set('norway','norway'.length)
// console.log(map1)
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const setA=new Set(a)
// const setB=new Set(b)
// const c=[...a,...b]
// const setC=new Set(c)
// console.log(setC)
// //level3
// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//   '%c30 Days%c %cOf%c %cJavaScript%c',
//   'color:green',
//   '',
//   'color:red',
//   '',
//   'color:yellow'
// ) // log output green red and yellow text



const promise1 = new Promise((resolveFun,rejectFun) => 
{

  let c =1;
  if(c){
    resolveFun("fuck you")
  }
  else{
    rejectFun()
  }
})

const resolveFun = (result)=>{
  return result;
}
const rejectFun=()=>{
  console.log('error')
}
promise1.then((result)=>console.log(result))

const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI)
//.then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => console.error(error))
