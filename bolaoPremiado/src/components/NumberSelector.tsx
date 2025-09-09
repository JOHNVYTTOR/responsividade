import React from "react";
import type { NumberArray } from "../types/types";

interface NumberSelectorProps {
    userNumbers: NumberArray;
    setUserNumbers: (numbers: NumberArray) => void;
    onDraw: () => void;
}

const NumberSelector: React.FC<NumberSelectorProps> = ({ userNumbers, setUserNumbers, onDraw}) => {
    const toggleNumber = (num: number) =>{
        if (userNumbers.includes(num)) {
            setUserNumbers(userNumbers.filter((n) => n !== num));
        } else if (userNumbers.length < 6) {
            setUserNumbers([...userNumbers, num]);
        }
    }

    return (
        <div className="container-selector">
            <div className="user-numbers">
                <h1>Números selecionados</h1>
                <div className="viewer">
                    {userNumbers.map((num) => (
                        <h2 key={num} className="number-view">
                            {num}
                        </h2>
                    ))}
                </div>
            </div>

            <div className="number-grid">
                {Array.from( {length: 60}, (_, i) => i+1 ).map((num) => (
                    <button key={num} onClick={() => toggleNumber(num)} className={ `number${userNumbers.includes(num) ? "-selected" : ""}`}>
                        {num}
                    </button>
                ))}
            </div>

            <button onClick={() => userNumbers.length === 6 ? onDraw() : alert ("Selecione 6 números")} className="btn-default">
                Sortear
            </button>
        </div>
    );
};

export default NumberSelector