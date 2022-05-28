import React, { CSSProperties } from "react";
import "./label.css";

export interface Props {
  /**
   * Este es el mensaje a mostrar en la etiqueta
   */
  label: string;
  /**
   * Este es el tamanio de la etiqueta
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalizacion de la oracion
   */
  allCaps?: boolean;
  /**
   * Tema de color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   *  Color de la fuente
   */
  fontColor?: string;
}

const Label = ({ label = "No Label", size = "normal", allCaps, color = "primary", fontColor = "#faa" }: Props) => {
  return (
    <span className={`label ${size} text-${color} `} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};

export default Label;
