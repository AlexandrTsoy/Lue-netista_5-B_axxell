function redirectToTaskList() {
window.location.href = './index.html'; // !!!!!!!!!!!!!!!!!!!!!!
  }

  function checkAnswers() {



// function checkAnswers(task_1) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_1"]:checked');

var resultDiv = document.getElementById('result1');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault3') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Vanhempi+lapsi-liikunta.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Vanhempi+lapsi-liikunta.';
}



// function checkAnswers(task_2) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_2"]:checked');

var resultDiv = document.getElementById('result2');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault4') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Mäkeläisen koululla.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Mäkeläisen koululla.';
}




// function checkAnswers(task_3) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_3"]:checked');

var resultDiv = document.getElementById('result3');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault9') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Ei ole jumppaa.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Ei ole jumppaa.';
}






// function checkAnswers(task_4) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_4"]:checked');

var resultDiv = document.getElementById('result4');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault11') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: 45 minuuttia.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: 45 minuuttia.';
}







// function checkAnswers(task_5) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_5"]:checked');

var resultDiv = document.getElementById('result5');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault13') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Selkä kuntoon.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Selkä kuntoon.';
}






// function checkAnswers(task_6) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_6"]:checked');

var resultDiv = document.getElementById('result6');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault17') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: 35 euroa.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: 35 euroa.';
}





// function checkAnswers(task_7) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_7"]:checked');

var resultDiv = document.getElementById('result7');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault21') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: kurdi sorani, suomi, selkosuomi, thai, englanti.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: kurdi sorani, suomi, selkosuomi, thai, englanti.';
}






// function checkAnswers(task_8) 
var selectedOption = document.querySelector('input[name="flexRadioDefault_task_8"]:checked');

var resultDiv = document.getElementById('result8');

if (selectedOption) {
    if (selectedOption.id === 'flexRadioDefault24') {
        resultDiv.style.color = 'green';
        resultDiv.innerHTML = 'Vastaus on oikein';
    } else {
        resultDiv.style.color = 'red';
        resultDiv.innerHTML = 'Vastaus on väärin, oikea vastaus: Marjaana ja Piyamaporn.';
    }
} else {
    resultDiv.style.color = 'red';
    resultDiv.innerHTML = 'Et vastannut, mutta sinun oli vastattava: Marjaana ja Piyamaporn.';
}







  var button = document.querySelector('.btn-success');
    button.style.display = 'none';
  }
