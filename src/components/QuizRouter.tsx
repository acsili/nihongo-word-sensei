import { QuizWelcome } from "./QuizWelcome";
import { QuizGame } from "./QuizGame";
import { QuizResults } from "./QuizResults";
import { useQuizLogic } from "@/hooks/useQuizLogic";
import { vocabularyData } from "@/data/vocabulary";

export const QuizRouter = () => {
  const {
    currentQuestion,
    options,
    score,
    questionNumber,
    streak,
    questionLimit,
    quizMode,
    isQuizStarted,
    showModeSelector,
    isQuizCompleted,
    visibleStats,
    timeLimit,
    selectedTimeLimit,
    setQuizMode,
    setQuestionLimit,
    handleAnswer,
    startQuiz,
    resetQuiz,
    changeModeAndRestart,
    handleTryAgain,
    toggleStatVisibility,
    setTimeLimit,
    setSelectedTimeLimit,
  } = useQuizLogic();

  if (isQuizCompleted) {
    return (
      <QuizResults
        score={score}
        questionLimit={questionLimit}
        onTryAgain={handleTryAgain}
        onChangeMode={changeModeAndRestart}
      />
    );
  }

  if (!isQuizStarted) {
    return (
      <QuizWelcome
        vocabularyCount={vocabularyData.length}
        quizMode={quizMode}
        questionLimit={questionLimit}
        showModeSelector={showModeSelector}
        visibleStats={visibleStats}
        timeLimit={selectedTimeLimit}
        onModeChange={setQuizMode}
        onQuestionLimitChange={setQuestionLimit}
        onStartQuiz={startQuiz}
        onToggleStat={toggleStatVisibility}
        onTimeLimitChange={setSelectedTimeLimit}
      />
    );
  }

  return (
    <QuizGame
      currentQuestion={currentQuestion}
      options={options}
      quizMode={quizMode}
      score={score}
      questionLimit={questionLimit}
      questionNumber={questionNumber}
      streak={streak}
      visibleStats={visibleStats}
      timeLimit={timeLimit}
      onAnswer={handleAnswer}
      onChangeMode={changeModeAndRestart}
      onReset={resetQuiz}
      setTimeLimit={setTimeLimit}
    />
  );
};

export default QuizRouter;
