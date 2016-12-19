

$("input[type='range']").addClass('slideThumb');

$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


function playSound() {
    var playAudio = document.getElementById('audio1');
    if (playAudio.paused)
        playAudio.play();
    else
        playAudio.pause();
}

$(document).ready(function() {
    $('[data-toggle="popover"]').popover();
});

var totalScore = 0;

document.querySelector('#evalQuiz').addEventListener('click', function(event){
	var q1Val = document.querySelector('[name="one"]:checked').value;
	var q2Val = document.querySelector('[name="two"]:checked').value;
	var q3Val = document.querySelector('[name="three"]:checked').value;
  	var q4Val = document.querySelector('[name="four"]:checked').value;
	var q5Val = document.querySelector('[name="five"]:checked').value;
  	var q6Val = document.querySelector('[name="six"]:checked').value;

	if (q1Val === "a") {
		totalScore++;
	}

	if (q2Val === "b") {
		totalScore++;
	}

  if (q3Val === "a") {
		totalScore++;
	}

  if (q4Val === "a") {
    totalScore++;
  }

  if (q5Val === "b") {
    totalScore++;
  }

  if (q6Val === "a") {
    totalScore++;
  }
	var feedbackEl = document.getElementById('quizFeedback');

	feedbackEl.innerHTML = "Your score was: " + totalScore + "/6 questions.";

	if (totalScore < 6) {
		feedbackEl.classList.add('badQuiz');
	} else {
		feedbackEl.classList.add('goodQuiz');
	}

});
