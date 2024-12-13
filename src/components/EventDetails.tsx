import React from 'react';

export const EventDetails = () => {
  return (
    <div className="space-y-6 mb-8">
      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-2">📅 일시</h2>
        <p className="text-gray-700">
          2024년 12월 28일 (토요일)<br />
          오후 7시 ~ 자정 (24시)
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-2">📍 장소</h2>
        <p className="text-gray-700">
          파티룸 emtpy 408호<br />
          <a 
            href="https://naver.me/G6iwBFZv" 
            className="text-blue-600 hover:text-blue-800 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            [위치 보기]
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-red-600 mb-2">👗 드레스코드</h2>
        <p className="text-gray-700">
          <span className="font-bold">빨강색!</span><br />
          (크리스마스 분위기를 한껏 살릴 수 있는 빨강색 포인트를 잊지 말아주세요!)
        </p>
      </section>
    </div>
  );
}