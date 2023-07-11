export default function DessertsList(props) {
  const lowCalorieDesserts = props.data
    .filter((dessert) => {
      return dessert.calories < 500;
    })
    .sort((x, y) => {
      return x.calories - y.calories;
    })
    .map((dessert) => {
      return (
        <li>{dessert.name} - {dessert.calories} cal</li>
      )
    });
  return <ul>{lowCalorieDesserts}</ul>
}