const form = document.querySelector('form.search');
const result = document.querySelector('.result')
const yodaButton = document.querySelector('.getYoda')
const proxy = `https://cors-anywhere.herokuapp.com/`
const baseEndpoint = `http://yoda-api.appspot.com/api/v1/yodish`

result.innerHTML = 'Yoda translate to Yoda I am. Yes, hrrrm.'




async function handleSubmit(e) {
e.preventDefault()
console.log(e.currentTarget)
const el = e.currentTarget;
console.log(el.phrase.value);
let text = el.phrase.value
text = encodeURIComponent(text)
console.log(text)
const response = await fetch(`${proxy}${baseEndpoint}?text=${text}`)
const data = await response.json();
console.log(data)
  result.innerHTML = data.yodish
}








// Event listeners

form.addEventListener('submit', handleSubmit);
