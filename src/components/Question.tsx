import React from 'react';
import type { Question } from '../types/quiz';
import '../styles/Question.css';

interface QuestionProps {
  question: Question;
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({
  question,
  selectedOption,
  onOptionSelect,
}) => {
  return (
    <div role="region" aria-live="polite">
      <h2 className="question-text">{question.question}</h2>
      <div className="options-grid">
        {question.options.map((option, index) => (
          <button
            key={`option-${index}`}
            className={`option-button ${
              selectedOption === option ? 'selected' : ''
            }`}
            onClick={() => onOptionSelect(option)}
            aria-pressed={selectedOption === option}
            aria-label={`Option ${index + 1}: ${option}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
