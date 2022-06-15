function Card(props) {
    return (
      <div className="Card">
        <p onClick={props.onClick} id={props.id}>{props.name}</p>
      </div>
    );
  }
  
  export default Card;