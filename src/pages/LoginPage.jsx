import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const navigate = useNavigate();
  const handleLogin = () => {
    // 這裡可先用 localStorage 模擬登入
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/');
  };
  return (
    <div>
      <h2>登入頁面</h2>
      <button onClick={handleLogin}>登入</button>
    </div>
  );
}
export default LoginPage;
