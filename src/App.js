// import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;

// export default function App() {
//   console.log("Hi");
//   return (
//     <div className="App">
//       <Msg name="Ajith" />
//       <Msg name="Ajith" />
//       <Msg name="Ajith" />
//     </div>
//   );
// }

// export default function App() {
//   console.log("Hi");
//   const names = ["Ajith", "Kewal", "Deepa", "Robin"]
//   return (
//      <div className="App">
//         {names.map(nm=> <Msg name = {nm} />)}
//      </div>
//   );
// }
// function Msg({ name }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//     </div>
//   );
// }

export default function App() {
  console.log("Hi");
  const users = [
    {
      name: "Ajith",
      pic: "https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/05/Whatsapp-Profile-Images-wallpaper-hd-300x300.gif",
    },
    {
      name: "Kewal",
      pic: "https://www.seekpng.com/png/detail/506-5061704_cool-profile-avatar-picture-cool-picture-for-profile.png",
    },
    {
      name: "Deepa",
      pic: "https://cdn.pixabay.com/photo/2015/01/06/16/14/woman-590490__340.jpg",
    },
    {
      name: "Robin",
      pic: "https://st2.depositphotos.com/1531183/5770/v/950/depositphotos_57709697-stock-illustration-male-person-silhouette-profile-picture.jpg",
    },
  ];
  return (
    <div className="App">
      {users.map((ur) => (
        <Msg na={ur.name} pic={ur.pic} />
      ))}
    </div>
  );
}
function Msg({ name, pic }) {
  return (
    <div>
      <img className="user-pic" src={pic} alt={name} />
      <h1 className="user-name">{name}</h1>
    </div>
  );
}

