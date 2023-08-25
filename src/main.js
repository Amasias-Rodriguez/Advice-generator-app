const diceBtn = document.querySelector('#diceBtn');
const advice = document.querySelector('#advice');
const adivceId = document.querySelector('#adviceId');

getAdvice()
diceBtn.addEventListener('click', async () => {
    getAdvice()
})

function getAdvice() {
    //random id
    const id = Math.floor(Math.random() * 100) + 1;
    //calling api
    fetch(`https://api.adviceslip.com/advice/${id}`)
        .then(res => res.json())
        .then(data => {
            //showing api
            const adviceMsg = data.slip.advice;
            advice.innerText = adviceMsg;
            adivceId.innerText = data.slip.id;
        })
        .catch(err => getAdvice())
}
