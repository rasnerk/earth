import {Canvas} from "@react-three/fiber";
import { Suspense } from "react/cjs/react.production.min";
import Earth from "./earth";
import './earthScene.css';

function EarthScene() {
    return (
        <div className="earth-three-js">
            <Canvas camera={{position: [0,0,20]}} color={"#000000"}>
                <pointLight color={"#f6f3ea"} intensity={1.5} position={[20, 10, 30]} />
                <Suspense fallback={"Loading earth..."}>
                    <Earth />
                </Suspense>
            </Canvas>
        </div>
    );
}
  
export default EarthScene;