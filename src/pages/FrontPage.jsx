import React from 'react';

function FrontPage() {
  const newsList = [
    { id: 1, title: '每天走路30分鐘的好處', url: '#' },
    { id: 2, title: '最新研究：高纖維飲食有助降血糖', url: '#' },
    { id: 3, title: '三種適合中年人的運動方式', url: '#' },
  ];

  return (
    <div>
      <h1>健康管理首頁</h1>
      <h2>健康新聞</h2>
      <ul>
        {newsList.map(news => (
          <li key={news.id}>
            <a href={news.url}>{news.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FrontPage;
