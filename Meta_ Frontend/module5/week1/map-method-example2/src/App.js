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


export default function App(){
  const listItems = data.map(dessert => {
    const itemText = `${dessert.title} - ${dessert.price}`;
    console.log(`Logged succesfully as of ${Date()}`);
    return(
     <li>{itemText}</li>
    )
  })
  return(
    <div className="App">
      <ul className="list-ul">
        {listItems}
      </ul>
    </div>
  );
}