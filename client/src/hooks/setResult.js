import { setResult } from '../redux/result_reducer';
import { nextQuestion } from '../redux/question_reducer';

export function updateResult({ trace, checked }) {
  return function (dispatch) {
    dispatch(setResult({ trace, checked }));
    dispatch(nextQuestion());
  };
}
