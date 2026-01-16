export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export interface QuizState {
  currentQuestion: number;
  userAnswers: string[];
  isQuizCompleted: boolean;
}

export interface QuizProps {
  questions: Question[];
  onComplete: (answers: string[]) => void;
}

export interface QuestionProps {
  question: Question;
  selectedOption: string;
  onOptionSelect: (option: string) => void;
}

export interface NavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrevious: () => void;
  isLastQuestion: boolean;
}

export interface ResultsProps {
  userAnswers: string[];
  questions: Question[];
  onRestart: () => void;
}
