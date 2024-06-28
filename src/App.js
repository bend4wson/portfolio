import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import './App.css';

function Scene() {
  const ref = useRef();
  const scroll = useScroll();

  useFrame(() => {
    const offset = scroll.offset;
    // Example usage of offset: Move the object based on scroll offset
    ref.current.position.y = offset * 5; // NOTE: Adjust multiplier as needed
  });

  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={ref} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={'orange'} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <div className="canvas-container">
      <Canvas>
        <ScrollControls pages={2}>
          <Scroll>
            <Scene />
          </Scroll>
          <Scroll html>
            <div style={{ position: 'absolute', top: '100vh', width: '100%', textAlign: 'center', fontSize: '2rem' }}>
              Scroll test
            </div>
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;
