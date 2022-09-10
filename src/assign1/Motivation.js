import "./index.css";
import mountain from "./mountain.jpg";



const Motivation = () => {
  let content ="When striving towards a goal, you must focus on what you want to obtain and avoid the impulse to go back to what you and what is comfortable  "
  
  return (
    <div className="first">
      {/* <img src="ship1.jpg" alt="ride" /> */}
      {<img src={mountain} alt="" />}
      <h3>Fire Up Your Motivation </h3>
      <p>{content}</p>
      <p id="by">by <a href="/">kyle Patterson</a></p>
      <button>Read article</button>
    </div>

  );
};

export default Motivation;
