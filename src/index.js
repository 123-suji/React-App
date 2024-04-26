import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
    
    return (
        <div className="container">
            <h1>hello React!</h1>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
    } 


function Header() {

// const style= {color: 'blue' , fontSize: '50px'}

const style = {};
return (
    <header className="header">
  
<h1 style={style}>fast react</h1>
</header>
 );
}

function Menu() {
  const pizzas = pizzaData
  // const pizzas = []
  const numPizzas = pizzas.length;
 return <main className="menu">
 
    <h2>our menu</h2>

    {numPizzas > 0 ? (
      <>
    <p>
      Authentic ,6 creative dishes to choose from.All frm stone,all organic.
    </p>

     
    <ul className="pizzas">
   
         {pizzaData.map(pizza => (
         <Pizza pizzaObj={pizza} Key={pizza.name} />
         
       ))}
    </ul>
    </>
     ): (<p>we are still working,pls come back:</p>
     )}

    {/* <Pizza 
     
     name="Pizza spinci"
     ingredients='Tomato, mozarella, ham, aragula, and burrata cheese'
     photoName='spinaci.jpg'
     price={15}
    
    />

<Pizza 
     
     name="Pizaa Funghi"
     ingredients='Tomato, mushrooms, ham'
     photoName='funghi.jpg'
     price={20}
    
    /> */}

   
 </main>
}

function Pizza(props) {
  console.log(props);

  if(props.pizzaObj.soldOut) return null;

    return (
     <li className="pizaa">
           <img src={props.pizzaObj.photoName} alt="{props.pizzaObj.name" />
         <div>
           <h3>{props.pizzaObj.name}</h3>
           <p>{props.pizzaObj.ingredients}</p>
           <span>{props.pizzaObj.price + 5}</span>
        </div>
     </li>
    );
    
}


function Footer(props) {
// console.log(props)
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen)
  return (
      <footer className="footer">
          {isOpen ? (
            <Order closeHours={closeHour}/>
             
          ) : (
              <p>Sorry, we are closed. Our opening hours are from {openHour}:00 to {closeHour}:00.</p>
          )}
      </footer>
  );
}

function  Order(props) {
  return  <div className="order">
  <p>We are open until {props.closeHours}:00. Come visit or order online!</p>
  <button className="btn">Order</button>
</div>
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>);
