const SingleCard = (props) => {
    const item = props.item
  return (
    <div className="first">
      <img src={item.image} alt="ship" />
      <h4> {item.heading} </h4>
      <p>{item.content}</p>
    <button style={{height:"30px"}}>Read Article</button>
    </div>
  );
};

export default SingleCard;
