import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItemStyle = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-bold border-b-2 border-blue-600'
      : 'text-gray-600 hover:text-blue-600';

  return (
    <nav className="bg-white shadow p-4 flex gap-4">
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
    </nav>
  );
};

export default Navbar;