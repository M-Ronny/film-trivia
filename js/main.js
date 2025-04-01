document.querySelector('.startQuiz').addEventListener('click', startQuiz)

function startQuiz() {
  document.querySelector('.nextQuestion').style.display = 'block'
  document.querySelector('.startQuiz').style.display = 'none'
  document.querySelector('.choices').style.display = 'block'
  document.querySelector('section h2').style.display = 'block'

  fetch("https://opentdb.com/api.php?amount=20&category=11")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)

      for (let a = 0; a < data.results.length; a++) {
        const random = Math.floor(Math.random() * 4)
        data.results[a].incorrect_answers.splice(random, 0, data.results[a].correct_answer)
      }

      document.querySelector('section h2').innerText = 'Question 1'
      document.querySelector('.question').innerText = data.results[0].question
      document.querySelector('.a').innerText = `A: ${data.results[0].incorrect_answers[0]}`
      document.querySelector('.b').innerText = `B: ${data.results[0].incorrect_answers[1]}`
      document.querySelector('.c').innerText = `C: ${data.results[0].incorrect_answers[2]}`
      document.querySelector('.d').innerText = `D: ${data.results[0].incorrect_answers[3]}`

      document.querySelector('.nextQuestion').addEventListener('click', nextQuestion)
      let i = 1
      let number = 2

      function nextQuestion() {
        if (i < data.results.length) {
          document.querySelector('section h2').innerText = `Question ${number}`
          document.querySelector('.question').innerText = data.results[i].question
          document.querySelector('.a').innerText = `A: ${data.results[i].incorrect_answers[0]}`
          document.querySelector('.b').innerText = `B: ${data.results[i].incorrect_answers[1]}`
          document.querySelector('.c').innerText = `C: ${data.results[i].incorrect_answers[2]}`
          document.querySelector('.d').innerText = `D: ${data.results[i].incorrect_answers[3]}`
          i++
          number++
        }
      }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
