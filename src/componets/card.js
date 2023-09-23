import './card.css';
import React from 'react';
import './inpunt.css'
function Card(props) {
    let [message,setMessage] = React.useState('Yor are lose');
    let [number, setNumber] = React.useState(props.number);

    const getValues = event => {
        let userNum = event.target.value;
        game(userNum, number);
      };

    function game(usernum,systnum) {
        console.log('value is:', systnum);
        if (usernum == systnum) {
            setMessage('You are won');
        } else {
            setMessage('You are lose');
        }
        setNumber(props.number);
    }

    return (
        <div>
            <div class="contenedor">
                <h2>Ingresa un número:</h2>
                <input onChange={getValues} type="number" min="1" max="10" id="numeroInput" placeholder="Escribe un número"/>
            </div>
            <div class="card">
                <div class="card-inner">
                    <div class="card-front">
                        Show 
                    </div>
                    <div class="card-back">
                        <h4>
                            {number}
                            <br/>
                            {message}
                        </h4>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card;