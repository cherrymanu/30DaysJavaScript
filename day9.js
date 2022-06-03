const numbers1 = [1, 2, 3, 4, 5]
const sum = numbers1.reduce((acc, cur) => acc-cur, 0)

console.log(sum)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//countries.forEach(con => console.log(con))
//names.forEach(nam=>console.log(nam))
//numbers.forEach(num=>console.log(num))
const upperCaseCoun = countries.map(con=> con.toUpperCase())
console.log(upperCaseCoun)
const landCoun = countries.filter((coun)=> coun.includes('land'))
console.log(landCoun)
const countriesCon = countries.reduce(
    (acc,cur)=> acc+','+cur)
console.log(countriesCon)
console.log(names.some(nam=> nam.length>=7))
console.log(countries.every(nam=>nam.includes('land')))
console.log(countries.find(coun=>coun.length===6))
console.log(countries.findIndex(coun=> coun==='Norway1'))
//level2
const sum1 = products.filter(prod=> typeof(prod.price)!='string').reduce((acc,cur)=> acc+cur.price,0)
console.log(sum1)
//console.log(typeof(2))
const summ = products.reduce((acc,cur)=> typeof(cur.price)==='number'?acc+ parseInt(cur.price):acc+0 ,0)
console.log(summ)
console.log(countries.filter(coun=> countries.indexOf(coun)<=2))

