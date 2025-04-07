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
    let score = 0

    function nextQuestion() {
      document.querySelector('.nextQuestion').innerText = 'Next Question'
      document.querySelector('.choices').style.display = 'block'
      document.querySelector('section h2').style.display = 'block'
      document.querySelector('.answer').innerText = ''
      document.querySelector('.a').removeAttribute('disabled')
      document.querySelector('.b').removeAttribute('disabled')
      document.querySelector('.c').removeAttribute('disabled')
      document.querySelector('.d').removeAttribute('disabled')
      document.querySelector('.c').style.display = 'inline'
      document.querySelector('.d').style.display = 'inline'
      document.querySelector('.a').style.background = 'rgb(229, 74, 74)'
      document.querySelector('.b').style.background = 'rgb(59, 188, 59)'
      document.querySelector('.c').style.background = 'rgb(195, 207, 54)'
      document.querySelector('.d').style.background = 'rgb(107, 196, 225)'

      document.querySelector('.a').addEventListener('click', choiceA)
      document.querySelector('.b').addEventListener('click', choiceB)
      document.querySelector('.c').addEventListener('click', choiceC)
      document.querySelector('.d').addEventListener('click', choiceD)

      if (i == 20) {
        document.querySelector('.choices').style.display = 'none'
        document.querySelector('.nextQuestion').style.display = 'none'

        document.querySelector('h2').innerText = `Your Score: ${score}/20`
        document.querySelector('.question').innerText = 'Want to give another shot? Refresh this page and see if you can do better then your last attempt.'
      }
        
      if (data.results[i].type === 'boolean' && i < data.results.length) {
        document.querySelector('.c').style.display = 'none'
        document.querySelector('.d').style.display = 'none'

        document.querySelector('section h2').innerText = `Question ${number}/20`
        document.querySelector('.question').innerHTML = data.results[i].question
        document.querySelector('.a').innerText = `A: ${data.results[i].incorrect_answers[0]}`
        document.querySelector('.b').innerText = `B: ${data.results[i].incorrect_answers[1]}`

        i++
        number++
      } else {
        document.querySelector('section h2').innerText = `Question ${number}/20`
        document.querySelector('.question').innerHTML = data.results[i].question
        document.querySelector('.a').innerHTML = `A: ${data.results[i].incorrect_answers[0]}`
        document.querySelector('.b').innerHTML = `B: ${data.results[i].incorrect_answers[1]}`
        document.querySelector('.c').innerHTML = `C: ${data.results[i].incorrect_answers[2]}`
        document.querySelector('.d').innerHTML = `D: ${data.results[i].incorrect_answers[3]}`

        i++
        number++
      }
    }

    function choiceA() {
      if (data.results[i - 1].incorrect_answers[0] === data.results[i - 1].correct_answer) {
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.a').style.background = 'green'
        document.querySelector('.b').style.background = 'grey'
        document.querySelector('.c').style.background = 'grey'
        document.querySelector('.d').style.background = 'grey'
        document.querySelector('.answer').innerText = 'Correct!'
        
        score++
        console.log(score)
      } else {
        console.log('incorrect')
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.a').style.background = 'red'
        document.querySelector('.b').style.background = 'grey'
        document.querySelector('.c').style.background = 'grey'
        document.querySelector('.d').style.background = 'grey'
        document.querySelector('.answer').innerHTML = `Incorrect! The correct answer is "${data.results[i - 1].correct_answer}"`
      }
    }

    function choiceB() {
      if (data.results[i - 1].incorrect_answers[1] === data.results[i - 1].correct_answer) {
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.b').style.background = 'green'
        document.querySelector('.a').style.background = 'grey'
        document.querySelector('.c').style.background = 'grey'
        document.querySelector('.d').style.background = 'grey'
        document.querySelector('.answer').innerText = 'Correct!'

        score++
        console.log(score)
      } else {
        console.log('incorrect')
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.b').style.background = 'red'
        document.querySelector('.a').style.background = 'grey'
        document.querySelector('.c').style.background = 'grey'
        document.querySelector('.d').style.background = 'grey'
        document.querySelector('.answer').innerHTML = `Incorrect! The correct answer is "${data.results[i - 1].correct_answer}"`
      }
    }

    function choiceC() {
      if (data.results[i - 1].incorrect_answers[2] === data.results[i - 1].correct_answer) {
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.c').style.background = 'green'
        document.querySelector('.a').style.background = 'grey'
        document.querySelector('.b').style.background = 'grey'
        document.querySelector('.d').style.background = 'grey'
        document.querySelector('.answer').innerText = 'Correct!'

        score++
        console.log(score)
      } else {
        console.log('incorrect')
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.c').style.background = 'red'
        document.querySelector('.a').style.background = 'grey'
        document.querySelector('.b').style.background = 'grey'
        document.querySelector('.d').style.background = 'grey'
        document.querySelector('.answer').innerHTML = `Incorrect! The correct answer is "${data.results[i - 1].correct_answer}"`
      }
    }

    function choiceD() {
      if (data.results[i - 1].incorrect_answers[3] === data.results[i - 1].correct_answer) {
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.d').style.background = 'green'
        document.querySelector('.a').style.background = 'grey'
        document.querySelector('.b').style.background = 'grey'
        document.querySelector('.c').style.background = 'grey'
        document.querySelector('.answer').innerText = 'Correct!'

        score++
        console.log(score)
      } else {
        console.log('incorrect')
        document.querySelector('.a').disabled = 'true'
        document.querySelector('.b').disabled = 'true'
        document.querySelector('.c').disabled = 'true'
        document.querySelector('.d').disabled = 'true'
        document.querySelector('.d').style.background = 'red'
        document.querySelector('.a').style.background = 'grey'
        document.querySelector('.b').style.background = 'grey'
        document.querySelector('.c').style.background = 'grey'
        document.querySelector('.answer').innerHTML = `Incorrect! The correct answer is "${data.results[i - 1].correct_answer}"`
      }
    }
  })
  .catch(err => {
    console.log(`error ${err}`)
  });

