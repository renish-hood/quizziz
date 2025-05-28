import React from 'react';
import '../styles/Navigation.css';

interface NavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
  isLastQuestion: boolean;
  onComplete: () => void;
}

const Navigation: React.FC<NavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onNext,
  onPrevious,
  isLastQuestion,
  onComplete,
}) => {
  return (
    <div className="navigation-container" role="navigation" aria-label="Quiz navigation">
      <button
        type="button"
        className="nav-button previous"
        onClick={onPrevious}
        disabled={currentQuestion === 0}
        aria-label="Previous question"
      >
        Previous
      </button>
        
      <div className="progress-indicator" aria-live="polite">
        Question {currentQuestion + 1} of {totalQuestions}
      </div>
      
      <button
        type="button"
        className={`nav-button ${isLastQuestion ? 'finish' : 'next'}`}
        onClick={isLastQuestion ? onComplete : onNext}
        aria-label={isLastQuestion ? 'Finish quiz' : 'Next question'}
      >
        {isLastQuestion ? 'Finish Quiz' : 'Next'}
      </button>
    
    </div>
  );
};

export default Navigation;
