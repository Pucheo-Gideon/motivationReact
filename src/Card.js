import React from "react";
import "./index.css";
import SingleCard from "./SingleCard";

// import App from "./App";

const Card = (props) => {
  let items = props.item;

  return (
    <>
      <main key={items.id}>
        {items.map((item) => (
          <SingleCard item={item} />
        ))}
      </main>
    </>
  );
};

export default Card;

// import React from "react";
// import './index.css'

// export default function Card() {
//   let content =
//     "After SpaceX announce it maritime Starlink services last month it was a only a matter time before some household name in....";

//   let content2 ="Two Ev manufacturers are seeking cash infusions this week to bring their delayed vehicles to the market. Nikola, a Phoenix-based."
//   let content3 ="Tesla Model 3 owner who filed a lawsuit against the automaker on Frideay alleging unintended breaking is seeking class..."

//   return (

//     <section className="pose">
//       {/* <Motivation></Motivation> */}

//       <Assignment name="starlink" >
//         <div className="first">
//           {/* <img src="ship1.jpg" alt="ride" /> */}
//           {<img src={ship1} alt="" />}
//           <h3>Royal Carribean to use Starlink internet</h3>
//           <p>{content}</p>
//           <button>Read article</button>
//         </div>
//       </Assignment>

//       <Assignment name2="nicola">
//         <div className="first">
//           {<img src={car1} alt="" />}
//           <h3>Royal Carribean to use Starlink internet</h3>
//           <p>{content2}</p>
//           <button>Read article</button>
//         </div>
//       </Assignment>

//       <Assignment name3="tesla">
//         <div className="first">
//           {/* <img src="ship1.jpg" alt="ride" /> */}
//           {<img src={car2} alt="" />}
//           <h3>Royal Carribean to use Starlink internet</h3>
//           <p>{content3}</p>
//           <button>Read article</button>
//         </div>
//       </Assignment >

//       {/* <Details name="Brendan" sex="female" color="dark"/> */}
//     </section>
//   );
// }
