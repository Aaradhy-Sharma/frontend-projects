const data=[{
  id: "1",
  title: "Tiramisu",
  description: "The best Tiramisu in town",
  image: "https://picsum.photos/200/300/?random",
  price: "$5.00",
},
{
  id: "2",
  title: "Lemon Ice Cream",
  description: "Mind blowing Ice Cream",
  image: "https://picsum.photos/200/300/?random",
  price: "$4.50",
},
{
  id: "3",
  title: "Chocolate mousse",
  description: "Unexplored Flavor",
  image: "https://picsum.photos/200/300/?random",
  price: "$6.00",
}];

const topDessert = data.map(dessert => {
  return{
    content: `${dessert.title} - ${dessert.description}`,
    price:  `${dessert.price}`,
}
  })

export default function App(){
  return(
    console.log(topDessert),
    <h1>Examine the console output.</h1>
  );
}