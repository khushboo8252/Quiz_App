import React, { useEffect, useState } from 'react';

export default function Result() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const username = localStorage.getItem('username') || 'Guest';
  const totalQuestions = 16;

  useEffect(() => {
    async function fetchResult() {
      try {
        const res = await fetch(`https://quiz-backend-e2mm.onrender.com/api/result?username=${username}`);
        const resultData = await res.json();
        setData(resultData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchResult();
  }, [username]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-blue-500 text-xl animate-pulse">
        Loading result...
      </div>
    );
  }

  const { points = 0, achieved = 'N/A', result = [] } = data;
  const attempts = result.filter(r => r !== undefined).length;
  const failed = totalQuestions - points;
  const percentage = ((points / totalQuestions) * 100).toFixed(2);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="max-w-3xl w-full bg-white p-10 rounded-3xl shadow-xl animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-2">📊 Quiz Results</h2>
          <p className="text-lg text-gray-700">
            Hello, <span className="font-semibold">{username}</span>!
          </p>
          <p className={`text-2xl font-bold mt-4 ${achieved === 'Passed' ? 'text-green-600' : 'text-red-500'}`}>
            {achieved === 'Passed' ? '🎉 You Passed the Quiz!' : '😞 You Did Not Pass'}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-4 mb-8 overflow-hidden">
          <div
            className="bg-blue-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Stats Table */}
        <table className="w-full border text-md text-gray-800 mb-8 rounded-lg overflow-hidden shadow">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Name</th>
              <th className="p-3 border">Attempted</th>
              <th className="p-3 border">Correct</th>
              <th className="p-3 border">Wrong</th>
              <th className="p-3 border">Score %</th>
            </tr>
          </thead>
          <tbody className="text-center bg-white">
            <tr>
              <td className="p-3 border">{username}</td>
              <td className="p-3 border">{attempts}</td>
              <td className="p-3 border text-green-600">{points}</td>
              <td className="p-3 border text-red-500">{failed}</td>
              <td className="p-3 border">{percentage}%</td>
            </tr>
          </tbody>
        </table>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Retake Quiz
          </button>
          <button
            onClick={() => (window.location.href = '/')}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-xl text-lg font-semibold hover:bg-gray-400 transition-all duration-300"
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}
