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
    //some are commented as it might look better with less cards
    const [cardArray, setcardArray] = useState
    (
        [
        // <Card src={require("../images/AutoCircusCop.jpeg")} alt="Auto Circus Cop" key={1} id="card1" onClick={onCardClick}/>,
        <Card src={require("../images/Brandt.png")} alt="Brandy" key={2} id="card2" onClick={onCardClick}/>,
        <Card src={require("../images/BunnyLebowski.jpeg")} alt="Bunny Lebowski" key={3} id="card3" onClick={onCardClick} />,
        // <Card src={require("../images/DaFino.jpeg")} alt="Da Fino" key={4} id="card4" onClick={onCardClick} />,
        <Card src={require("../images/Donny.png")} alt="Donny" key={5} id="card5" onClick={onCardClick} />,
        <Card src={require("../images/JackieTreehorn.png")} alt="Jackie Treehorn" key={6} id="card6" onClick={onCardClick} />,
        <Card src={require("../images/JesusQuintana.jpeg")} alt="Jesus Quintana" key={7} id="card7" onClick={onCardClick} />,
        // <Card src={require("../images/KnoxHarrington.jpeg")} alt="KnoxHarrington" key={8} id="card8" onClick={onCardClick} />,
        <Card src={require("../images/LarrySellers.jpeg")} alt="LarrySellers" key={9} id="card9" onClick={onCardClick} />,
        <Card src={require("../images/MaudeLebowski.jpeg")} alt="Maude Lebowski" key={10} id="card10" onClick={onCardClick} />,
        <Card src={require("../images/Smokey.jpeg")} alt="Smokey" key={11} id="card11" onClick={onCardClick} />,
        <Card src={require("../images/TheBigLebowski.jpeg")} alt="The Big Lebowski" key={12} id="card12" onClick={onCardClick} />,
        <Card src={require("../images/TheDude.jpeg")} alt="The Dude" key={13} id="card13" onClick={onCardClick} />,
        // <Card src={require("../images/TheNihilists.jpeg")} alt="The Nihilists" key={14} id="card14" onClick={onCardClick} />,
        <Card src={require("../images/TheStranger.png")} alt="The Stranger" key={15} id="card15" onClick={onCardClick} />,
        <Card src={require("../images/WalterSobchack.jpeg")} alt="Walter Sobchak" key={17} id="card17" onClick={onCardClick} />
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
            alert("Clicked that one already!")
            if (counter > highScoreCounter) {
                setHighScoreCounter(counter)
            }                                    
            setCounter(counter = 0)
            idArray = []
        }
        else{
            idArray.push(id);
            setCounter(++counter)   
            }        
    }
//   useEffect(()=> {    
//        determinePoints()      
// }, []) 
    
    return (
      <div className="CardContainer">
        <div className="CardScore">
            <h3>Points: <span className="scoreSpan">{counter}</span></h3>
            <h3>Previous high:<span className="scoreSpan">{highScoreCounter}</span></h3>
        </div>
        <div className="CardArray">
        {cardArray}
        </div>
      </div>
    );
  }
  
export default CardContainer;