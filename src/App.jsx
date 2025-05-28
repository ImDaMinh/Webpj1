import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import MyInfoPage from './components/myinfopage/MyInfoPage';
import ProjectsPage from './components/projectpage/ProjectsPage';

function App() {
  // Lấy theme từ localStorage hoặc mặc định là dark
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') !== 'light';
  });

  // Áp dụng class vào body + lưu vào localStorage mỗi khi toggle
  useEffect(() => {
    document.body.classList.toggle('light', !darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div>
      <nav style={{ padding: '1rem' }}>
        <Link to="/">Giới thiệu</Link> |{' '}
        <Link to="/projects">Dự án</Link> |{' '}
        <button onClick={() => setDarkMode(!darkMode)} style={{ marginLeft: '10px' }}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<MyInfoPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </div>
  );
}

export default App;
