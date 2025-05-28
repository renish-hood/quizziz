import { useState } from 'react';
import type { Question, QuizState } from '../types/quiz';

export const useQuiz = (questions: Question[]) => {
  const initialAnswers = Array(questions.length).fill('');
  
  const [quizState, setQuizState] = useState<Omit<QuizState, 'isQuizCompleted'>>({
    currentQuestion: 0,
    userAnswers: initialAnswers,
  });
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  const { currentQuestion, userAnswers } = quizState;
  const selectedOption = userAnswers[currentQuestion] || '';

  const handleSelectOption = (option: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestion] = option;
    setQuizState(prev => ({
      ...prev,
      userAnswers: newAnswers
    }));
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const checkIfAllQuestionsAnswered = () => {
    return userAnswers.every(answer => answer !== '');
  };

  const completeQuiz = () => {
    if (checkIfAllQuestionsAnswered()) {
      setIsQuizCompleted(true);
      return true;
    }
    return false;
  };

  const restartQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      userAnswers: Array(questions.length).fill('')
    });
    setIsQuizCompleted(false);
  };

  return {
    currentQuestion,
    userAnswers,
    selectedOption,
    isQuizCompleted,
    handleSelectOption,
    goToNext,
    goToPrevious,
    completeQuiz,
    restartQuiz,
    totalQuestions: questions.length
  };
};
