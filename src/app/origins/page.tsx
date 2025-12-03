"use client";

import { useState } from "react";
import { coffeeOrigins } from "@/data/origins";
import { Globe, Mountain, Flame, Coffee, Filter, Droplets } from "lucide-react";

export default function OriginsPage() {
  const [selectedOrigin, setSelectedOrigin] = useState<string | null>(null);

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/90 to-amber-800/70 z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1200&q=80"
            alt="커피 원두"
            className="w-full h-64 md:h-72 object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
              <Globe className="w-5 h-5" />
              <span className="font-medium">원두 산지</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">원두 산지별 특징</h1>
            <p className="text-lg opacity-90 max-w-2xl">
              세계 각국의 커피 원두 특징을 알아보세요
            </p>
          </div>
        </div>

        {/* Quick Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <Globe className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-900">9개국</div>
            <div className="text-gray-600 text-sm">주요 산지</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <Mountain className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-900">400~2,200m</div>
            <div className="text-gray-600 text-sm">재배 고도</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <Coffee className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-900">아라비카</div>
            <div className="text-gray-600 text-sm">주요 품종</div>
          </div>
          <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-amber-100">
            <Droplets className="w-8 h-8 text-amber-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-900">3가지</div>
            <div className="text-gray-600 text-sm">가공 방식</div>
          </div>
        </div>

        {/* Origins Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coffeeOrigins.map((origin) => (
            <div
              key={origin.id}
              className="bg-white rounded-2xl shadow-md border border-amber-100 overflow-hidden hover:shadow-lg transition-all cursor-pointer"
              onClick={() => setSelectedOrigin(selectedOrigin === origin.id ? null : origin.id)}
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{origin.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-amber-900">{origin.country}</h3>
                    <p className="text-gray-500 text-sm">{origin.variety}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{origin.description}</p>

                {/* Flavor Notes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {origin.flavorNotes.slice(0, 3).map((note) => (
                    <span
                      key={note}
                      className="bg-amber-100 text-amber-700 px-2 py-1 rounded-full text-xs"
                    >
                      {note}
                    </span>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center gap-1 text-gray-600">
                    <Mountain className="w-4 h-4 text-amber-500" />
                    {origin.altitude}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600">
                    <Flame className="w-4 h-4 text-amber-500" />
                    {origin.roasting.split(" ")[0]}
                  </div>
                </div>

                {/* Expanded Details */}
                {selectedOrigin === origin.id && (
                  <div className="mt-4 pt-4 border-t border-amber-100 space-y-3">
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">맛 특징</p>
                      <p className="text-sm text-gray-700">{origin.taste}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">가공 방식</p>
                      <p className="text-sm text-gray-700">{origin.processing}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">추천 로스팅</p>
                      <p className="text-sm text-gray-700">{origin.roasting}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-500 mb-1">향미 노트</p>
                      <div className="flex flex-wrap gap-1">
                        {origin.flavorNotes.map((note) => (
                          <span
                            key={note}
                            className="bg-amber-50 text-amber-600 px-2 py-1 rounded text-xs"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-md border border-amber-100 p-6 overflow-x-auto">
          <h2 className="text-2xl font-bold text-amber-900 mb-6">산지별 비교표</h2>
          <table className="w-full min-w-[800px] text-sm">
            <thead>
              <tr className="border-b-2 border-amber-200">
                <th className="text-left py-3 px-2 text-amber-900">산지</th>
                <th className="text-left py-3 px-2 text-amber-900">품종</th>
                <th className="text-left py-3 px-2 text-amber-900">고도</th>
                <th className="text-left py-3 px-2 text-amber-900">가공</th>
                <th className="text-left py-3 px-2 text-amber-900">로스팅</th>
                <th className="text-left py-3 px-2 text-amber-900">대표 향미</th>
              </tr>
            </thead>
            <tbody>
              {coffeeOrigins.map((origin) => (
                <tr key={origin.id} className="border-b border-amber-50 hover:bg-amber-50/50">
                  <td className="py-3 px-2 font-medium">
                    <span className="mr-2">{origin.flag}</span>
                    {origin.country}
                  </td>
                  <td className="py-3 px-2 text-gray-600">{origin.variety.split(" ")[0]}</td>
                  <td className="py-3 px-2 text-gray-600">{origin.altitude}</td>
                  <td className="py-3 px-2 text-gray-600">{origin.processing.split(",")[0]}</td>
                  <td className="py-3 px-2 text-gray-600">{origin.roasting.split(" ")[0]}</td>
                  <td className="py-3 px-2 text-gray-600">{origin.flavorNotes[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
