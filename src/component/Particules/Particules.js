import React from "react";

import ParticlesBg from "particles-bg";

export default function Particules() {

    
  return (
    <div>
      <ParticlesBg
        color="#1da1f2"
        num={60}
        type="cobweb"        
        bg={true}
      ></ParticlesBg>
    </div>
  );
}
