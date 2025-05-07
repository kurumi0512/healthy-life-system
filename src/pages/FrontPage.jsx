import React from 'react';

function FrontPage() {
  const newsList = [
    { id: 1, title: '每天走路30分鐘的好處', url: '#' },
    { id: 2, title: '最新研究：高纖維飲食有助降血糖', url: '#' },
    { id: 3, title: '三種適合中年人的運動方式', url: '#' },
  ];

  return (
    <div className="max-w-3xl p-6 bg-white rounded-lg shadow-md ml-4 mt-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">健康新聞</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">對哪些東西有興趣呢</h2>
      <ul className="list-disc pl-5 space-y-2">
        {newsList.map(news => (
          <li key={news.id}>
            <a
              href={news.url}
              className="text-blue-600 hover:underline hover:text-blue-800"
            >
              {news.title}
            </a>
          </li>
        ))}
      </ul>
      {/* 新增圖片區塊 */}
    <img
      src="https://cdn.pixabay.com/photo/2020/09/27/03/38/woman-5605529_640.jpg"
      alt="健康主題圖片"
      className="mt-6 rounded-lg shadow-md"
    />
  </div>
  );
}

export default FrontPage;
