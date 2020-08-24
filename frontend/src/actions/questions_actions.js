import * as APIUtil from "../util/questions_api_util";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"

export const receiveQuestions = (questions) => {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    };
};

export const fetchQuestions = () => dispatch => {
    APIUtil.fetchQuestions()
        .then(questions => dispatch(receiveQuestions(questions)))
        .catch(err => console.log(err))
}