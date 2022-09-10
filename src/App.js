    import React from "react"
    import car1 from "./car1.jpg"
    import car2 from "./car2.jpg"
    import ship1 from "./ship1.jpg"
    import Card from "./Card"
    
const App = () => {

  const info = [
    {image:ship1,  
    heading: "Royal Carribean to use Starlink internet",
    content: "After SpaceX announce it maritime Starlink services last month it was a only a matter time before some household name in....",
    id: 1
    },

    {image:car1,  
    heading: "Nikola, Lucid try to raise more cash",
    content: "Two Ev manufacturers are seeking cash infusions this week to bring their delayed vehicles to the market. Nikola, a Phoenix-based....", 
    id: 2
    },

    {image:car2,  
    heading: "Tesla owner, seeks class action after 'phantom breaking'",
    content:"Tesla Model 3 owner who filed a lawsuit against the automaker on Frideay alleging unintended breaking is seeking class...", 
    id: 3
    },
  ]
  return (  
    <>
    <Card item={info}></Card>
    </>

  );
}
 
export default App;


























// import React from "react";
// // import Navbar from "./Navbar";
// // import Product from "./app/product";
// // import Home from "./Home";
// import Motivation from "./assign1/Motivation";
// // import Assignment from "./Assignment";
// import MyProfile from "./Card";

// function App() {
//   return (
//     <section className="home">
//       {/* <MyProfile></MyProfile> */}
//       {/* <Assignment></Assignment> */}
//       <Motivation />

//       {/* <Home/>
//       <section className="navbar">
//         <Navbar/>
//         </section>
//       <section>
//         <Product name="fish" description="buy my fish" price="20k" />
//       </section> */}
//     </section>
//   );
// }

// export default App;
