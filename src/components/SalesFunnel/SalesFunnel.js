import React from "react";
import styles from "./SalesFunnel.module.css";

const SalesFunnel = ({
  fontFamily,
  data,
  primaryColor,
  secondaryColor,
  curveBg,
}) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        fontFamily: fontFamily,
        "--pirmaryColor": primaryColor,
        "--secondaryColor": secondaryColor,
        "--curveBg": curveBg,
      }}
    >
      <h2 className={styles.title}>Sales Funnel</h2>
      <div className={styles.funnelContainer}>
        {data.map((el, i) => (
          <div
            className={[
              styles.labelContainer,
              i % 2 === 0 && styles.rightLabelContainer,
            ].join(" ")}
            style={{
              background: el.bg,
              width: `${100 - i * 13}%`,
              "--bg": el.bg,
            }}
            key={i}
          >
            <p className={styles.label}>{el.label}</p>
            <p
              className={[styles.info, i % 2 === 0 && styles.rightInfo].join(
                " "
              )}
              dangerouslySetInnerHTML={{ __html: el.info }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesFunnel;
