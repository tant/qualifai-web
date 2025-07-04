import Link from 'next/link';
import React from 'react';

const VietnamesePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Trang đang được xây dựng
        </h1>
        <p className="text-gray-600 mb-6">
          Chúng tôi đang tích cực làm việc để mang đến cho bạn phiên bản tiếng Việt.
          Vui lòng quay lại trang chủ trong thời gian chờ đợi.
        </p>
        <Link href="/" className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  );
};

export default VietnamesePage;
