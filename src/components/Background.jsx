import { LayerMaterial } from 'lamina';
import { Sphere } from 'drei';
import * as THREE from 'three';

export const Background = () => {
    return (
        <>
        <Sphere scale={[100, 100, 100]} rotation-y={Math.PI / 2}/>
        <LayerMaterial
            lighting="physical"
            transmission={1}
            side={THREE.Backside}
        >

        </LayerMaterial>
        </>
    );
    
};