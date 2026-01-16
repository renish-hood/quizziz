import { FC } from 'react';
import { useQuiz } from '../hooks/useQuiz';
import { questions } from '../constants';
import  Navigation  from './Navigation';
import Question  from './Question';
import Results  from './results';
import '../styles/Quiz.css';

const Quiz: FC = () => {
  const {
    currentQuestion,
    userAnswers,
    selectedOption,
    isQuizCompleted,
    handleSelectOption,
    goToNext,
    goToPrevious,
    completeQuiz,
    restartQuiz,
    totalQuestions,
  } = useQuiz(questions);

  const handleNext = () => {
    if (currentQuestion === totalQuestions - 1) {
      if (selectedOption) {
        completeQuiz();
      } else {
        alert('Please select an answer before finishing the quiz');
      }
    } else {
      if (selectedOption) {
        goToNext();
      } else {
        alert('Please select an answer before proceeding');
      }
    }
  };

  if (isQuizCompleted) {
    return (
      <Results
        userAnswers={userAnswers}
        questions={questions}
        onRestart={restartQuiz}
      />
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <Question
        question={currentQ}
        selectedOption={selectedOption}
        onOptionSelect={handleSelectOption}
      />
      
      <Navigation
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        onNext={handleNext}
        onPrevious={goToPrevious}
        isLastQuestion={currentQuestion === totalQuestions - 1}
        onComplete={() => {
          if (selectedOption) {
            completeQuiz();
          } else {
            alert('Please select an answer before finishing');
          }
        }}
      />
    </div>
  );
};

export default Quiz;
