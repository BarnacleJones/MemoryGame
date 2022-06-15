import Card from "./Card";
import React, {useState} from "react";

function CardContainer() {
  
    //function to shuffle the array around
    function shuffleArray(arr) {        
        let newArray = arr.sort(() => Math.random() - 0.5);
        return newArray;
    }

    //function to change state to the shuffled array  
    const onCardClick = (e) => {  
        //figure out counter scores before changing array      
        determinePoints(e.target.id)
        //change state to the shuffled array
        const newArray = shuffleArray(cardArray);
        setcardArray([...newArray]);
    }

    //declare initial array
    const [cardArray, setcardArray] = useState
    (
        [
        <Card name="1" key={1} id="card1" onClick={onCardClick}/>,
        <Card name="2" key={2} id="card2" onClick={onCardClick}/>,
        <Card name="3" key={3} id="card3" onClick={onCardClick} />,
        <Card name="4" key={4} id="card4" onClick={onCardClick} />
        ]
    )

    let [counter, setCounter] = useState(0);
    let [highScoreCounter, setHighScoreCounter] = useState(0)
       
    let idArray = [];

    //function to see if the clicked item has already been clicked - adjusts scores accordingly
    function determinePoints(id)
    {
        //if the array has the id already
        //put previous high score as counter,reset counter and array
        if (idArray.includes(id)) {
            console.log(counter)
            if (counter > highScoreCounter) {
                setHighScoreCounter(counter)
            }                                    
            setCounter(counter = 0)
            idArray = []
            // console.log(idArray)
            console.log(counter)
        }
        else{
            idArray.push(id);
            setCounter(++counter)
            console.log("new score is " + counter)        
            }        
    }
//   useEffect(()=> {    
//        determinePoints()      
// }, []) 
    

    return (
      <div className="CardContainer">
        <div>
            <h3>Points: {counter}</h3>
            <h3>Previous high:{highScoreCounter} </h3>
        </div>
        {cardArray}
      </div>
    );
  }
  
export default CardContainer;