import React, { useState } from 'react';

export const GiftExchange = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-red-600 mb-2">🎁 마니또 선물 준비</h2>
      <p className="text-gray-700">
        파티의 하이라이트는 <span className="font-bold">마니또 선물 교환</span>입니다!
      </p>
      <ul className="list-disc list-inside text-gray-700 ml-4">
        <li><span className="font-bold">2만원 이내의 선물</span>을 준비해주세요.</li>
        <li>선물 교환을 위한 <span className="font-bold">마니또 추첨</span>이 진행됩니다.</li>
      </ul>
      
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일 주소를 입력해주세요"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            제출하기
          </button>
        </div>
      </form>
    </div>
  );
}