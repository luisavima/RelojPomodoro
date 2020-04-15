import React, { Component } from 'react';

//FUNCIÓN PARA LOS SEGUNDOS EN EL COMPONENTE TIEMPO (IZQUIERA) 
const tiempoFormat = (timeLeftInSecond) => {
  let minuto = Math.floor(timeLeftInSecond / 60);
  if (minuto < 10) minuto = '0' + minuto;

  let second = timeLeftInSecond - 60 * minuto;
  if (second < 10) second = '0' + second;

  return `${minuto}:${second}`;
}

export default class Tiempo extends Component {
  render() {
    return (
      <div className="times">
        <div className="times-content">
          <label id="timer-label">{this.props.timeLabel}</label>
          <span id="time-left">{tiempoFormat(this.props.timeLeftInSecond)}</span>
        </div>
      </div>
    )
  }
}