"use client";

import { useState } from "react";
import { FileQuestion, CheckCircle, XCircle, RotateCcw, ChevronRight, Trophy, BookOpen } from "lucide-react";
import { quizQuestions, categories, Question } from "@/data/quiz";

export default function QuizPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const filteredQuestions = selectedCategory === "전체" 
    ? quizQuestions 
    : quizQuestions.filter(q => q.category === selectedCategory);

  const currentQuestion = filteredQuestions[currentIndex];
  const totalQuestions = filteredQuestions.length;

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    
    if (index === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
    setAnsweredQuestions(prev => [...prev, currentQuestion.id]);
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
    setQuizCompleted(false);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    handleReset();
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return { text: "훌륭해요! 합격 수준입니다! 🎉", color: "text-green-600" };
    if (percentage >= 60) return { text: "합격선 통과! 조금만 더 노력하세요! 👍", color: "text-amber-600" };
    return { text: "더 공부가 필요해요. 화이팅! 💪", color: "text-red-600" };
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80"
            alt="바리스타 필기시험 공부"
            className="w-full h-64 md:h-72 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <FileQuestion className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">기출문제 연습</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">바리스타 2급 필기 예상문제</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              실제 시험과 유사한 문제로 실력을 점검하세요
            </p>
          </div>
        </div>

        {/* Exam Info */}
        <div className="bg-amber-50 rounded-xl p-6 mb-8 border border-amber-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-sm text-gray-600">총 문제 수</p>
              <p className="text-2xl font-bold text-amber-700">50문항</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">시험 시간</p>
              <p className="text-2xl font-bold text-amber-700">50분</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">합격 기준</p>
              <p className="text-2xl font-bold text-amber-700">60점 이상</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">출제 형태</p>
              <p className="text-2xl font-bold text-amber-700">4지선다</p>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-amber-700 text-white"
                  : "bg-amber-100 text-amber-700 hover:bg-amber-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {quizCompleted ? (
          /* Result Screen */
          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 text-center">
            <Trophy className="w-20 h-20 text-amber-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-amber-900 mb-4">퀴즈 완료!</h2>
            <div className="text-6xl font-bold text-amber-700 mb-2">
              {score} / {totalQuestions}
            </div>
            <p className="text-gray-600 mb-4">
              정답률: {((score / totalQuestions) * 100).toFixed(0)}%
            </p>
            <p className={`text-xl font-medium mb-8 ${getScoreMessage().color}`}>
              {getScoreMessage().text}
            </p>
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-800 transition-all"
            >
              <RotateCcw className="w-5 h-5" />
              다시 풀기
            </button>
          </div>
        ) : (
          /* Quiz Screen */
          <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8">
            {/* Progress */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500">
                {currentQuestion.category}
              </span>
              <span className="text-sm font-medium text-amber-700">
                {currentIndex + 1} / {totalQuestions}
              </span>
            </div>
            <div className="w-full bg-amber-100 rounded-full h-2 mb-8">
              <div 
                className="bg-amber-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
              ></div>
            </div>

            {/* Question */}
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Q{currentIndex + 1}. {currentQuestion.question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "w-full text-left p-4 rounded-xl border-2 transition-all ";
                
                if (showResult) {
                  if (index === currentQuestion.answer) {
                    buttonClass += "border-green-500 bg-green-50 text-green-800";
                  } else if (index === selectedAnswer) {
                    buttonClass += "border-red-500 bg-red-50 text-red-800";
                  } else {
                    buttonClass += "border-gray-200 bg-gray-50 text-gray-500";
                  }
                } else {
                  buttonClass += "border-amber-200 hover:border-amber-400 hover:bg-amber-50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={buttonClass}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <span>{option}</span>
                      {showResult && index === currentQuestion.answer && (
                        <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                      )}
                      {showResult && index === selectedAnswer && index !== currentQuestion.answer && (
                        <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Explanation */}
            {showResult && (
              <div className={`p-4 rounded-xl mb-6 ${
                selectedAnswer === currentQuestion.answer 
                  ? "bg-green-50 border border-green-200" 
                  : "bg-red-50 border border-red-200"
              }`}>
                <div className="flex items-start gap-2">
                  <BookOpen className="w-5 h-5 mt-0.5 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900 mb-1">해설</p>
                    <p className="text-gray-700">{currentQuestion.explanation}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                현재 점수: <span className="font-bold text-amber-700">{score}점</span>
              </div>
              {showResult && (
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-full font-bold hover:bg-amber-800 transition-all"
                >
                  {currentIndex < totalQuestions - 1 ? "다음 문제" : "결과 보기"}
                  <ChevronRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
