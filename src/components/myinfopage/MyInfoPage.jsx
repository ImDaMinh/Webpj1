import './style.css';
import avatar from '../../pictures/avatar.png';
import ParticlesBackground from './ParticlesBackground';

function MyInfoPage() {
  return (
    <div className="info-wrapper" style={{ position: 'relative' }}>
      <ParticlesBackground />
      <div className="info-card" style={{ position: 'relative', zIndex: 1 }}>
        <img src={avatar} alt="Avatar" className="avatar" />
        <h1>Xin chào, mình là Minh 👋</h1>
        <p>Chỉ là dev web ✨</p>
        <p>
          Kết nối với mình:
          <a href="https://github.com/duy" target="_blank"> GitHub</a> |
          <a href="https://linkedin.com" target="_blank"> LinkedIn</a>
        </p>
      </div>
    </div>
  );
}
export default MyInfoPage;