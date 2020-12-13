const questions = [
    {
        textQ: 'Сколько будет 2+2?',
        answer: '4',
        type: 'ask'
    },
    {
        textQ: 'Солнце встает на востоке?',
        answer: true,
        type: 'confirmation'
    },
    {
        textQ: 'Сколько будет 5 / 0?',
        answer: 'на 0 делить нельзя',
        type: 'ask'
    },
    {
        textQ: 'Какого цвета небо?',
        answer: 'голубое',
        type: 'ask'
    },
    {
        textQ: 'Как правильный ответ на главный вопрос жизни, вселенной и всего такого.',
        answer: '42',
        type: 'ask'
    },
];

let answerArr = showQuestion();

let points = calcPoints();
let result = showResult(points);

function showQuestion() {
    let questionsArr = questions.map(({ textQ }) => textQ);
    let typeArr = questions.map(({ type }) => type);
    let massive = [];
    massive = defQuestionType(questionsArr, typeArr);
    return massive;
}

// function mapMassive(massive, key) {
//     return massive.map(({ key }) => key);
// }


function defQuestionType(qArr, tArr) {
    let massive = [];
    for (let i = 0; i < qArr.length; i++) {
        if (tArr[i] === 'confirmation') {
            massive[i] = confirm(qArr[i]);
        } else {
            massive[i] = prompt(qArr[i]);
        }
    }
    return massive
}

function calcPoints() {
    let correctAnswers = questions.map(({ answer }) => answer);
    let result = 0;
    for (let i = 0; i < answerArr.length; i++) {
        if (answerArr[i] === correctAnswers[i]) {
            result += 10;
        } else { 
            result += 0;
        }
    }
    return result
}

function showResult(res) {
    alert('Вы набрали ' + `${res}` + ' баллов');
}

