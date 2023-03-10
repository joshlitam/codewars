const tossCoin = document.querySelector('#toss-button').addEventListener('click', _ => {
    let randomNum = Math.round(Math.random())
    let result = randomNum ? 'heads' : 'tails'
    console.log(randomNum)
    document.querySelector('h1').innerText = result
})