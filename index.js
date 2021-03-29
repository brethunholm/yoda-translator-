const form = document.querySelector('form.search');
const result = document.querySelector('.result')
const yodaButton = document.querySelector('.getYoda')
// const proxy = `https://thingproxy.freeboard.io/fetch/`
const baseEndpoint = `https://yoda-api.appspot.com/api/v1/yodish`

result.innerHTML = 'Yoda translate to Yoda I am. Yes, hrrrm.'




async function handleSubmit(e) {
e.preventDefault()
console.log(e.currentTarget)
const el = e.currentTarget;
console.log(el.phrase.value);
let text = el.phrase.value
text = encodeURIComponent(text)
console.log(text)

try {
    const response = await fetch(`${baseEndpoint}?text=${text}`)
    const data = await response.json();
    console.log(data)
    result.innerHTML = data.yodish
} catch (error) {
    console.error(error)
}



}








// Event listeners

form.addEventListener('submit', handleSubmit);
