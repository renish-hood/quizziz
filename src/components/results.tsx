import React from 'react';
import type { Question } from '../types/quiz';
import '../styles/Results.css';

interface ResultsProps {
  userAnswers: string[];
  questions: Question[];
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ userAnswers, questions, onRestart }) => {
  const calculateScore = (): { score: number; total: number } => {
    const score = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].answer ? acc + 1 : acc;
    }, 0);
    
    return {
      score,
      total: questions.length,
    };
  };

  const { score, total } = calculateScore();
  const percentage = Math.round((score / total) * 100);
  let resultMessage = '';

  if (percentage >= 80) {
    resultMessage = 'Excellent! You know your stuff!';
  } else if (percentage >= 60) {
    resultMessage = 'Good job! Keep learning!';
  } else {
    resultMessage = 'Keep practicing! You\'ll get better!';
  }

  return (
    <div className="results-container" role="region" aria-live="polite">
      <div className="results-card">
        <h2 className="results-title">Quiz Completed!</h2>
        
        <div className="score-display">
          <div className="score-percentage">{percentage}%</div>
          <div className="score-text">
            You scored {score} out of {total} questions correctly
          </div>
          <div className="result-message">{resultMessage}</div>
        </div>

        <div className="results-summary">
          <h3>Summary</h3>
          <ul className="question-list">
            {questions.map((question, index) => {
              const isCorrect = userAnswers[index] === question.answer;
              return (
                <li 
                  key={`result-${index}`} 
                  className={`question-result ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <span className="question-text">{question.question}</span>
                  {!isCorrect && (
                    <span className="correct-answer">
                      Correct answer: {question.answer}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <button 
          onClick={onRestart} 
          className="restart-button"
          aria-label="Restart quiz"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Results;