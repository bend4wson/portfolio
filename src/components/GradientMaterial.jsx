import React from 'react';
import * as THREE from 'three';


const GradientMaterial = () => {
   const uniforms = {
       colorA: { value: new THREE.Color('blue') },
       colorB: { value: new THREE.Color('red') }
   };


   const vertexShader = `
       varying vec3 vNormal;
       void main() {
           vNormal = normalize(normalMatrix * normal);
           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
       }
   `;


   const fragmentShader = `
       uniform vec3 colorA;
       uniform vec3 colorB;
       varying vec3 vNormal;
       void main() {
           float mixValue = (vNormal.y + 1.0) / 2.0;
           gl_FragColor = vec4(mix(colorA, colorB, mixValue), 1.0);
       }
   `;


   return (
       <shaderMaterial
           attach="material"
           args={[{
               uniforms: uniforms,
               vertexShader: vertexShader,
               fragmentShader: fragmentShader,
               side: THREE.BackSide,
               transparent: true
           }]}
       />
   );
};


export default GradientMaterial;
