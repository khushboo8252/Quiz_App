import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFetchQestion } from '../hooks/FetchQuestion';
import { updateResult } from '../hooks/setResult';
import { nextQuestion, prevQuestion } from '../redux/question_reducer';
import { useNavigate } from 'react-router-dom';

export default function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { queue, trace } = useSelector(state => state.questions);
  const result = useSelector(state => state.result.result);
  const [{ isLoading }] = useFetchQestion();
  const question = queue[trace];

  function handleSelect(i) {
    dispatch(updateResult({ trace, checked: i }));
  }

  async function onNext() {
    if (trace < queue.length - 1) {
      dispatch(nextQuestion());
    } else {
      const username = localStorage.getItem('username') || 'Guest';
      const attempted = result.filter(r => r !== undefined).length;
      const correct = result.filter((r, i) => r === queue[i]?.answer).length;
      const failed = attempted - correct;
      const percentage = ((correct / attempted) * 100).toFixed(2);
      const achieved = percentage >= 50 ? 'Passed' : 'Failed';

      try {
        await fetch('https://quiz-backend-e2mm.onrender.com/api/result', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username,
            result,
            attempts: attempted,
            points: correct,
            achieved
          }),
        });
      } catch (err) {
        console.error('Error saving result:', err);
      }

      navigate('/result');
    }
  }

  return isLoading ? (
    <div className="text-center mt-10 text-blue-500 text-xl animate-pulse">Loading...</div>
  ) : (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-2xl shadow-lg mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{question?.question}</h2>
      <ul className="space-y-4">
        {question?.options.map((option, i) => (
          <li key={i} className={`border rounded-lg p-4 cursor-pointer ${result[trace] === i ? 'border-blue-500 bg-blue-100' : 'border-gray-300 hover:bg-blue-50'}`}>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="answer"
                checked={result[trace] === i}
                onChange={() => handleSelect(i)}
              />
              <span>{option}</span>
            </label>
          </li>
        ))}
      </ul>

      <div className="flex justify-between items-center mt-8">
        <button onClick={() => dispatch(prevQuestion())} disabled={trace === 0} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50">Previous</button>
        <span className="text-sm text-gray-600">Question {trace + 1} of {queue.length}</span>
        <button onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {trace === queue.length - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
