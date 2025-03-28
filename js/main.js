fetch("https://opentdb.com/api.php?amount=20&category=11")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('.question').innerText = data.results[0].question
      document.querySelector('.a').innerText = `A: ${data.results[0].correct_answer}`
      document.querySelector('.b').innerText = `B: ${data.results[0].incorrect_answers[0]}`
      document.querySelector('.c').innerText = `C: ${data.results[0].incorrect_answers[1]}`
      document.querySelector('.d').innerText = `D: ${data.results[0].incorrect_answers[2]}`
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
