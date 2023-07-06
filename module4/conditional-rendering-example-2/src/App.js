export default function App() {
  const time = new Date();
  const day = time.toLocaleString("en-us", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 12;
  let dayMessage;

  if (day.toLowerCase() === 'monday') {
    dayMessage = `Happy ${day}`;
  }

  else if (day.toLowerCase() === 'tuesday') {
    dayMessage = `Happy ${day}, four days to go`;
  }

  else if (day.toLowerCase() === 'wednesday') {
    dayMessage = `Happy ${day}, halfway there`;
  }

  else if (day.toLowerCase() === 'thursday') {
    dayMessage = `Happy ${day}, two days to go`;
  }

  else if (day.toLowerCase() === 'friday') {
    dayMessage = `Happy ${day}, woohoo just one more day to go!`;
  } 
  else {
    dayMessage = 'Stay Calm and keep having fun!';
  }

  return (
    <div className="app">
      <h1>{dayMessage}</h1>
      {morning ? <h2>Have you had breakfast yet?</h2> : null}
    </div>
  );
}
