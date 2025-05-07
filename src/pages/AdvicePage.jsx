function AdvicePage() {
    const advice = {
      bmi: '23.5',
      ageGroup: '中年',
      healthAdvice: '保持規律運動與均衡飲食。',
      exerciseAdvice: '建議每週 3 次快走、有氧運動。',
    };
  
    return (
      <div>
        <h2>健康建議</h2>
        <p class="text-blue-600/100 dark:text-sky-400/100">BMI：{advice.bmi}</p>
        <p>年齡層：{advice.ageGroup}</p>
        <p>建議：{advice.healthAdvice}</p>
        <p>運動建議：{advice.exerciseAdvice}</p>
      </div>
    );
  }
  export default AdvicePage;
  