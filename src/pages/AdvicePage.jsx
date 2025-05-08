import React from 'react';

function AdvicePage() {
  const adviceList = [
    {
      bmi: '23.5',
      ageGroup: '中年',
      healthAdvice: '保持規律運動與均衡飲食。',
      exerciseAdvice: '建議每週 3 次快走、有氧運動。',
    },
    {
      bmi: '27.1',
      ageGroup: '壯年',
      healthAdvice: '控制飲食熱量，減少糖分攝取。',
      exerciseAdvice: '建議每週 3 次重訓 + 2 次有氧運動。',
    },
    {
      bmi: '18.2',
      ageGroup: '青年',
      healthAdvice: '注意營養均衡，避免過瘦。',
      exerciseAdvice: '建議多伸展及核心肌群訓練。',
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">健康建議</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {adviceList.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border-l-4 border-blue-500">
            <p className="text-blue-600 font-semibold">BMI：{item.bmi}</p>
            <p>年齡層：{item.ageGroup}</p>
            <p>建議：{item.healthAdvice}</p>
            <p>運動建議：{item.exerciseAdvice}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdvicePage;
  