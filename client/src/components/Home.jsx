import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  function startQuiz(e) {
    e.preventDefault();
    const name = inputRef.current.value;
    if (name.trim()) {
      localStorage.setItem('username', name);
      navigate('/quiz');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="max-w-2xl w-full bg-white p-10 rounded-3xl shadow-xl animate-fade-in">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
          📘 Quiz Application
        </h1>

        <ol className="list-decimal list-inside text-gray-700 space-y-3 mb-8 pl-2 text-lg leading-relaxed">
          <li>You will be asked 16 questions one after another.</li>
          <li>16 points are awarded for each correct answer.</li>
          <li>Each question has three options — choose only one.</li>
          <li>You can review and change answers before finishing.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>

        <form onSubmit={startQuiz} className="flex flex-col gap-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Enter your name"
            className="border-2 border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-lg font-semibold px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-md"
          >
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
