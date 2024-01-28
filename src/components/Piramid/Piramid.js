import React, { useEffect, useRef } from "react";

import D3Funnel from "d3-funnel";
import styles from "./Piramid.module.css";

const Piramid = ({ data, fontFamily }) => {
  const funnelContainerRef = useRef(null);

  useEffect(() => {
    showFunnel();
  }, []);

  const showFunnel = () => {
    const options = {
      chart: {
        curve: {
          enabled: false,
          height: 50,
        },
        bottomPinch: 0,
        bottomWidth: 1 / 3,

        inverted: false,
      },
      label: {
        format: "{l}",
        fontSize: "24px",
        fontWeight: "bold",
        fontFamily: "Inter",
      },
      block: {
        minHeight: 100,
        // highlight: true,
        fill: {
          type: "gradient",

          scale: data.map((item) => item.bg),
        },
      },
    };

    const chart = new D3Funnel(funnelContainerRef.current);
    chart.draw(data, options);
  };

  return (
    <div
      className={styles.wrapper}
      style={{ fontFamily: fontFamily, fontWeight: "900" }}
    >
      <div
        ref={funnelContainerRef}
        className={styles.chart}
        style={{ "--numberOfElemnt": data.length }}
      ></div>
    </div>
  );
};

export default Piramid;
