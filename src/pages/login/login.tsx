import React from 'react';
import { useNavigate } from 'react-router-dom';

import style from './style.module.less';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={style.container}>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Password" />
      <button type="submit" onClick={() => navigate('/about')}>
        Masuk
      </button>
    </div>
  );
};

export default LoginPage;
