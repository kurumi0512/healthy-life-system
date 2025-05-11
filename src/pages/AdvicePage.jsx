import React, { useState } from 'react';

function AdvicePage() {
  const [bmi, setBmi] = useState('');
  const [ageGroup, setAgeGroup] = useState('');
  const [gender, setGender] = useState('');
  const [goal, setGoal] = useState('');
  const [generatedAdvice, setGeneratedAdvice] = useState(null);

  const adviceList = [
    {
      bmiRange: [18.5, 24.9],
      ageGroup: '中年',
      healthAdvice: '保持規律運動與均衡飲食。',
      exerciseAdvice: '建議每週 3 次快走、有氧運動。',
    },
    {
      bmiRange: [25, 30],
      ageGroup: '壯年',
      healthAdvice: '控制飲食熱量，減少糖分攝取。',
      exerciseAdvice: '建議每週 3 次重訓 + 2 次有氧運動。',
    },
    {
      bmiRange: [0, 18.4],
      ageGroup: '青年',
      healthAdvice: '注意營養均衡，避免過瘦。',
      exerciseAdvice: '建議多伸展及核心肌群訓練。',
    },
  ];

  const generateAdvice = () => {
    const bmiNum = parseFloat(bmi);
    const advice = adviceList.find(
      (item) =>
        bmiNum >= item.bmiRange[0] &&
        bmiNum <= item.bmiRange[1] &&
        item.ageGroup === ageGroup
    );
    setGeneratedAdvice(advice || { healthAdvice: '請確認輸入內容正確', exerciseAdvice: '' });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">專屬健康建議</h2>

      {/* 輸入區 */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div>
          <label className="block text-gray-700 font-medium">BMI</label>
          <input
            type="number"
            value={bmi}
            onChange={(e) => setBmi(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
            placeholder="例：23.5"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">年齡層</label>
          <select
            value={ageGroup}
            onChange={(e) => setAgeGroup(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">請選擇</option>
            <option value="青年">青年</option>
            <option value="壯年">壯年</option>
            <option value="中年">中年</option>
            <option value="老年">老年</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">性別</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">請選擇</option>
            <option value="男">男</option>
            <option value="女">女</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">期望目標</label>
          <select
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            className="w-full mt-1 p-2 border rounded-lg"
          >
            <option value="">請選擇</option>
            <option value="減重">減重</option>
            <option value="維持">維持</option>
            <option value="增胖">增胖</option>
          </select>
        </div>
      </div>

      {/* 產生建議按鈕 */}
      <div className="flex justify-center mb-8">
        <button
          onClick={generateAdvice}
          className="bg-blue-500 text-white py-2 px-8 rounded-lg hover:bg-blue-600 transition"
        >
          產生建議
        </button>
      </div>

      {/* 顯示建議區 */}
      {generatedAdvice && (
        <div className="bg-white border-l-4 border-green-500 p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">建議結果</h3>
          <p className="text-gray-700">{generatedAdvice.healthAdvice}</p>
          <p className="text-gray-700">{generatedAdvice.exerciseAdvice}</p>
        </div>
      )}
    </div>
  );
}

export default AdvicePage;