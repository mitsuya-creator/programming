/*ENCODE is convert code to other languange
  DECODE is reverse code to first
*/


const uri = 'https://mozilla.org/?x=шеллы'
const encode = encodeURI(uri)
console.log('ini Encode '+encode)

try{
  console.log('ini decode '+decodeURI(encode))
}catch (e){
  console.Error(e)
}