import React, { Component } from "react";

//EVENTO DE START -STOP Y RESET
export default class Botones_controladores extends Component {
  render() {
    return (
      <div className="controller">
        <button id="start_stop" onClick={this.props.onStartStop}>
          {this.props.isStart ? "Parar" : "Iniciar"}
        </button>
        <button id="reset" onClick={this.props.onReset}>
          Reiniciar
        </button>
      </div>
    );
  }
}
