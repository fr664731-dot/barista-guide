import Link from "next/link";
import { Coffee, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-amber-700 p-2 rounded-lg">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">바리스타 가이드</span>
            </div>
            <p className="text-amber-200/80 text-sm leading-relaxed">
              바리스타를 꿈꾸는 모든 분들을 위한<br />
              자격증 정보 사이트
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-amber-100">자격증 정보</h3>
            <ul className="space-y-2 text-amber-200/80 text-sm">
              <li>
                <Link href="/certifications" className="hover:text-white transition-colors">
                  자격증 종류
                </Link>
              </li>
              <li>
                <Link href="/exam-info" className="hover:text-white transition-colors">
                  시험 일정
                </Link>
              </li>
              <li>
                <Link href="/practical-exam" className="hover:text-white transition-colors">
                  실기 채점 기준
                </Link>
              </li>
              <li>
                <Link href="/study-guide" className="hover:text-white transition-colors">
                  공부 방법
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-amber-100">커뮤니티</h3>
            <ul className="space-y-2 text-amber-200/80 text-sm">
              <li>
                <Link href="/reviews" className="hover:text-white transition-colors">
                  합격 후기
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-white transition-colors">
                  취업/창업 정보
                </Link>
              </li>
              <li>
                <Link href="/coffee-knowledge" className="hover:text-white transition-colors">
                  커피 지식
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-amber-100">공식 사이트</h3>
            <ul className="space-y-2 text-amber-200/80 text-sm">
              <li>
                <a 
                  href="https://www.kca.or.kr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  한국커피협회 <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.q-net.or.kr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  큐넷 <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://sca.coffee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  SCA <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-amber-200/60 text-sm">
            <p>© 2025 바리스타 가이드. All rights reserved.</p>
            <p className="text-center md:text-right">
              본 사이트는 비공식 정보 사이트입니다.<br className="md:hidden" />
              자격증 관련 정보는 각 발급 기관의 공식 사이트를 확인해주세요.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
