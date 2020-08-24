
export const mergeAnswers = (answerStr, incorrectAnswersArr) => {
    let arr = []
    arr.push(answerStr)
    arr.push(...incorrectAnswersArr)
    return shuffleArr(arr)
}

// randomizes order of array of all four possible answers
const shuffleArr = (arr) => {
    for(let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
    return arr
}