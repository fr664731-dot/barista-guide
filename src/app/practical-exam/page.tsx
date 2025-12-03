"use client";

import { ClipboardCheck, Coffee, Timer, AlertTriangle, XCircle } from "lucide-react";

export default function PracticalExamPage() {
  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80" alt="barista" className="w-full h-64 md:h-80 object-cover" />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">바리스타 2급 실기 채점 기준</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white rounded-2xl p-8 text-center">
            <div className="text-6xl font-bold mb-2">60점</div>
            <div className="text-xl font-medium">기술 평가</div>
          </div>
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-8 text-center">
            <div className="text-6xl font-bold mb-2">40점</div>
            <div className="text-xl font-medium">감각 평가</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">1. 기술 평가 (60점)</h2>
          <div className="space-y-3">
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>준비 상태</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">5점</span></div>
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>에스프레소 추출</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">10점</span></div>
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>카푸치노 제조</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">10점</span></div>
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>작업 자세</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">10점</span></div>
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>위생 관리</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">10점</span></div>
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>제공 및 정리</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">10점</span></div>
            <div className="flex justify-between p-4 bg-amber-50 rounded-xl"><span>추출 시간</span><span className="bg-amber-200 px-3 py-1 rounded-full font-bold">5점</span></div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">2. 감각 평가 (40점)</h2>
          <p className="text-gray-600">에스프레소 20점 + 카푸치노 20점</p>
        </div>
        <div className="bg-red-50 rounded-2xl border-2 border-red-200 p-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">실격 사유</h2>
          <p className="text-gray-700">15분 초과 60초 이상, 장비 파손, 부정행위</p>
        </div>
      </div>
    </div>
  );
}
