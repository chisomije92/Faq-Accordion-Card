
 let answerElement;
 let questionEl;
 let arrEl;



const showAnswer = function (num) {
answerElement = document.getElementById(`answer-${num}`)
questionEl = document.getElementById(`question-${num}`);
arrEl = document.getElementById(`arrow-div-${num}`)

  answerElement.classList.toggle('show-answer')
  if (answerElement.classList.contains('show-answer')){
    questionEl.style.color = `hsl(14, 88%, 65%)`;
    questionEl.style.fontWeight = `bolder`;
    arrEl.firstElementChild.style.transform = `rotateZ(180deg)`
  }else{
    questionEl.style.color = "";
 questionEl.style.fontWeight = "";
    arrEl.firstElementChild.style.transform = ""
  }
 

}
