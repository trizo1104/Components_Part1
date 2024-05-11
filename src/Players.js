import React, { Component } from "react";
import cr from './assets/images/cr.jpg'
import messi from './assets/images/messi.jpg'
import neymar from './assets/images/neymar.jpg'
import haaland from './assets/images/haaland.jpg'
import kane from './assets/images/kane.jpg'
import kante from './assets/images/kante.jpg'

export default class Player extends Component {
    render() {
        return (
            <div className="container">

                <div style={{ display: 'flex' }}>
                    <div className="column">
                        <div className="card">
                            <img src={cr} alt="Ronaldo" />
                            <h3>Cristiano Ronaldo</h3>
                            <p className="title">Manchester United</p>
                            <button>Detail</button>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={kante} alt="Kante" />
                            <h3>Kante</h3>
                            <p className="title">Chelsea</p>
                            <button>Detail</button>
                        </div>
                    </div>


                    <div className="column">
                        <div className="card">
                            <img src={messi} alt="Messi" />
                            <h3>Messi</h3>
                            <p className="title">PSG</p>
                            <button>Detail</button>
                        </div>
                    </div>
                </div>


                <div style={{ display: 'flex' }}>
                    <div className="column">
                        <div className="card">
                            <img src={neymar} alt="Neymar" />
                            <h3>Neymar</h3>
                            <p className="title">PSG</p>
                            <button>Detail</button>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={kane} alt="Kane" />
                            <h3>Kane</h3>
                            <p className="title">Tottenham</p>
                            <button>Detail</button>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src={haaland} alt="Haaland" />
                            <h3>Haaland</h3>
                            <p className="title">Manchester City</p>
                            <button>Detail</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}