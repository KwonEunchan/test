import logo from './shield.png'
import './App.css';
import { useState } from 'react';

function App() {
  const [style, setStyle] = useState({});
  const [logoStyle, setLogoStyle] = useState({ display: 'none' }); // Initial logo hidden state

  // Handle touch events for the second element (for translation effect)
  const handleSecondElementTouchStart = (e) => {
    const touchX = e.touches[0].clientX; // Get touch X position
    setStyle({
      transform: `translateX(${touchX - 500}px)`, // Move element by 100px to the left of the touch position
    });
  };

  const handleSecondElementTouchEnd = () => {
    setStyle({
      transform: 'translateX(0px)', // Reset element position to the original one
    });
  };

  // Handle touch events for the third element (to show the logo)
  const handleThirdElementTouchStart = (e) => {
    const touchX = e.touches[0].clientX; // Get touch X position
    const touchY = e.touches[0].clientY; // Get touch Y position
    setLogoStyle({
      display: 'block', // Show the logo
      position: 'absolute',
      left: `${touchX-25}px`, // Position the logo at the touch X position (adjust the offset to center)
      top: `${touchY-55}px`, // Position logo vertically based on touch Y position
      width: '70px', // Set logo width to 10px
      height: '60px', // Set logo height to 10px
    });
  };

  const handleThirdElementTouchEnd = () => {
    setLogoStyle({
      display: 'none', // Hide the logo when touch ends
    });
  };

  return (
    <div className="App">
      <div id="display">
        <p>우리 수요일에 어떻게 할까 ?</p>
        <div className="elBox">
          <div className="el" onTouchStart={(e) => { e.target.classList.add('e1'); }}>
            피곤하니까 그냥 다음에 보기..
          </div>
          <div
            className="el"
            onTouchStart={handleSecondElementTouchStart} // Apply touch handler to second element
            onTouchEnd={handleSecondElementTouchEnd} // Reset on touch end for second element
            style={style} // Dynamically apply styles
          >
            뼈찜 맛있게 먹고 집에 가기
          </div>
          <div
            className="el"
            onTouchStart={handleThirdElementTouchStart} // Apply touch handler to third element
            onTouchEnd={handleThirdElementTouchEnd} // Reset on touch end for third element
          >
            밥 먹고 카페가서 얘기하다 집에 가기
          </div>
          <div className="el" onTouchStart={()=>{alert('나두 그게 좋아♥')}}>밥 먹고 카페 간 다음에 같이 손 잡고 이쁘게 잘 자기</div>
        </div>
        {/* Logo displayed at the touch position with width and height set to 10px */}
        <img src={logo} alt="logo" style={logoStyle} />
      </div>
    </div>
  );
}

export default App;
