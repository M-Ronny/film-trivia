fetch("https://opentdb.com/api.php?amount=20&category=11")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)

    for (let a = 0; a < data.results.length; a++) {
      const random = Math.floor(Math.random() * 4)
      data.results[a].incorrect_answers.splice(random, 0, data.results[a].correct_answer)
    }

    document.querySelector('.nextQuestion').addEventListener('click', nextQuestion)
    let i = 0
    let number = 1

    function nextQuestion() {
      document.querySelector('.nextQuestion').innerText = 'Next Question'
      document.querySelector('.choices').style.display = 'block'
      document.querySelector('section h2').style.display = 'block'

      document.querySelector('.a').addEventListener('click', choiceA)
      document.querySelector('.b').addEventListener('click', choiceB)
      document.querySelector('.c').addEventListener('click', choiceC)
      document.querySelector('.d').addEventListener('click', choiceD)

      function choiceA() {
        if (data.results[i - 1].incorrect_answers[0] === data.results[i - 1].correct_answer) {
        console.log('correct')
        } else {
          console.log('incorrect')
        }
      }

      function choiceB() {
        if (data.results[i - 1].incorrect_answers[1] === data.results[i - 1].correct_answer) {
          console.log('correct')
        } else {
          console.log('incorrect')
        }
      }

      function choiceC() {
        if (data.results[i - 1].incorrect_answers[2] === data.results[i - 1].correct_answer) {
          console.log('correct')
        } else {
          console.log('incorrect')
        }
      }

      function choiceD() {
        if (data.results[i - 1].incorrect_answers[3] === data.results[i - 1].correct_answer) {
          console.log('correct')
        } else {
          console.log('incorrect')
        }
      }
        
      if (i < data.results.length) {
        document.querySelector('section h2').innerText = `Question ${number}`
        document.querySelector('.question').innerText = data.results[i].question
        document.querySelector('.a').innerText = `A: ${data.results[i].incorrect_answers[0]}`
        document.querySelector('.b').innerText = `B: ${data.results[i].incorrect_answers[1]}`
        document.querySelector('.c').innerText = `C: ${data.results[i].incorrect_answers[2]}`
        document.querySelector('.d').innerText = `D: ${data.results[i].incorrect_answers[3]}`

        i++
        number++
        console.log(i)
      }
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

