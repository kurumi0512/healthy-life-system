import React from 'react';

const SugarLogPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">血糖紀錄</h1>
      {/* 可以放表單、圖表、餐前/餐後血糖紀錄 */}
      <p className="text-gray-700">這裡可記錄每日餐前、餐後的血糖值。</p>
    </div>
  );
};

export default SugarLogPage;