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

let answerArr = showQuestions();

let points = calcPoints();
let result = showResult(points);

function showQuestions() {
    let questionsArr = questions.map(({ textQ }) => textQ);
    let typeArr = questions.map(({ type }) => type);
    let answers = [];
    answers = getAnswers(questionsArr, typeArr);
    return answers;
}

function getAnswers(qArr, tArr) {
    let answersMas = [];
    for (let i = 0; i < qArr.length; i++) {
        if (tArr[i] === 'confirmation') {
            answersMas[i] = confirm(qArr[i]);
        } else {
            answersMas[i] = prompt(qArr[i]);
        }
    }
    return answersMas
}

// function getAnswers(qArr, tArr) {
//     let answersMas = [];
//     qArr.forEach (function(item, 0, qArr)) {
//         if (tArr[i] === 'confirmation') {
//             answersMas[i] = confirm(qArr[i]);
//         } else {
//             answersMas[i] = prompt(qArr[i]);
//         }
//     }
//     return answersMas
// }

function calcPoints() {
    let correctAnswers = questions.map(({ answer }) => answer);
    let result = 0;
    for (let i = 0; i < answerArr.length; i++) {
        (answerArr[i] === correctAnswers[i]) ?
            result += 10 : result += 0;
    }
    return result
}

function showResult(res) {
    alert('Вы набрали ' + `${res}` + ' баллов');
}

