import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext'; // ⬅️ 引入登入狀態

function Navbar () {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navItemStyle = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold border-b-2 border-blue-600'
      : 'text-gray-600 hover:text-blue-600';

  const handleLogout = () => {
    logout();         // 清空登入狀態
    navigate('/login'); // 導回登入頁
  };

  return (
    <nav className="bg-white shadow p-4 flex gap-4 items-center justify-between">
      <div className="flex gap-4">
        <NavLink to="/" className={navItemStyle}>
          首頁
        </NavLink>
        <NavLink to="/profile" className={navItemStyle}>
          使用者設定
        </NavLink>
        <NavLink to="/weight" className={navItemStyle}>
          體重紀錄
        </NavLink>
        <NavLink to="/blood-pressure" className={navItemStyle}>
          血壓紀錄
        </NavLink>
        <NavLink to="/blood-sugar" className={navItemStyle}>
          血糖紀錄
        </NavLink>
        <NavLink to="/advice" className={navItemStyle}>
          健康建議
        </NavLink>
      </div>

      {/* 右上角顯示登入/登出 */}
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-gray-700">您好，{user.name}</span>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              登出
            </button>
          </>
        ) : (
          <NavLink to="/login" className="text-blue-600 hover:underline">
            登入
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Navbar;