import React from 'react';

export default function Lighting() {
  return (
    <>
      <ambientLight intensity={0.75} />
      <directionalLight position={[12, 16, 10]} intensity={1.8} color="#00f2fe" />
      <directionalLight position={[-12, -10, -10]} intensity={1.4} color="#f72585" />
      <pointLight position={[0, 6, 6]} intensity={2.2} color="#4facfe" distance={18} />
      <pointLight position={[6, -6, -4]} intensity={2.0} color="#ffb703" distance={16} />
    </>
  );
}
