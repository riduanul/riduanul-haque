import React from "react";
import Particles from "react-particles-js";

export default function Wraper() {
  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        tight: "0",
        bottom: "0",
        left: "0",
        zIndex: "-1",
      }}
    >
      <Particles
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      ></Particles>
      ;
    </div>
  );
}
