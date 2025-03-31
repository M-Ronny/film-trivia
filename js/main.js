document.querySelector('.startQuiz').addEventListener('click', startQuiz)

function startQuiz() {
  document.querySelector('.nextQuestion').style.display = 'block'
  document.querySelector('.startQuiz').style.display = 'none'

  fetch("https://opentdb.com/api.php?amount=20&category=11")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.nextQuestion').addEventListener('click', nextQuestion)
      let i = 0

      function nextQuestion() {
        if (i < data.results.length) {
          document.querySelector('.question').innerText = data.results[i].question
          document.querySelector('.a').innerText = `A: ${data.results[i].correct_answer}`
          document.querySelector('.b').innerText = `B: ${data.results[i].incorrect_answers[0]}`
          document.querySelector('.c').innerText = `C: ${data.results[i].incorrect_answers[1]}`
          document.querySelector('.d').innerText = `D: ${data.results[i].incorrect_answers[2]}`
          i++
        }
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
