import React, { useState } from 'react';
import './main.css';
import Box from '../SquareBoxes/box';

const Index = () => {

    const [square,setSquare] = useState(Array(9).fill(null));
    const [flag,setFlag] = useState(true);

    const findWinner = ()=>{
        const winningPossibility = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        
        for(let index of winningPossibility){
            const [a,b,c] = index;
            if(square[a] != null && square[a] === square[b] && square[a] === square[c]){
                return square[a];
            }
        }

        for(let i of square){
            if(i == null){
                return false;
            }
        }
        return "Draw";
    }

    function setHandle(id){
        if(square[id])  return;
        const newArr = [...square];
        if(flag){
            newArr[id] = 'X';
        }
        else{
            newArr[id] = 'O';
        }
        setFlag(!flag);
        setSquare(newArr);
    }

    const resetHandle = ()=>{
        setSquare(Array(9).fill(null));
        setFlag(true)
    }

    const isWinner = findWinner();

  return (
        <div className='mainContainer'>
            { isWinner ? (
                <>  
                    {isWinner === "Draw" ? (
                        <div className='winner'>
                            <div>Draw</div>
                            <button onClick={resetHandle} >Play Again</button>
                        </div>
                    ) : (
                        <div className='winner'>
                            <div>Player {isWinner} win.</div>
                            <button onClick={resetHandle} >Play Again</button>
                        </div>
                    )}
                    
                </>) : 
                
                (<>
                    <div className='gameLayout'>
                        <div className='rows'>
                            <Box value={square[0]} setHandle={setHandle} index={0} key={0} />
                            <Box value={square[1]} setHandle={setHandle} index={1} key={1} />
                            <Box value={square[2]} setHandle={setHandle} index={2} key={2} />
                        </div>

                        <div className='rows'>
                            <Box value={square[3]} setHandle={setHandle} index={3} key={3} />
                            <Box value={square[4]} setHandle={setHandle} index={4} key={4} />
                            <Box value={square[5]} setHandle={setHandle} index={5} key={5} />
                        </div>

                        <div className='rows'>
                            <Box value={square[6]} setHandle={setHandle} index={6} key={6} />
                            <Box value={square[7]} setHandle={setHandle} index={7} key={7} />
                            <Box value={square[8]} setHandle={setHandle} index={8} key={8} />
                        </div>
                    </div>
                </>)
            }
            
        </div>
  )
}

export default Index;
