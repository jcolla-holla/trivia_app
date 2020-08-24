import * as APIUtil from "../util/questions_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

export const receiveQuestions = (questions) => {
    // see what questions actually is
    // debugger
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    };
};

export const fetchQuestions = () => dispatch => {
    // see what questions actually is
    // debugger
    APIUtil.fetchQuestions()
        .then(questions => dispatch(receiveQuestions(questions)))
        .catch(err => console.log(err))
}