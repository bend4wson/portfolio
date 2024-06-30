import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { Experience } from './components/Experience';
import './App.css';


function Scene() {
 const scroll = useScroll();


 useFrame(({ camera }) => {
   const offset = scroll.offset;
   camera.position.z = offset * 10; // Adjust multiplier as needed
 });


 return (
   <>
       <ambientLight />
       <pointLight position={[10, 10, 10]} />
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
           <color attach="background" args={['#ececec']} />
           <Experience />
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
