import { Sphere } from '@react-three/drei';
import GradientMaterial from './GradientMaterial';

import * as THREE from 'three';


const Background = () => {
   return (
       <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}>
           <GradientMaterial />
       </Sphere>
   );
};

export default Background;
