import React, { useState } from 'react'
import { listPlayer } from './ListOfPlayer'

export default function Players() {

    const [player, setPlayer] = useState([]);
    console.log(player)

    return (
        <div className="container">
            <div className="row" >
                {
                    listPlayer.map((player) => {
                        return (
                            <div className="col-md-4" key={player.id}>
                                <div className="card">
                                    <img src={player.img} alt={player.name} />
                                    <h4>{player.name}</h4>
                                    <p>{player.club}</p>
                                    <p className='btn_detail'><button onClick={() => { setPlayer(player) }}><a href='#popup1' id='openPopUp'>Detail</a></button></p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div id='popup1' className='overplay'>
                <div className='popup'>
                    <img src={player.img} alt={player.name} />
                    <h2>{player.name}</h2>
                    <a className='close' href='#'>&times;</a>
                    <div className='content'>
                        {player.info}
                    </div>
                </div>
            </div>
        </div>
    )
}
