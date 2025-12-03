"use client";

import Link from "next/link";
import { useState } from "react";
import { Coffee, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { href: "/certifications", label: "자격증 종류" },
    { href: "/exam-info", label: "시험 정보" },
    { href: "/practical-exam", label: "실기 채점" },
    { href: "/quiz", label: "기출문제" },
    { href: "/calculator", label: "계산기" },
    { href: "/study-guide", label: "공부 방법" },
    { href: "/coffee-knowledge", label: "커피 지식" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-amber-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-amber-700 p-2 rounded-lg group-hover:bg-amber-800 transition-colors">
              <Coffee className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-amber-900">바리스타 가이드</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-all font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-amber-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-amber-100">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-gray-600 hover:text-amber-700 hover:bg-amber-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
