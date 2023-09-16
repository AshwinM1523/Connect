import "./App.css";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Earth } from "./components/earth";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <CanvasContainer>
      {/* Three Js Must be Inside of Canvas */}
      <Canvas>
        <Suspense fallback={null}>
          {/* loading State */}
          <Earth /> {/* Render Earth Component */}
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
