import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuestions } from '../redux/question_reducer';

export function useFetchQestion() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    isLoading: false,
    apiData: [],
    serverError: null,
  });

  useEffect(() => {
    setState(prev => ({ ...prev, isLoading: true }));

    fetch('https://quiz-backend-e2mm.onrender.com/api/questions')
      .then(res => res.json())
      .then(data => {
        if (data.length > 0) {
          dispatch(setQuestions(data)); // Store questions in Redux
          setState(prev => ({ ...prev, isLoading: false, apiData: data }));
        } else {
          throw new Error("No Questions Available");
        }
      })
      .catch(error => {
        setState(prev => ({ ...prev, isLoading: false, serverError: error }));
      });
  }, [dispatch]);

  return [state];
}
