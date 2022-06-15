function Card(props) {
    return (
      <div className="Card">
        <img src={props.src} alt={props.alt} onClick={props.onClick} id={props.id}></img>
      </div>
    );
  }
  
  export default Card;