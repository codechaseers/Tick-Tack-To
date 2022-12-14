import './game.css'
import { useState, useEffect } from 'react'
import audio from './music/ok.mp3'
import audio2 from './music/khatam.mp3'
const gamevalue = ["", "", "", "", "", "", "", "", ""]     // get the all filed data
function Tick() {

    const [b, setb] = useState(gamevalue)
    const [turn, setTurn] = useState(false)         // use for turn deside variable
    const [side, setSide] = useState("O")           // use for side  deside variable
    const [alert, setAlert] = useState(false)       // use for show winning alert variable
    const [plname, setPlname] = useState("")        // declare the winer name

    // <<<<<<<<<<<<<<  turn deside /or value input logic  >>>>>>>>>>>>>

    function gameLgic(index) {  // index is used an parameter for get the chosen "X"or "O" by the user

        let value = Array.from(b)     // hear b is a medium which is use for strong the data in the array field

        if (turn === true && value[index] !== "O") {
                    value[index] = "X"
                    setSide("O")
                    setTurn(!turn)
                    new Audio(audio).play()
        }
        else if (turn === false && value[index] !== "X") {
                    value[index] = "O"
                    setSide("X")
                    setTurn(!turn)
                    new Audio(audio).play()
        }
        setb(value)

    }

    // <<<<<  use effect is use for the game over and show aleert after the game end or win some one  >>>>>>>>

    useEffect(() => {
        const winer = checkewiner()
        if (winer) {
            // alert("loude tu jit gaya")
            setAlert(true)
            setPlname(winer)
            setTimeout(() => {

                setb(gamevalue)

            }, 6000);
            setTimeout(() => {
                setAlert(false)

            }, 6000);
            new Audio(audio2).play()
        }
        else {


        }
    }, [b])

    //<<<<<<<<<<<<<<<<<  Winning logic  >>>>>>>>>>>>>>>

    function checkewiner() {
        // it is the logic in my case cuze myboxces are wrongly arrangrd ! :(
        const lines = [
            [0, 8, 7],
            [1, 5, 6],
            [2, 3, 4],
            [0, 1, 2],
            [8, 5, 3],
            [7, 6, 4],
            [0, 5, 4],
            [7, 5, 2],
        ]
        for (let i = 0; i < lines.length; i++) {
            const [m, n, o] = lines[i];
            if (b[m] && b[m] === b[n] && b[m] === b[o]) {
                // console.log(b[a]);
                return b[m];
            }
        }
        return null;
    }
    // <<<<<<<<<<<<  main component   >>>>>>>>>>

    return (<>

        <h5>Now the turn for {side}  </h5>
        {alert ?
            <h1>Huureeee...{plname} is winer 🎉😁</h1>
            : false
        }
        {
            // draw?<h2>Draw ho gaya bahi...😮</h2>:false
        }
        <button onClick={() => { setb(gamevalue) }}>Clear Game</button>
        <div className="maindiv">
            <div className="box1 box" onClick={() => { gameLgic(0) }}>{b[0]}</div>
            <div className="box2 box" onClick={() => { gameLgic(1) }}>{b[1]}</div>
            <div className="box3 box" onClick={() => { gameLgic(2) }}>{b[2]}</div>
            <div className="box4 box" onClick={() => { gameLgic(3) }}>{b[3]}</div>
            <div className="box5 box" onClick={() => { gameLgic(4) }}>{b[4]}</div>
            <div className="box6 box" onClick={() => { gameLgic(5) }}>{b[5]}</div>
            <div className="box7 box" onClick={() => { gameLgic(6) }}>{b[6]}</div>
            <div className="box8 box" onClick={() => { gameLgic(7) }}>{b[7]}</div>
            <div className="box9 box" onClick={() => { gameLgic(8) }}>{b[8]}</div>
        </div>



    </>)
}
export default Tick